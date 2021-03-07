const picture = document.querySelector('img');
const changeButton1 = document.querySelector('.change1');
const changeButton2 = document.querySelector('.change2');

const imageArray = [
  'maia1.JPG',
  'maia2.JPG',
  'maia3.JPG',
  'maia4.JPG',
  'maia5.JPG',
  'maia6.JPG',
  'maia7.JPG',
  'maia8.JPG',
  'maia9.JPG',
]

let counter1 = 8;
let counter2 = 0;

function changeImage1() {
  counter1 -= 1;
  if (counter1 === 0) {
    counter1 = 8;
  }
  picture.src = imageArray[counter1];
}

function changeImage2() {
  counter2 += 1;
  if (counter2 === 8) {
    counter2 = 0;
  }
  picture.src = imageArray[counter2];
}

changeButton1.addEventListener('click',changeImage1);
changeButton2.addEventListener('click',changeImage2);

