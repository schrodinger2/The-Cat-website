let targetstring = "i am a cat";
let string = "";

// there must be a better way...but i will go with this
const alphapet = ["q","w", "e", "r", "t","y", "u", "i","o", "p", "a",
"s", "d", "f", "g", "h", "j", "k", "l", "z", "x","c","v", "b", "n", "m", " "];

function randomizer() {
   let random = Math.floor(Math.random()*27);
   return alphapet[random];
}

//initallizing a random string
for (var i = 0; i < targetstring.length; i++) {
  string += randomizer();
}
document.querySelector(".para").textContent = string;

//changing the string letters randomly

function thisShouldHaveBeenAClass(i) {

    let changer =   setInterval( () => {

      // cant use string.replace because u cant specify which occurrence should be replaced
      string = randomReplacer(string, i)
      document.querySelector(".para").textContent = string;
      if (string.charAt(i) == targetstring.charAt(i)) {clearInterval(changer);}
    }, 100);
}

let startingColor = 101 //rgb

let colorChange = setInterval( () => {
  timeGradient(2);
  if (startingColor >= 255) {clearInterval(colorChange)} 
}, 100);


for (var i = 0; i < targetstring.length; i++) {thisShouldHaveBeenAClass(i)}

function randomReplacer(string, i) {
  let str = string.slice(0, i) + randomizer() + string.slice(i + 1) //deleting the (i)th letter from the string and adding random one
  return str;
}


function timeGradient(i) {
  startingColor += i
  document.querySelector(".para").style.color = `rgb(${startingColor} ,${startingColor} ,${startingColor})`;
  console.log(startingColor);
}
