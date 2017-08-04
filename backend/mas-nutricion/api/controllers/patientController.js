

module.exports = {

    postPatient: function (request, response) {

        // patient.name = request.body.name;
        // patient.lastName = request.body.lastName;
        // patient.diets = request.body.diets;
        var values = request.allParams();

        patient.create(values, function createPatient(err, patient){
          if(err){
            response.status(500).send({
              error:"Could not create patient"
            });
          } else {
            response.send(patient);
          }
        });
    }







};
