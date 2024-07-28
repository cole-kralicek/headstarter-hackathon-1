require('dotenv').config();
const { default: fetch } = require('node-fetch');



const key = process.env.STEAMKEY;

const allGamesUrl = `https://api.steampowered.com/IStoreService/GetAppList/v1/?include_games=true&include_dlc=false&include_software=false&include_videos=false&include_hardware=false&key=3539272DDA1D07BBE9DC746EDBF78735&max_results=200`;

async function getAllGames() {
    try {
        const response = await fetch(allGamesUrl);
        if (!response.ok) {
            throw new Error(`HTTP request failed: ${response.status}`);
        }
        const json = await response.json();
        console.log(json.response.apps)
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
        console.log("righthere",json[appId])
        return;
    } catch (error) {
        throw new Error(`HTTP request failed: ${error.message}`);
    }
}

async function fetchGamesByPage(allGames, pageIndex, pageSize) {
    const games = []
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    const gamesToFetch = allGames.slice(start, end);

    const gameDetailsPromises = gamesToFetch.map(async (game) => {
        const appId = game.appid;
        console.log(`Fetching details for appId: ${appId}`);
        const gameDetails = await getGameInfo(appId);
        console.log("try", gameDetails)
        return gameDetails;
    });

    const gameDetails = await Promise.all(gameDetailsPromises);
    return gameDetails;
}

module.exports = { getAllGames, getGameInfo, fetchGamesByPage };