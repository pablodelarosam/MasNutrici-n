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
        return res.json({
          "status": 500
        });
      if (!user)
        return res.json({
          "status": 500
        });

      // Compare password attempt from the form params to the encrypted password
      // from the database (`user.password`)
      Passwords.checkPassword({
        passwordAttempt: req.param('password'),
        encryptedPassword: user.password
      }).exec({

        error: function(err) {
          return res.json({
            "status": 500
          });
        },

        // If the password from the form params doesn't checkout w/ the encrypted
        // password from the database...
        incorrect: function() {
          return res.json({
            "status": 500
          });
        },

        success: function() {
          // Store user id in the user session
          req.session.me = user.id;
          // All done- let the client know that everything worked.
          return res.json({
            "status": 200,
            "user": user
          });
        }
      });
    });
  },

  signup: function(req, res) {
    // Encrypt a string using the BCrypt algorithm.
    Passwords.encryptPassword({
      password: req.param('password'),
      difficulty: 10
    }).exec({
      // An unexpected error occurred.
      error: function(err) {},
      // OK.
      success: function(encryptedPassword) {
        var data = {
          full_name: req.param('full_name'),
          email: req.param('email'),
          password: encryptedPassword,
          role: req.param('role')
        }

        User.create(data, function userCreated(err, newUser) {
          if (err) {
            // Otherwise, send back something reasonable as our error response.
            return res.json({
              "status": 500
            });
          }

          req, session.me = newUser.id;
          // Send back the id of the new user
          return res.json({
            "status": 200,
            "user": newUser
          });
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

};
