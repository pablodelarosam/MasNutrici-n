module.exports = {

    checkAdmin: function (request, response) {

        // patient.name = request.body.name;
        // patient.lastName = request.body.lastName;
        // patient.diets = request.body.diets;
        // var values = request.allParams();
        //
        // admin.create(values, function createPatient(err, patient){
        //   if(err){
        //     response.status(500).send({
        //       error:"Could not create patient"
        //     });
        //   } else {
        //     response.send(patient);
        //   }
        // });
        var email = request.param('email');
      var password = request.param('password');
      //var sql = "INSERT INTO query VALUES ('"+param1+"', "+param2+")";

        admin.find({ email: email }).exec(function (err, user){
  if (err) {
    return response.serverError(err);
  }
  sails.log('Found admin: ', user);
  return response.json(user);
});
    }







};
