const axios = require('axios');
const Dev = require('../models/devs')
const stringAsArray = require('../utils/stringtoarray')


module.exports = {
    async index(req, res) {
       const devs =  await Dev.find(); // poderia filtrar colocando Dev.find({nome:diego3d}) p exemplo
       return res.json(devs);
    },


    async store(req, res) {
        console.log(req.body);
        const { github_username, techs, latitude, longitude } = req.body;
        let dev = await Dev.findOne({github_username});

        if (!dev) {

            const response = await axios.get('https://api.github.com/users/' + github_username);
            const { name = login, avatar_url, bio } = response.data;
            const techsArray = stringAsArray(techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],

            }

             dev = await Dev.create({
                github_username, //não preciso declarar a chave pq e short sintaxe pq é o mesmo nome, só no ultimo q é array
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
            console.log(name, avatar_url, bio, github_username);

        }


        return res.json(dev);

    }
}