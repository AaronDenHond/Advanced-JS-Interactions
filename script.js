Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
 });
 
 function randomLetter(){
     const alphabet = "abcdefghijklmnopqrstuvwxyz"
     return alphabet[Math.floor(Math.random() * alphabet.length)]
 }

 let circle = document.querySelector(".chaser");

 function CircleFollowsCursor(e) {

    circle.style.left = e.pageX + "px";
    circle.style.right = e.pageY + "px";

 }

 document.addEventListener("mousemove", CircleFollowsCursor());