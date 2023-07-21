// homepage movie API

const movieAPI = document.getElementById('movieList')
const numberOfUser = document.getElementsByClassName('numberOfUser')


const userForm = document.querySelector('form')
userForm.onsubmit = async function(e) {
    e.preventDefaut();
    const userInput = this.search.value.trim();
    if (!userInput){
        return;
    }
}

const movieAPIKey = 'eb27c13c3073bd1a4e7f1f8f94714eaf'
try {
    const res = await fetch (`https://www.themoviedb.org/settings/${movieAPIKey}${userInput}`)
    const movieData = await res.json()
} catch {error} {
    console.error ('Unable to get data', error)
}
