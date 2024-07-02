//function colorChange(){
   //document.body.style.backgroundColor = "pink";
//}
//setTimeout(colorChange,3000);

/*const text = "I love New York";
console.log(text.charAt(5));
*/
let text = "I am a web developer...";
let i = 0;
let speed = 80;

function type() {
    if(i < text.length){
        document.querySelector("#par").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();