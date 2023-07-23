// homepage movie API

const movieAPI = document.getElementById('movieList')
const numberOfUser = document.getElementsByClassName('numberOfUser')

function myFunction() {
    document.getElementById("dropDownMenu").classList.toggle("show");
}

document.getElementById("myButton").addEventListener("click", myFunction);

function showButtons(num) {
    const userSet = document.querySelector(".userSet");
    userSet.innerHTML = " ";

    for (let i = 1; i <= num; i++) {
        const userButton = document.createElement("a")
        userButton.classList.add("userButton")
        userButton.textContent = `User ${i}`;
        userButton.href = `voting.html`;
    
        userSet.appendChild(userButton)
    }
}

const myBtn = document.getElementById("myButton")
window.onclick = ("click", function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    } 
}); 
