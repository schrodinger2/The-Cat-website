let targetstring = "i am a";
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

// tried and didnot work
        // for (var i = 0; i < targetstring.length; i++) {
        //   for (var j = string[i]; j != targetstring[i]; j = randomizer()) {
        //       string[i] = randomizer();
        //       console.log(string);
        //
        //   }
          // while (string != targetstring) {)


function thisShouldHaveBeenAClass(i) {

    let changer =   setInterval( () => {

      string = string.replace(string.charAt(i), randomizer());
      document.querySelector(".para").textContent = string;
      console.log(string);
      if (string.charAt(i) == targetstring.charAt(i)) {clearInterval(changer);}
    }, 100);

}

// for (var i = 0; i < targetstring.length; i++) {
//   thisShouldHaveBeenAClass(i)
// }

  // thisShouldHaveBeenAClass(0)
  // thisShouldHaveBeenAClass(1)
  // thisShouldHaveBeenAClass(2)
  // thisShouldHaveBeenAClass(3)
  // thisShouldHaveBeenAClass(4)
  thisShouldHaveBeenAClass(5)
  // thisShouldHaveBeenAClass(6)
