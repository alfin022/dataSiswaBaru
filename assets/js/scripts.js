// toogle
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// klik diluar sidebar untuk menghilangkan nav
const ham = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!ham.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove ('active');
    }
});
function iAnak(elem){
    var bAnak = document.getElementById("i-anak");
    if(elem.id == "n-i-anak"){
        bAnak.classList.add("d-none");  
        document.getElementById("i-alamat").classList.remove("d-none")
    }
}


