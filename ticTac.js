var box = document.querySelectorAll('td');
var refresh=document.querySelector('#re');
// var box1=document.querySelector('b1');
// var box2=document.querySelector('b2');
// var box3=document.querySelector('b3');
// var box4=document.querySelector('b4');
// var box5=document.querySelector('b5');
// var box6=document.querySelector('b6');
// var box7=document.querySelector('b7');
// var box8=document.querySelector('b8');
// var box9=document.querySelector('b9');
// var d=document.querySelector('#done');
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
  // else{
  //   this.textContent='';
  // }
};

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click',game);
}

// function score() {
//   if (box[1].textContent === box[5].textContent === box[9].textContent ||box[2].textContent === box[5].textContent === box[8].textContent ||box[3].textContent === box[5].textContent === box[7].textContent||box[1].textContent === box[4].textContent === box[6].textContent ||box[3].textContent === box[6].textContent === box[9].textContent || box[1].textContent === box[2].textContent === box[3].textContent || box[4].textContent === box[5].textContent === box[6].textContent || box[7].textContent === box[8].textContent === box[9].textContent) {
//     alert("Player Won!");
//   }
//   else{
//     alert("Game Tie!! ");
//   }
// };
// d.addEventListener('click',score);
