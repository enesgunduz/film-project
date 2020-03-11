class Storage{
    static addMovieStorage(newMovie){
        let movie = this.getMovieFromStorage();
    
        movie.push(newMovie);
        localStorage.setItem('movie',JSON.stringify(movie))
    }
    
    static getMovieFromStorage(){
        let movie;
        
        if(localStorage.getItem('movie') === null){
            movie = [];
        }else{
            movie = JSON.parse(localStorage.getItem('movie'))
        }
        return movie;
    }
    
    static deleteMovieStorage(movieTitle){
        let movie = this.getMovieFromStorage();
    
        movie.forEach(function(mov,index){
    
            if(mov.title === movieTitle){
                movie.splice(index,1);
            }
    
            localStorage.setItem("movie",JSON.stringify(movie));
        })
    }
    
    static deleteAllMovieStorage(){
        localStorage.removeItem("movie");
    
    }
}

