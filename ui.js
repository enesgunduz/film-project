function UI(){
    
};

UI.prototype.addMovieUI = function(newMovie){
    const div = document.createElement('div');
    div.className = 'movie';
    div.innerHTML = `
        <img src="${newMovie.url}" alt="Movie poster">
        <div class="name">${newMovie.title}</div>
        <div class="director">${newMovie.director}</div>
        <a href="#" class="delete-item">Delete movie</a>
    `
    const movieList = document.querySelector('.movie-list');
    movieList.appendChild(div);
};

UI.prototype.displayMessages = function(type,message){
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.textContent = `${message}`;
    const body = document.querySelector('body');
    body.appendChild(div);

    setTimeout(function(){
        div.remove();
    },1000)
};

UI.prototype.loadAllMovies = function(movies){
    const movieList = document.querySelector('.movie-list');

    movies.forEach(function(movie,index){
        movieList.innerHTML += `
        <div class="movie">
            <img src="${movie.url}" alt="Movie poster">
            <div class="name">${movie.title}</div>
            <div class="director">${movie.director}</div>
            <a href="#" class="delete-item">Delete movie</a>
        </div>
        `;
    });
};

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.deleteMovieUI = function(element){
    element.parentElement.remove();
}

UI.prototype.deleteAllMovieUI = function(){
    const movieList = document.querySelector('.movie-list');
    
    while(movieList.firstElementChild !== null){
        movieList.firstElementChild.remove();
    };
};