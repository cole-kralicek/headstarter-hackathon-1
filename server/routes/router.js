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

        const pageSize = parseInt(req.query.pageSize) || 25;
        const pageIndex = parseInt(req.query.pageIndex) || 0;

        console.log(`Fetching page ${pageIndex + 1}`);
        const gameDetails = await fetchGamesByPage(allGamesCache, pageIndex, pageSize);
        data = []
        gameDetails.forEach(game => {
            gameData = {
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

        const gameDetails = await fetchPopularGames(allGamesCache);
        data = []
        gameDetails.forEach(game => {
            gameData = {
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

module.exports = router;
