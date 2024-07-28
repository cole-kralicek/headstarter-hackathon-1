
const API_BASE_URL = 'http://localhost:4001'; 
export const fetchGames = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/games`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error('Failed to fetch games:', error);
    throw error;
  }
};

export const fetchPopularGames = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/popular`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error('Failed to fetch popular games:', error);
    throw error;
  }
};

export const fetchGameById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/game/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error(`Failed to fetch game with id ${id}:`, error);
    throw error;
  }
};
