var box = document.querySelectorAll('td');
var refresh=document.querySelector('#re');

console.log("Connected!");

function reLoad(){
  for (var i = 0; i < box.length; i++) {
          box[i].textContent=" ";
  }
};
refresh.addEventListener('click',reLoad);

function game() {
  if (this.textContent === '') {
    this.textContent= 'X';
  }
  else if (this.textContent === 'X') {
    this.textContent='O';
  }
 
};

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click',game);
}
