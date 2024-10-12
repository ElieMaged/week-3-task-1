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
const p5 = document.getElementById('p5')

p5.addEventListener('click', () => {
    alert('P5 has been added to your shopping cart!')
})