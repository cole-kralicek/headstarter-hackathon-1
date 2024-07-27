require('dotenv').config();
const { default: fetch } = require('node-fetch');



const key = process.env.STEAMKEY;

const allGames = `https://api.steampowered.com/ISteamApps/GetAppList/v2/`;
const gameInfo = (appid) => `https://store.steampowered.com/api/appdetails?appids=${appid}`
const topGames = `https://steamspy.com/api.php?request=top100forever`

async function getAllGames(url) {
    try {
        // const fetch = await getFetch();
        const gameData = []
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
        const gameData = []
        const allGamesData = await getAllGames(allGames);
        console.log(allGamesData);
        for (const game of allGamesData.applist.apps) {
            const appId = game.appid;
            try {
                const gameDetails = await getGameInfo(appId);
                gameData.push(gameDetails);
            } catch (error) {
                console.error(`Failed to get details for appId ${appId}: ${error.message}`);
            }
        }

        console.log("here");
        console.log(gameData);
    } catch (error) {
        console.error(error);
    }
}

async function getGameInfo(appid) {
    const maxRetries = 5;
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const response = await fetch(gameInfo(appid));
            if (response.status === 429) {
                const retryAfter = response.headers.get('Retry-After');
                const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : (attempts + 1) * 1000;
                console.warn(`Rate limited. Waiting ${waitTime / 1000} seconds before retrying...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
                attempts++;
                continue;
            }
            if (!response.ok) {
                throw new Error(`HTTP request failed: ${response.status}`);
            }
            const json = await response.json();
            return json;
        } catch (error) {
            if (error.message.includes('HTTP request failed: 429')) {
                const waitTime = (attempts + 1) * 1000;
                console.warn(`Rate limited. Waiting ${waitTime / 1000} seconds before retrying...`);
                await new Promise(resolve => setTimeout(resolve, waitTime));
                attempts++;
            } else {
                throw new Error(`HTTP request failed: ${error.message}`);
            }
        }
    }
    throw new Error('Exceeded maximum retry attempts');
}

// Call the function that uses the data
useAllGamesData();