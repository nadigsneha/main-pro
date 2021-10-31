let searchForm=document.querySelector('.login-form-container');
document.querySelector('#login-btn'). onclick =()=>{
    searchForm.classList.toggle('active');
}
// let searchForm=document.querySelector('.signin-form-container');
// document.querySelector('#signin-btn'). onclick =()=>{
//     searchForm.classList.toggle('show');
// }
function showsignin(){
  document.querySelector('signin-form-container').style.display='block';
}
// function displaysignin()
// {
//   document.querySelector('.signin-form-container').style.display='block';
// }


// // When the user clicks anywhere outside of the modal, close it

// let searchForm=document.querySelector('.modal');
// document.querySelector('#start'). onclick =()=>{
//     searchForm.classList.toggle('active');
// }
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