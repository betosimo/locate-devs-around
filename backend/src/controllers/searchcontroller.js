const Dev = require('../models/devs')
const stringAsArray = require('../utils/stringtoarray')



module.exports = {
    async index(req, res) {
        //buscar todos deves num raio de 10km e filtrar por techs
const {latitude, longitude, techs} =  req.query;
const techsArray = stringAsArray(techs);
console.log(techsArray);
    const devs =  await Dev.find({
        techs:{
            $in:techsArray,
        },
        location:{
            $near:{
                $geometry:{
                    type:'Point',
                    coordinates: [longitude, latitude],
                },
                $maxDistance:10000,

            },

        }
    }); 

return res.json({devs});

    }

}
