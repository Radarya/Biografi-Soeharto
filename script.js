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

 const p = document.getElementById("p");
    const searchBtn = document.getElementById("mencari");

    searchBtn.addEventListener("click", () => {
        let input = document.getElementById("input").value.trim();

        if (input !== "") {
            // Escape karakter khusus dalam input
            const escapedInput = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            let regExp = new RegExp(escapedInput, "gi");

            // Mengganti teks yang cocok dengan <mark>
            p.innerHTML = p.innerHTML.replace(regExp, (match) => `<mark>${match}</mark>`);
        } else {
            // Jika input kosong, hapus semua highlight
            p.innerHTML = p.innerHTML.replace(/<mark>|<\/mark>/g, '');
        }
    });
});
