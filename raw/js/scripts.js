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

// scrolling to form
var posForm = document.getElementById("form-daftar-langsung").getBoundingClientRect().top;
var offSet = 30;
// tombol kembali dan selanjutnya

// bagan anak 
function iAnak(elem) {
    var bAnak = document.getElementById("i-anak");
    const btn = document.getElementById("btn");

    btn.addEventListener('click', () => {
        if (elem.id == "n-i-anak") {
            bAnak.classList.add("d-none");
            document.getElementById("i-anak2").classList.remove("d-none");
            var posScroll = document.getElementById("pos-form").getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: posScroll,
                behavior: "smooth"
            });
        }
    });
}

        

// bagan anak 
function iAnak2(elem){
    var bAnak2 = document.getElementById("i-anak2");
    if(elem.id == "n-i-anak2"){
        bAnak2.classList.add("d-none");  
        document.getElementById("i-alamat").classList.remove("d-none")
        var posScroll = posForm + window.scrollY - offSet;
        window.scrollTo({
            top : posScroll,
            behavior : "smooth"
        });
    }
    else{
        bAnak2.classList.add("d-none");
        document.getElementById("i-anak").classList.remove("d-none")
        var posScroll = posForm + window.scrollY - offSet;
        window.screenTop({
            top : posScroll,
            behavior : "smooth"
        });
    }
}
// bagan alamat
function iAlamat(elem){
    var bAlamat = document.getElementById("i-alamat");
    if(elem.id == "n-i-alamat"){
        bAlamat.classList.add("d-none");  
        document.getElementById("i-ayah").classList.remove("d-none")
        var posScroll = posForm + window.scrollY - offSet;
        window.scrollTo({
            top : posScroll,
            behavior : "smooth"
        });
    }
    else{
        bAlamat.classList.add("d-none");  
        document.getElementById("i-anak").classList.remove("d-none")
        var posScroll = posForm + window.scrollY - offSet;
        window.scrollTo({
            top : posScroll,
            behavior : "smooth"
        });
    }
}

// bagan ayah
function iAyah(elem){
    var bAyah = document.getElementById("i-ayah");
    if(elem.id == "n-i-ayah"){
        bAyah.classList.add("d-none");  
        document.getElementById("i-ibu").classList.remove("d-none")
        var posScroll = posForm + window.scrollY - offSet;
        window.scrollTo({
            top : posScroll,
            behavior : "smooth"
        });
    }
    else{
        bAyah.classList.add("d-none");  
        document.getElementById("i-alamat").classList.remove("d-none")
        var posScroll = posForm + window.scrollY - offSet;
        window.scrollTo({
            top : posScroll,
            behavior : "smooth"
        });
    }
}

// bagan ibu
function iIbu(elem){
    var bIbu = document.getElementById("i-ibu");
    if(elem.id == "n-i-ibu"){
        bIbu.classList.add("d-none");  
        document.getElementById("i-ibu").classList.remove("d-none")
        var posScroll = posForm + window.scrollY - offSet;
        window.scrollTo({
            top : posScroll,
            behavior : "smooth"
        });
    }
    else{
        bIbu.classList.add("d-none");  
        document.getElementById("i-ayah").classList.remove("d-none")
        var posScroll = posForm + window.scrollY - offSet;
        window.scrollTo({
            top : posScroll,
            behavior : "smooth"
        });
    }
}



