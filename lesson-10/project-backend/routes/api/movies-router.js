import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import {validateBody} from "../../decorators/index.js";

import moviesSchemas from "../../schemas/movies-schemas.js";

import {authenticate, upload, isEmptyBody, isValidId} from "../../middlewares/index.js";

const movieAddValidate = validateBody(moviesSchemas.movieAddSchema);
const movieUpdateFavorite = validateBody(moviesSchemas.movieUpdateFavoriteSchema);

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", isValidId, moviesController.getById);

// upload.fields([{name: "poster", maxCount: 1}])
// upload.array("poster", 8)
moviesRouter.post("/", upload.single("poster"), isEmptyBody, movieAddValidate, moviesController.add);

moviesRouter.put("/:id", isValidId, isEmptyBody, movieAddValidate, moviesController.updateById);

moviesRouter.patch("/:id/favorite", isValidId, isEmptyBody, movieUpdateFavorite, moviesController.updateFavorite);

moviesRouter.delete("/:id", isValidId, moviesController.deleteById);

export default moviesRouter;