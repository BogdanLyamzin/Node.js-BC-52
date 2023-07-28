import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import {validateBody} from "../../decorators/index.js";

import moviesSchemas from "../../schemas/movies-schemas.js";

import {authenticate, isEmptyBody, isValidId} from "../../middlewares/index.js";

const movieAddValidate = validateBody(moviesSchemas.movieAddSchema);
const movieUpdateFavorite = validateBody(moviesSchemas.movieUpdateFavoriteSchema);

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", isValidId, moviesController.getById);

moviesRouter.post("/", isEmptyBody, movieAddValidate, moviesController.add);

moviesRouter.put("/:id", isValidId, isEmptyBody, movieAddValidate, moviesController.updateById);

moviesRouter.patch("/:id/favorite", isValidId, isEmptyBody, movieUpdateFavorite, moviesController.updateFavorite);

moviesRouter.delete("/:id", isValidId, moviesController.deleteById);

export default moviesRouter;