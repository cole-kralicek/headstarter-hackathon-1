require('dotenv').config();
const { default: fetch } = require('node-fetch');



const key = process.env.STEAMKEY;

const popularGamesUrl = `https://steamspy.com/api.php?request=top100in2weeks`;

async function getPopularGames() {
    try {
        const response = await fetch(popularGamesUrl);
        if (!response.ok) {
            throw new Error(`HTTP request failed: ${response.status}`);
        }
        const json = await response.json();
        console.log(json)
        return json;
    } catch (error) {
        throw new Error(`HTTP request failed: ${error.message}`);
    }
}

async function getPopularGameInfo(appId) {
    const url = `https://store.steampowered.com/api/appdetails?appids=${appId}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP request failed: ${response.status}`);
        }
        const json = await response.json();
        if (json[appId].success === true)  {
            return json[appId].data
        }
        return;
    } catch (error) {
        throw new Error(`HTTP request failed: ${error.message}`);
    }
}

async function fetchPopularGames(popularGames) {

    const gameDetailsPromises = Object.keys(popularGames).map(async (appId) => {
        const gameDetails = await getPopularGameInfo(appId);
        return gameDetails;
    });

    const gameDetails = await Promise.all(gameDetailsPromises);
    return gameDetails;
}

module.exports = { getPopularGames, getPopularGameInfo, fetchPopularGames};