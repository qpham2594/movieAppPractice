const userSet = document.querySelector(".userSet");
const myButton = document.getElementById("myButton");

const { classList: dropDownMenuClassList} = document.getElementById("dropDownMenu")


const toggleDropDown = () => dropDownMenuClassList.toggle("show");
myButton.addEventListener("click", toggleDropDown);

const showButtons = num => {
   
    userSet.innerHTML = " ";

    for (let i = 1; i <= num; i++) {
        const userButton = document.createElement("a")
        userButton.classList.add("userButton")
        userButton.textContent = `User ${i}`;
        userButton.href = `voting.html`;
        userSet.appendChild(userButton)
    }
}

const dropdowns = document.getElementsByClassName("dropdown-content");
window.addEventListener("click", (event) => {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach((openDropdown) => {
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      });
    }
  });
  