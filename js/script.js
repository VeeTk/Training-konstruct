
const runInput = document.querySelector('#run_input')
const speed = 125;
const line = "test@youremail.com...";

// for (let i = 0; i <= line.length; i++) {
//    runInput.value = line.substring(0, i);
// }


let i = 0;
function runLine() {
   if(i++<line.length){
      runInput.value = line.substring(0, i);
   }else {
      runInput.value = " ";
      i=0;
   }
   done = setTimeout("runLine()", speed);
}

runLine();
