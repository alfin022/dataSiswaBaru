var currentPage = 0;


function pageBtn(elem) {
    var previousPage = document.getElementById("page-" + currentPage);
    var prevBtn = document.getElementById("prev-btn");
    var nextBtn = document.getElementById("next-btn");


    

    
    if (elem.id == "next-btn") {
        currentPage++;
        if (currentPage == 0) {
            prevBtn.classList.add("d-none");
        }
        if (currentPage == 5) {
            nextBtn.classList.add("d-none");
            
        }
        else {
            prevBtn.classList.remove("d-none")
            nextBtn.classList.remove("d-none")
        }
        var posScroll = document.getElementById("form-contain").getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: posScroll,
                behavior: "smooth"
            });
    } else if (elem.id == "prev-btn") {
        currentPage--;
        if (currentPage == 0) {
            prevBtn.classList.add("d-none");
        }
        else {
            prevBtn.classList.remove("d-none")
            nextBtn.classList.remove("d-none")
        }
        var posScroll = document.getElementById("form-contain").getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: posScroll,
                behavior: "smooth"
            });
    }



    var nextPage = document.getElementById("page-" + currentPage);

    if (previousPage) {
        previousPage.classList.add("d-none");

        
    }

    if (nextPage) {
        nextPage.classList.remove("d-none");
    }

    console.log(currentPage);
}


function checkFields() {
    var name = document.getElementById("nama").value;
    var nik = document.getElementById("nik").value;

    if (name.trim() === "" || nik.trim() === "") {
        document.getElementById("errorMessage").style.display = "block";
    } else {
        // Submit form or navigate to next page
        document.getElementById("form-daftar-langsung").submit();
    }
}
