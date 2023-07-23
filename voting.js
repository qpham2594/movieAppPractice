

const votingButtons = document.getElementsByClassName('votingbutton');

for (let i = 0; i < votingButtons.length; i++) {
  votingButtons[i].addEventListener("click", function() {
    window.location.href = `homepage.html`;
  });
}
