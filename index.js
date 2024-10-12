const logged = document.getElementById('logged');


//islogged logic
let isLoggedIn = true;

//navbar login text
logged.innerHTML = isLoggedIn ? 'Welcome Back ^_^' : 'Sign up';

const butt = document.getElementById('signupButton')