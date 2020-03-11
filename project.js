const movieTitle = document.getElementById('movietitle')
const movieUrl = document.getElementById('movieurl')
const movieDirector = document.getElementById('moviedirector')
const addMovieButton = document.getElementById('addMovie');
const form = document.querySelector('.form');
const movieList = document.querySelector('.movie-list');
const deleteAllMovieButton = document.getElementById('deleteAllMovie');
eventListener();

const ui = new UI();
const storage = new Storage();


function eventListener(){
    form.addEventListener('submit',addMovie);
    document.addEventListener('DOMContentLoaded',function(){
        let movies = storage.getMovieFromStorage();

        ui.loadAllMovies(movies);
    });
    movieList.addEventListener('click',deleteMovie);
    deleteAllMovieButton.addEventListener('click',deleteAllMovie)
}

function addMovie(e){
    const title = movieTitle.value;
    const url = movieUrl.value;
    const director = movieDirector.value;
    
    if(movieTitle.value === '' || movieUrl.value === '' || movieDirector.value === ''){
        ui.displayMessages('danger','Please fill all the blanks..')
    }else{
        const newMovie = new Movie(title,url,director);
        ui.displayMessages('success','Movie added by list..')
        ui.addMovieUI(newMovie);
        storage.addMovieStorage(newMovie);
    }

    ui.clearInputs(movieTitle,movieUrl,movieDirector);
    e.preventDefault();
}

function deleteMovie(e){
    if(e.target.className === 'delete-item'){
       ui.deleteMovieUI(e.target);
       storage.deleteMovieStorage(e.target.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessages('success','Movie successfully deleted');
    }
}
function deleteAllMovie(e){
    ui.deleteAllMovieUI();
    storage.deleteAllMovieStorage();
    ui.displayMessages('success','All movies have been deleted successfully');
}