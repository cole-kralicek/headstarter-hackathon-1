const express = require('express')
const router = express.Router()
const { getAllGames, getGameInfo, fetchGamesByPage } = require('../api/getAllSteamAPI.js');
const { getPopularGames, getPopularGameInfo, fetchPopularGames } = require('../api/getPopularSteamAPI.js');

let allGamesCache = null;

router.get('/games', async (req, res) => {
    try {
        if (!allGamesCache) {
            allGamesCache = await getAllGames();
        }
        console.log("idie", allGamesCache)
        const gameDetails = await fetchGamesByPage(allGamesCache);
        console.log("idie1", gameDetails)
        data = []
        gameDetails.forEach(game => {
            gameData = {
                "id": game.steam_appid,
                "name": game.name, 
                "description": game.detailed_description,
                "genre": game.genres[0].description,
                "review": game.metacritic,
                "release date": game.releasedate,
                "image": game.header_image,
                "requirements": {
                    "pc": game.pc_requirements,
                    "mac": game.mac_requirements,
                    "linux": game.linux_requirements
                }
            }
            data.push(gameData)
        })
        res.json({"data": data});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/popular', async (req, res) => {
    try {
        if (!allGamesCache) {
            allGamesCache = await getPopularGames();
        }
        console.log("wtf1", allGamesCache)
        
        const gameDetails = await fetchPopularGames(allGamesCache);
        console.log("wtf", gameDetails)
        data = []
        if (gameDetails){
            gameDetails.forEach(game => {
                gameData = {
                    "id": game.steam_appid,
                    "name": game.name, 
                    "description": game.detailed_description,
                    "genre": game.genres[0].description,
                    "review": game.metacritic,
                    "release date": game.releasedate,
                    "image": game.header_image,
                    "requirements": {
                        "pc": game.pc_requirements,
                        "mac": game.mac_requirements,
                        "linux": game.linux_requirements
                    }
                }
                data.push(gameData)
            })
        }
        
        res.json({"data": data});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/game/:id', async (req, res) => {
    try{
        const appId = req.params.id
        const gameDetails = await getGameInfo(appId);
        if(!gameDetails){
            return res.status(404).json({error: "Game not found!"})
        }

        const gameData = {
            "id": gameDetails.steam_appid,
            "name": gameDetails.name, 
            "description": gameDetails.detailed_description,
            "genre": gameDetails.genres[0].description,
            "review": gameDetails.metacritic,
            "release date": gameDetails.releasedate,
            "image": gameDetails.header_image,
            "requirements": {
                "pc": gameDetails.pc_requirements,
                "mac": gameDetails.mac_requirements,
                "linux": gameDetails.linux_requirements
            }
    };
    res.json({"data": gameData});
}catch(error){
    res.status(500).json({ error: error.message })
}
});

module.exports = router;