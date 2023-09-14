import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema";
import { musicSchema } from "../schemas/music-schema";
import musicController from "../controllers/music-controller";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(musicSchema),musicController.createMusic); // TODO: validação via Joi

export default musicRouter;