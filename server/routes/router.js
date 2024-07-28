const express = require('express')
const router = express.Router()
const { getAllGames, getGameInfo, fetchGamesByPage } = require('../api/getAllSteamAPI.js');

router.get('/games', async (req, res) => {
    try {
        const allGames = await getAllGames();
        const pageSize = parseInt(req.query.pageSize) || 25;
        const pageIndex = parseInt(req.query.pageIndex) || 0;

        const gameDetails = await fetchGamesByPage(allGames, pageIndex, pageSize);
        res.json(gameDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
router.get('/popular', (req,res) => {

})

module.exports = router