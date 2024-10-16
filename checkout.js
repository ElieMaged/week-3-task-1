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




const ol = document.getElementById('list')
const li = document.createElement('li')

let total = localStorage.getItem('cart')
li.innerHTML = total
ol.append(`${total} US Dollars`)



