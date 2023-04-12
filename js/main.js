// trusted by

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 6
            }
        }]
    });
});
//show more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
    }
}
function moreRead() {
    var ddot = document.getElementById("dot");
    var more = document.getElementById("mor");
    var btn = document.getElementById("Btn");

    if (ddot.style.display === "none") {
        ddot.style.display = "inline";
        btn.innerHTML = "Read more";
        more.style.display = "none";
    } else {
        ddot.style.display = "none";
        btn.innerHTML = "View less";
        more.style.display = "inline";
    }
}
function lastRead() {
    var dot = document.getElementById("dod");
    var moree = document.getElementById("moree");
    var bttn = document.getElementById("bttn");

    if (dot.style.display === "none") {
        dot.style.display = "inline";
        bttn.innerHTML = "Read more";
        moree.style.display = "none";
    } else {
        dot.style.display = "none";
        bttn.innerHTML = "View less";
        moree.style.display = "inline";
    }
}