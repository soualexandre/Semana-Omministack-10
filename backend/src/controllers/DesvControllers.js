const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {

    async index(request, response){
        const devs  = await Dev.find();

        return response.json(devs);
    },



    async store(request, response) {

        const { github_username, techs, latitude, longitude } = request.body;
        const parseStringAsArray =  require('../utils/parsStringAsArray');
        let dev = await Dev.findOne({ github_username });
        console.log(github_username)

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            console.log(name, avatar_url, bio, github_username);

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            dev = await Dev.create({
                name,
                github_username,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });
        }


        return response.json(dev);
    }
};