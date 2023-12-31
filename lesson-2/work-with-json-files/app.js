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

// invokeAction({action: "list"})
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"})
// invokeAction({action: "add", title: "Avatar: way of water", director: "James Cameron"})
// invokeAction({action: "updateById", id: "h2J4bR45mCROIhnuPFpIC", title: "Avatar: Way of water", director: "James Cameron"});
// invokeAction({action: "deleteById", id: "h2J4bR45mCROIhnuPFpIC"});