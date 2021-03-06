// Base URL
const base_url = `https://api.rawg.io/api/`;
const key = `key=${process.env.REACT_APP_RAWG_API}`;

// Getting the date
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

const getCurrentDay = () => {
	const day = new Date().getDate();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

//Current Day/Month/Year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
// Game Details
export const gameDetailsURL = game_id =>
	`${base_url}games/${game_id}.json?&${key}`;
// Game Screenshots
export const gameScreenshotURL = game_id =>
	`${base_url}games/${game_id}/screenshots?&.json?&${key}`;
// Search game 
export const searchGameURL = (game_name) => 
`${base_url}games?${key}&search=${game_name}&page_size=9`;
