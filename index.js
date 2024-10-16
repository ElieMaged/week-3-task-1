const logged = document.getElementById('logged');

if(localStorage.getItem('user')) {
    isLoggedIn = true
} else {
    isLoggedIn = false
}

if(isLoggedIn) {
    document.getElementById("restricted-content").style.display = "block";
    document.getElementById("login-prompt").style.display = "none";
} else {
    document.getElementById("restricted-content").style.display = "none";
    document.getElementById("login-prompt").style.display = "block";
}

//islogged logic
// let isLoggedIn = true;

//navbar login text
logged.innerHTML = isLoggedIn ? `Welcome Back ${localStorage.getItem('user')}` : 'Sign up';

if(isLoggedIn) {
    let buttons = document.getElementById('restricted')
buttons.style.display = 'block'
}


//Buying buttons and logic
let cart = 0;
//Persona 5 buy button
const p5 = document.getElementById('p5')

p5.addEventListener('click', () => {
    cart += 60;
    console.log(cart);
    localStorage.setItem('cart', cart)
    alert('Persona 5 has been added to your shopping cart!');
});



//persona 4 buy buttons
const p4 = document.getElementById('p4');

p4.addEventListener('click', () => {
    cart += 40;
    console.log(cart);
    localStorage.setItem('cart', cart)
    alert('Persona 4 has been added to your shopping cart!');
});
const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
    console.log(localStorage.getItem('cart'))
    localStorage.clear();

});


//checkout conditionals
const checkout = document.getElementById('checkout')

checkout.addEventListener('click',() => {
    if(!localStorage.getItem('cart')) {
        alert('Your shopping cart is empty!')
    } else {
        window.open("./checkout.html")
    }    
})

