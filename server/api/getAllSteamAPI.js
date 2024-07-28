require('dotenv').config();
const { default: fetch } = require('node-fetch');



const key = process.env.STEAMKEY;

const allGamesUrl = `https://api.steampowered.com/IStoreService/GetAppList/v1/?include_games=true&include_dlc=false&include_software=false&include_videos=false&include_hardware=false&key=3539272DDA1D07BBE9DC746EDBF78735&max_results=20`;

async function getAllGames() {
    try {
        const response = await fetch(allGamesUrl);
        if (!response.ok) {
            throw new Error(`HTTP request failed: ${response.status}`);
        }
        const json = await response.json();
        return json.response.apps;
    } catch (error) {
        throw new Error(`HTTP request failed: ${error.message}`);
    }
}

async function getGameInfo(appId) {
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

async function fetchGamesByPage(allGames) {
    const games = []
    console.log("allgames", allGames)
    const gamesArray = Object.values(allGames);

    const gameDetailsPromises = gamesArray.map(async (game) => {
        const appId = game.appid;
        const gameDetails = await getGameInfo(appId);
        return gameDetails;
    });

    const gameDetails = await Promise.all(gameDetailsPromises);
    return gameDetails;
}

module.exports = { getAllGames, getGameInfo, fetchGamesByPage };