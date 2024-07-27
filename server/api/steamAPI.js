require('dotenv').config();
const { default: fetch } = require('node-fetch');

const key = process.env.STEAMKEY;

allGames = `https://api.steampowered.com/ISteamApps/GetAppList/v2/`
// gameInfo = `https://store.steampowered.com/api/appdetails?appids=${appid}`
topGames = `https://steamspy.com/api.php?request=top100forever`

async function getAllGames(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP request failed: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(`HTTP request failed: ${error.message}`);
    }
}

async function useAllGamesData() {
    try {
        const allGamesData = await getAllGames(allGamesUrl);
        // Now you can use allGamesData in other functions
        console.log(allGamesData);

        // Example of using the data in another function
        const appId = allGamesData.applist.apps[0].appid; // Replace with actual logic to get an appid
        const gameDetails = await getGameInfo(appId);
        console.log(gameDetails);
    } catch (error) {
        console.error(error);
    }
}

async function getGameInfo(appid) {
    const url = gameInfoUrl(appid);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP request failed: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        throw new Error(`HTTP request failed: ${error.message}`);
    }
}

// Call the function that uses the data
useAllGamesData();