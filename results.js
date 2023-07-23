


  document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the number of users and the randomly generated movies from local storage
    const numberOfUsers = localStorage.getItem('numberOfUsers');
    const movies = JSON.parse(localStorage.getItem('randomMovies'));

    // Calculate the voting results
    const votingResults = {};
    for (let i = 1; i <= numberOfUsers; i++) {
      const userVote = localStorage.getItem(`user${i}Vote`);
      if (userVote) {
        votingResults[userVote] = (votingResults[userVote] || 0) + 1;
      }
    }

    // Find the movie with the most votes (winner)
    let winner = null;
    let maxVotes = 0;
    for (const movie in votingResults) {
      if (votingResults[movie] > maxVotes) {
        winner = movie;
        maxVotes = votingResults[movie];
      }
    }

    // Display the winner
    const resultContainer = document.querySelector('.resultContainer');
    const winnerElement = document.createElement('h3');
    if (winner) {
      winnerElement.textContent = `The winning movie is: ${winner} with ${maxVotes} votes!`;
    } else {
      winnerElement.textContent = 'No votes yet!';
    }
    resultContainer.appendChild(winnerElement);
  });