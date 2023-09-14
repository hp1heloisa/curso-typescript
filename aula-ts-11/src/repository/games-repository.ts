import { connection } from "database/database";
import { Game, GameSemId } from "../protocols/game-protocol";

async function getGames() {
  return await connection.query<Game>(`SELECT * FROM games`);
}

async function createGame(game: GameSemId) {
  return await connection.query(`INSERT INTO games (title, platform) VALUES ($1,$2)`, [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: GameSemId) {
  return await connection.query<Game>(`SELECT * FROM games WHERE games.title=$1 AND games.platform=$2`, [game.title, game.platform]);
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;