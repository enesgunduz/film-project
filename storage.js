function Storage(){

}

Storage.prototype.addMovieStorage = function(newMovie){
    let movie = this.getMovieFromStorage();

    movie.push(newMovie);
    localStorage.setItem('movie',JSON.stringify(movie))
}

Storage.prototype.getMovieFromStorage = function(){
    let movie;
    
    if(localStorage.getItem('movie') === null){
        movie = [];
    }else{
        movie = JSON.parse(localStorage.getItem('movie'))
    }
    return movie;
}

Storage.prototype.deleteMovieStorage = function(movieTitle){
    let movie = this.getMovieFromStorage();

    movie.forEach(function(mov,index){

        if(mov.title === movieTitle){
            movie.splice(index,1);
        }

        localStorage.setItem("movie",JSON.stringify(movie));
    })
}

Storage.prototype.deleteAllMovieStorage = function(){
    localStorage.removeItem("movie");

}