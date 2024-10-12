const user = document.getElementById('username');

const pass = document.getElementById('password');


if(localStorage.getItem('user')) {
    isLoggedIn = true
} else {
    isLoggedIn = false
}

logged.innerHTML = isLoggedIn ? `Welcome Back ${localStorage.getItem('user')}` : 'Sign up';



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



