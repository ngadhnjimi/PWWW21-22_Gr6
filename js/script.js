var form = document.getElementById('form');

var error = ""

form.addEventListener('submit' , function(e){
    e.preventDefault()
    

    var username = document.getElementById('username')
    var email = document.getElementById('email')
    var textarea = document.getElementById('textarea')

    if(username.value == "" || email.value == "" || textarea.value == "" ){
        error = 'Please fill in the details'
    }
   
    else {
        alert('Form is submitted')
    }
    var message = document.getElementById('message')
    message.innerText = error
})

function validateName(e) {
    const pattern = /^[A-Za-z]$/;
    return pattern.test(e.key )
}


function check() {
            
    if (document.getElementById('r4').value ==
      document.getElementById('r5').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = '✔';
      console.log(document.getElementById('r4').innerHTML.length)
      return true;
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'X';
      return false;
    }
}

function checkpw() {
var bool = false;
if (document.getElementById('r4').value.length <8) {

document.getElementById('pwdlength').style.color = 'red';
document.getElementById('pwdlength').innerHTML = 'Must be 8 characters long';
return false;
}

else {

document.getElementById('pwdlength').style.color = 'green';
document.getElementById('pwdlength').innerHTML = 'good';
return true;
}

}

function validateName(e) {
        const pattern = /^[A-Za-z]$/;
        return pattern.test(e.key )
  }
  

function validateForm() {
  var isFormValid = true;
    

  isFormValid &= checkpw();
  isFormValid&=check();
  
    alert('Form is submitted')
    return isFormValid? true:false;
}
