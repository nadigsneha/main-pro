let searchForm=document.querySelector('.login-form-container');
document.querySelector('#login-btn'). onclick =()=>{
    searchForm.classList.toggle('active');
}

function showsignin(){
  document.querySelector('signin-form-container').style.display='block';
}

function displayteacher()
{
  document.querySelector('.login-teacher').style.display='block';
}
function closeteacher()
{
  document.querySelector('.login-teacher').style.display='none';
}
function displaystudent()
{
  document.querySelector('.login-student').style.display='block';
}
function closestudent() {
  document.querySelector('.login-student').style.display='none';
}