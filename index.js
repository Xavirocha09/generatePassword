const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl = document.getElementById("pass-el");
let passElTwo = document.getElementById("pass-el-two");
let rangeValue = document.getElementById("rangeValue")
let rangeInput = document.getElementById("rangeInput")


function createPassword() {
    let password1 = "";
    let password2 = "";
    
    for (let i = 0; i < rangeInput.value; i++) {
       let randomIndexOne = Math.floor(Math.random() * characters.length);
       let randomIndexTwo = Math.floor(Math.random()* characters.length)
        password1 += characters[randomIndexOne];
        password2 += characters[randomIndexTwo];
        
    }
        passEl.textContent = password1;
        passElTwo.textContent = password2;
    } 

function copyPassword() {}
    if (password1 !== " " ){
        copySuccess.setAttribute("src", "images/check.png")
        navigator.clipboard.writeText(password1.value)
    }