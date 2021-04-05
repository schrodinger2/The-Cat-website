// there must be a better way...but i will go with this
const alphapet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a",
  "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", " "
];

function randomizer() {
  let random = Math.floor(Math.random() * 27);
  return alphapet[random];
}

let targetstring = "i am a cat";
let string = "";

//initallizing a random string
for (var i = 0; i < targetstring.length; i++) {
  string += randomizer();
}
document.querySelector(".para").textContent = string;

//changing the string letters randomly

let correctLetters = 0;

function thisShouldHaveBeenAClass(i) {
  let changer = setInterval(() => {

    // cant use string.replace because u cant specify which occurrence should be replaced
    string = randomReplacer(string, i)
    document.querySelector(".para").textContent = string;
    if (string.charAt(i) == targetstring.charAt(i) || string.charAt(i) == targetstring.charAt(i).toUpperCase()) {
      correctLetters++
      if (correctLetters == targetstring.length) {
        newPage();
      }
      clearInterval(changer);
    }
  }, 65);
}

for (var i = 0; i < targetstring.length; i++) {
  thisShouldHaveBeenAClass(i)
}


let startingColor = 101; //rgb

let colorChange = setInterval(() => {
  timeGradient(2);
  if (startingColor >= 255) {
    clearInterval(colorChange)
  }
}, 65);



function randomReplacer(string, i) {
  let ran = randomizer();
  // making  "i" and "c" upper case
  if (i == 0 || i == 7) {
    ran = randomizer().toUpperCase();
  }

  let str = string.slice(0, i) + ran + string.slice(i + 1) //deleting the (i)th letter from the string and adding random one
  return str;
}


function timeGradient(i) {
  startingColor += i
  document.querySelector(".para").style.color = `rgb(${startingColor} ,${startingColor} ,${startingColor})`;
}

//end of preloader

function newPage() {
  let height = document.body.clientHeight / 4;
  let width = document.body.clientWidth / 4;
  let rects = [];
  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 4; i++) {
      let rect = document.createElement("div");
      //styling
      rect.className = "firstPage";
      rect.style.background = "#123";
      rect.style.height = `${height}px`;
      rect.style.width = `${width}px`;
      rect.style.position = "fixed";
      rect.style.bottom = `${height*j}px`;
      rect.style.right = `${width*i}px`;
      rects.push(rect)
    }
  }
  //rects should have 9 elements now we  display them
  var i = 0;
  let randomDisplay = setInterval(() => {
    let randomRect = rects[i];
    document.body.appendChild(randomRect);
    if (i == 15) {
      clearInterval(randomDisplay)
    }
    i++
  }, 95);
  setTimeout(() => {
    const head = document.querySelector("head");
    head.innerHTML += '<link rel="stylesheet" href="./second-page.css">';
  }, 1700);
}
