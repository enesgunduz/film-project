const movieTitle = document.getElementById('movietitle')
const movieUrl = document.getElementById('movieurl')
const movieDirector = document.getElementById('moviedirector')
const addMovieButton = document.getElementById('addMovie');
const form = document.querySelector('.form');
const movieList = document.querySelector('.movie-list');
const deleteAllMovieButton = document.getElementById('deleteAllMovie');
eventListener();

function eventListener(){
    form.addEventListener('submit',addMovie);
    document.addEventListener('DOMContentLoaded',function(){
        let movies = Storage.getMovieFromStorage();

        UI.loadAllMovies(movies);
    });
    movieList.addEventListener('click',deleteMovie);
    deleteAllMovieButton.addEventListener('click',deleteAllMovie)
}

function addMovie(e){
    const title = movieTitle.value;
    const url = movieUrl.value;
    const director = movieDirector.value;
    
    if(movieTitle.value === '' || movieUrl.value === '' || movieDirector.value === ''){
        UI.displayMessages('danger','Please fill all the blanks..')
    }else{
        const newMovie = new Movie(title,url,director);
        UI.displayMessages('success','Movie added by list..')
        UI.addMovieUI(newMovie);
        Storage.addMovieStorage(newMovie);
    }

    UI.clearInputs(movieTitle,movieUrl,movieDirector);
    e.preventDefault();
}

function deleteMovie(e){
    if(e.target.className === 'delete-item'){
       UI.deleteMovieUI(e.target);
       Storage.deleteMovieStorage(e.target.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessages('success','Movie successfully deleted');
    }
}
function deleteAllMovie(e){
    UI.deleteAllMovieUI();
    Storage.deleteAllMovieStorage();
    UI.displayMessages('success','All movies have been deleted successfully');
}