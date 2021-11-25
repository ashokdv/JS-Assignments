const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here

    if(operation ==='add'){
        movies.push(movie);
        // console.log(movies);
    }
    else if(operation ==='remove'){
        movies.pop();
        // console.log(movies);
    }

    return movies

}

module.exports = favouriteMovie;
