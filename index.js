const logged = document.getElementById('logged');

if(localStorage.getItem('user')) {
    isLoggedIn = true
} else {
    isLoggedIn = false
}


//islogged logic
// let isLoggedIn = true;

//navbar login text
logged.innerHTML = isLoggedIn ? `Welcome Back ${localStorage.getItem('user')}` : 'Sign up';



//Buying buttons
let cart = []
const p5 = document.getElementById('p5')

p5.addEventListener('click', () => {
    cart.push({name:'Persona 5', price:'60'});
    localStorage.setItem('cart', cart)
    console.log(cart)
    alert('P5 has been added to your shopping cart!');
})

const clear = document.getElementById('clear')

clear.addEventListener('click', () => {
    localStorage.clear();
})