const logged = document.getElementById('logged')
const loggedInfo = document.getElementById('logged-info')

let isLoggedIn = true



//navbar acc/login
isLoggedIn ? logged.innerHTML = 'Welcome Back ^_^' : logged.innerHTML = 'Login';

logged.addEventListener('click', () => {
    if(isLoggedIn) {
      logged.href = './account.html'
    } else {
  logged.href = './index.html'
    }
})



//Creating Acc
let createAcc = document.getElementById('createAcc');
const username = document.getElementById('user')
const password = document.getElementById('pass')

createAcc.addEventListener('click', () => {
    if(localStorage.getItem('username') && localStorage.getItem('password')) {
        alert('You have already logged in!')
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
alert(`You have successfully signed up with ${username} as your username and ${password} as your password!`)
        isLoggedIn = false;
    } 
 
    
})


//account page

let accUser = document.getElementById('accUser')
let accPass = document.getElementById('accPass')



console.log(localStorage.getItem('username'))
