const navbar = document.querySelector('#header');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if(navbar.classList.toggle('open')){
        navBtnImg.src = './images/nav-close.svg';
    }else{
        navBtnImg.src = './images/nav-open.svg';
    }
}