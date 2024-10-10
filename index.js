let isLoggedIn = false;


const login = document.getElementById('login')
login.addEventListener('click', () => {
    console.log("log in!")
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
        isLoggedIn = true;
    } 
 
    
})




isLoggedin ? console.log('yay!'): console.log('nay :c')