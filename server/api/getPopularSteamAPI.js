require('dotenv').config();
const { default: fetch } = require('node-fetch');



const key = process.env.STEAMKEY;

const popularGamesUrl = `https://steamspy.com/api.php?request=top100in2weeks`;

async function getPopularGames() {
    try {
        console.log("hi")
        const response = await fetch(popularGamesUrl);
        console.log("hi1")
        if (!response.ok) {
            console.log("damn1")
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
        console.log("hi2", appId)
        if (!response.ok) {
            console.log("damn")
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
    let counter = 0;
    const gameDetails = [];

    for (const appId of Object.keys(popularGames)) {
        if (counter >= 21) {
            break;
        }
        const gameDetail = await getPopularGameInfo(appId);
        gameDetails.push(gameDetail);
        counter++;
    }

    return gameDetails;
}


module.exports = { getPopularGames, getPopularGameInfo, fetchPopularGames};