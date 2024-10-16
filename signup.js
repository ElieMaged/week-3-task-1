const user = document.getElementById('username');

const pass = document.getElementById('password');


if(localStorage.getItem('user')) {
    isLoggedIn = true
    document.getElementById('restricted').style.display = 'block'
    document.getElementById('signup-content').style.display = 'none'
} else {
    isLoggedIn = false
    document.getElementById('restricted').style.display = 'none'
        document.getElementById('signup-content').style.display = 'block'
}

logged.innerHTML = isLoggedIn ? `Welcome Back ${localStorage.getItem('user')}` : 'Sign up';


// if(isLoggedIn) {
//     document.getElementById("restricted-content").style.display = "block";
//     document.getElementById("login-prompt").style.display = "none";
// } else {
//     document.getElementById("restricted-content").style.display = "none";
//     document.getElementById("login-prompt").style.display = "block";
// }
// ;

const logout = document.getElementById('logoutButton')
logout.addEventListener('click', () => {
    localStorage.clear();
    isLoggedIn = false;
    window.location.reload()
})


const butt = document.getElementById('signupButton')
butt.addEventListener('click', () => {
    setTimeout(() => {
        localStorage.setItem('user', user.value);
        localStorage.setItem('pass', pass.value);
       let pepe = localStorage.getItem('user');
       console.log(pepe)
       alert(`You have successfully signed up with the username ${user.value}`)
       user.value = ''
       pass.value = ''
       location.reload()
    },1000)
    

});





