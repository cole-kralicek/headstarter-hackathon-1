require('dotenv').config();
const { default: fetch } = require('node-fetch');



const key = process.env.STEAMKEY;

const allGamesUrl = `https://api.steampowered.com/ISteamApps/GetAppList/v2/`;

async function getAllGames() {
    try {
        const response = await fetch(allGamesUrl);
        if (!response.ok) {
            throw new Error(`HTTP request failed: ${response.status}`);
        }
        const json = await response.json();
        console.log(json.applist.apps)
        return json.applist.apps;
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
        console.log("here",json[appId])
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

async function main() {
    try {
        const allGames = await getAllGames();
        const pageSize = 25; 
        let pageIndex = 0;

        console.log(`Fetching page ${pageIndex + 1}`);
        let gameDetails = await fetchGamesByPage(allGames, pageIndex, pageSize);
       

        pageIndex++;
        console.log(`Fetching page ${pageIndex + 1}`);
        gameDetails = await fetchGamesByPage(allGames, pageIndex, pageSize);
        console.log(gameDetails);
        return gameDetails;
    } catch (error) {
        console.error(error);
    }
}

main();

module.exports = { getAllGames, getGameInfo, fetchGamesByPage };