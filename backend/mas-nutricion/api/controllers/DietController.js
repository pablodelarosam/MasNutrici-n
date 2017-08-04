module.exports = {

    postDiet: function (request, response) {

        // patient.name = request.body.name;
        // patient.lastName = request.body.lastName;
        // patient.diets = request.body.diets;
        var values = request.allParams();

        diet.create(values, function createDiet(err, diet){
          if(err){
            response.status(500).send({
              error:"Could not create diet"
            });
          } else {
            response.send(diet);
          }
        });
    }






};
