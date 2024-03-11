const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const closeDailog = (ele, callback) => {
  document.querySelector('body').style.overflow = 'auto'
  ele.style.display = 'none'
  callback();
}
const showDailog = (ele, callback=()=>{}) =>{
  document.querySelector('body').style.overflow = 'hidden'
  ele.style.display = 'flex'
  callback();
}
// video
document.getElementById('showVideo').addEventListener('click', () => {
  showDailog(document.getElementById('show-content'), ()=>{
    document.getElementById('dailog-content').innerHTML = '<video src="./assets/videos/Black Blue How To Workout for Beginner Video.mp4" autoplay></video>'
  })
})
document.getElementById('close-button').addEventListener('click', () => {
  closeDailog(document.getElementById('show-content'), () => { document.querySelector('#show-content-inner video').currentTime = 0 })
})

document.getElementById('signInBtn').addEventListener('click',()=>{
  showDailog(document.getElementById('show-content'), ()=>{
    document.getElementById('dailog-content').innerHTML = `<div class="wrapper1" style="background-image: url('./assets/images/classes-bg.png');">
    <div class="left-wrapper">
      <video src="./assets/videos/Black Orange Dynamic Grunge Ad TikTok Video .mp4"" 
       autoplay loop muted ></video>
    </div>
    <div class="right-wrapper">
      <button class="remove-button"><p>X</p></button>

      <div class="welcome-div">
        <p>Welcome To FlexFusion</p>
      </div>

      <div class="user-name">
        <label for="user-name">Username or Email</label>
        <input type="email" id="user-name" >
      </div>

      <div class="password">
        <label for="user-name">Username or Email</label>
        <input type="password" >
        <p class="special-para">Forgot password?</p>
      </div>
     
      <div class="sign-up">
         <button>sign in</button>
      </div>
      <div class="extra-div">
        <p><a href="#">Create Account</a></p>
        <p><a href="#">Need Help?</a></p>
      </div>

      <div class="line-div">
        <hr>
        <p>or</p>
        <hr>
      </div>

      <div class="google-login">
        <img src="./assets/images/google-image.png" alt="">
        <p>Continue with Google</p>
      </div>
      <div class="apple-login">
        <img src="./assets/images/apple-logo.png" alt="">
        <p>Continue with Apple</p>
      </div>

    </div>
  </div>`
  })
})