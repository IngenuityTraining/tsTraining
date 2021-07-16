let output;
window.onload = () => {
  const numInput: HTMLInputElement = <HTMLInputElement>document.getElementById("gNum");
  const result: HTMLElement = <HTMLDivElement>document.querySelector('#result');
  // calculating random number between 1- 100
  const ranNumber: number = Math?.floor(Math?.random()*100) + 1;
  numInput.onblur = () => {
      let num: number = Number(numInput.value);
      if( num > ranNumber) {
          output = `<p class="bigger">Guessed number (${num}) is Higher. Try something smaller.</p>`;
          result.innerHTML += `<p class="bigger">Guessed number (${num}) is Higher. Try something smaller.</p>`;
      } else if(num < ranNumber) {
          result.innerHTML += `<p class="smaller">Guessed number (${num}) is Smaller. Try something bigger.</p>`;
      } else if(num === ranNumber) {
          result.innerHTML += `<p class="correct"> Yep! You guessed (${num}) it right.</p>`;
      } else if(isNaN(num)) {
          result.innerHTML += `<p class="error"> Please input (${num}) a valid number.</p>`;
      }
  }
};