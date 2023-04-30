const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');
const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//
// };

function randomJoke() {
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random1');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        joke.innerText = JSON.parse(this.responseText).value;
      } else {
        joke.innerText = 'Something went wrong!';
      }
    }
  };
  xhr.send();
}

jokeBtn.addEventListener('click', randomJoke);
document.addEventListener('DOMContentLoaded', randomJoke);
