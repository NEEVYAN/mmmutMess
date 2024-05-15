var loginForm = document.getElementById('loginForm');
var progressBar = document.getElementById('progressBar');
var progressBarWidth = 0;

loginForm.addEventListener('submit', function(event){

    event.preventDefault();
    progressBar.style.display = 'block';
    var email = loginForm.email.value;
    var password = loginForm.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (userCredential) {
        loginForm.reset();
        redirectToMain();
    })
    .catch(function (error) {
        alert('Invalid login credentials');
    })
    .finally(function () {
        progressBar.style.display = 'none';
    });
});

function redirectToMain() 
{
    window.location.href = 'index.html';
}



  
