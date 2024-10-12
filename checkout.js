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


const ol = document.getElementById('cart')

ol.append('hiiiii')

const cart = localStorage.getItem('cart')

