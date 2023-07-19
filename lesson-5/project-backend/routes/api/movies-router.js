import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import {validateBody} from "../../decorators/index.js";

import moviesSchemas from "../../schemas/movies-schemas.js";

import {isEmptyBody} from "../../middlewares/index.js";

const movieAddValidate = validateBody(moviesSchemas.movieAddSchema);

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", moviesController.getById);

moviesRouter.post("/", isEmptyBody, movieAddValidate, moviesController.add);

moviesRouter.put("/:id", isEmptyBody, movieAddValidate, moviesController.updateById);

moviesRouter.delete("/:id", moviesController.deleteById);

export default moviesRouter;