//Fungsi Scroll down
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-scroll-to]").forEach(function (element) {
        element.addEventListener("click", function () {
            const targetId = this.getAttribute("data-scroll-to");
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    var btn = $('#button');

    $(window).scroll(function() {
        console.log("Scrolling...");
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

    console.log("jQuery is loaded");
});



function search(){
    let textToSearch = document.getElementById("cari").value;
    let paragraph = document.getElementById("paragraph");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textToSearch}`,"gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}