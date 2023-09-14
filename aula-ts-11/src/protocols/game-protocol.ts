export type Game = {
  "id": number;
  title: string;
  platform: string;
}

export type GameSemId = Omit <Game,"id">;