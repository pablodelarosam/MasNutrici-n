/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');
var crypto = require('crypto');

module.exports = {

  /**
   * Check the provided email address and password, and if they
   * match a real user in the database, sign in to Activity Overlord.
   */
  login: function(req, res) {
    // Try to look up user using the provided email address
    User.findOne({
      "email": req.param('email')
    }, function foundUser(err, user) {
      if (err || user === undefined)
        return res.json({"status": 500});
      if (!user)
        return res.json({"status": 500});

      // Compare password attempt from the form params to the encrypted password
      // from the database (`user.password`)
      Passwords.checkPassword({passwordAttempt: req.param('password'), encryptedPassword: user.password}).exec({

        error: function(err) {
          return res.json({"status": 500});
        },

        // If the password from the form params doesn't checkout w/ the encrypted
        // password from the database...
        incorrect: function() {
          return res.json({"status": 500});
        },

        success: function() {
          // All done- let the client know that everything worked.
          return res.json({"status": 200, "user": user});
        }
      });
    });
  },

  signup: function(req, res) {
    var values = req.allParams();
    // Encrypt a string using the BCrypt algorithm.
    Passwords.encryptPassword({password: req.param('password'), difficulty: 10}).exec({
      // An unexpected error occurred.
      error: function(err) {},
      // OK.
      success: function(encryptedPassword) {
        values['password'] = encryptedPassword;
        User.create(values, function userCreated(err, newUser) {
          if (err) {
            // Otherwise, send back something reasonable as our error response.
            return res.json({"status": 500});
          }

          // Send back the id of the new user
          return res.json({"status": 200, "user": newUser});
        });
      }
    });
  }, // end signup

  /**
   * Log out of Activity Overlord.
   * (wipes `me` from the sesion)
   */
  logout: function(req, res) {

    // Look up the user record from the database which is
    // referenced by the id in the user session (req.session.me)
    User.findOne(req.session.me, function foundUser(err, user) {
      if (err)
        return res.view("login");

      // If session refers to a user who no longer exists, still allow logout.
      if (!user) {
        return res.view("login");
      }

      // Wipe out the session (log out)
      req.session.me = null;

      // Either send a 200 OK or redirect to the home page
      return res.view("login");

    });
  },

  /**
   * Get Patitients
   */
  getPatients: function(req, res) {

    // Look up the user record from the database which is
    // referenced by the id in the user session (req.session.me)
    User.find({
      "doctor_id": req.param("id")
    }, function foundUser(err, users) {
      if (err)
        return res.json({"status": 500});

      // If session refers to a user who no longer exists, still allow logout.
      if (!users) {
        return res.json({"status": 500});
      }
      // Either send a 200 OK or redirect to the home page
      return res.json({"status": 200, "patients": users})

    });
  },

  /**
   * Delete Patient
   */
  deletePatient: function(req, res) {

    User.destroy({
      id: req.param("id")
    }, function deleteUser(err) {
      if (err) {
        // Otherwise, send back something reasonable as our error response.
        return res.negotiate(err);
      }
      return res.json({"status": 200});
    });
  },

  /**
   * Get update patient
   */
  updatePatient: function(req, res) {
    var values = req.allParams();
    User.update({
      id: req.param("id")
    }, values).exec(function updateProduct(err, updated) {
      if (err) {
        // handle error here- e.g. `res.serverError(err);`
        return res.negotiate(err);
      }
      return res.json({"status": 200, "user": updated});
    });
  }
}
