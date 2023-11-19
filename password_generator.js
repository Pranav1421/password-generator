const passwordBox = document.getElementById("password")
const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$&%!~"


const allChars = upperCase + lowerCase + number + symbol

const btn1 = document.getElementById("btn1")
btn1.addEventListener('click', () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    
    password += number[Math.floor(Math.random() * number.length)]
    
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (len > password.length) {
        console.log(password.length,'all');
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password
})

const btn2 = document.getElementById("btn2")
btn2.addEventListener('click', () => {

    const copy = passwordBox.value;
    navigator.clipboard.writeText(copy);
})