import yargs from "yargs";

import moviesService from "./movies/index.js";

const invokeAction = async({action, id, title, director})=> {
    try {
        switch(action) {
            case "list":
                const allMovies = await moviesService.getAllMovies();
                return console.log(allMovies);
            case "getById":
                const oneMovie = await moviesService.getMovieById(id);
                return console.log(oneMovie);
            case "add":
                const newMovie = await moviesService.addMovie({title, director});
                return console.log(newMovie);
            case "updateById":
                const updateMovie = await moviesService.updateMovieById(id, {title, director});
                return console.log(updateMovie);
            case "deleteById":
                const deleteMovie = await moviesService.deleteMovieByid(id);
                return console.log(deleteMovie);
            default:
                console.log("Unknown action");
        }
    }
    catch(error) {
        console.log(error.message);
    }
}

const {argv} = yargs(process.argv.slice(2));
invokeAction(argv);