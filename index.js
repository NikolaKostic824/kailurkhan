$(document).ready(function () {
    $(function () {
        //this will hide all elements with the class 'portswap';
        //Recommend you set the style (CSS) of PortSwap to 'display: none',
        //so as to avoid flash of unstyled content;
        $(".PortSwap").not('#swap_0').hide();
        $('#swap_0').addClass("active");

        $('.btn_nav').on('click', function () {
            var activediv = $('.PortSwap.active').first();
            var activediv_id = parseInt(activediv[0].id.split('_')[1]);
            switch (this.id) {
                //execute code when backward button is pressed
                case 'btn_backward':
                    if (activediv_id - 1 >= 0) {
                        //previous iteration of div is present, show it
                        activediv.removeClass('active').hide();
                        $('#swap_' + (activediv_id - 1)).show().addClass('active');
                    } else {
                        activediv.removeClass('active').hide();
                        $('#swap_' + (11)).show().addClass('active');
                    }
                    break;
                    //execute code when forward button is pressed
                case 'btn_forward':
                    if (activediv_id + 1 < $('.PortSwap').length) {
                        //Next iteration of div is present, show it
                        activediv.removeClass('active').hide();
                        $('#swap_' + (activediv_id + 1)).show().addClass('active');
                    } else {
                        activediv.removeClass('active').hide();
                        $('#swap_' + (0)).show().addClass('active');
                    }
                    break;
            }
        });
    });
});

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });

}

function goToContact() {
    document.location.href = "./Contact.html"
}
function goToContactLogo() {
    document.location.href = "./About.html"
}
function goToHome() {
    document.location.href = "./Home.html"
}

function gotoJala() {
    window.open('https://www.instagram.com/jalabrat/?utm_medium=copy_link', '_blank');
}
function gotoMacDames() {
    window.open('https://www.instagram.com/mackdames1035/?utm_medium=copy_link', '_blank');
}
function gotoKun() {
    window.open('https://www.instagram.com/kun808_/?utm_medium=copy_link', '_blank');
}
function gotoBontoni() {
    window.open('https://www.instagram.com/bontoni_/?utm_medium=copy_link', '_blank');
}
function gotoMrEverything() {
    window.open('https://www.instagram.com/raicevicalex/?utm_medium=copy_link', '_blank');
}
function gotoJasonHardy() {
    window.open('https://www.instagram.com/jasonahardi/?utm_medium=copy_link', '_blank');
}
function gotoElek() {
    window.open('https://www.instagram.com/matijaelek/?hl=en', '_blank');
}
function gotoTropical() {
    window.open('https://www.instagram.com/tropical.lifeisfun/?utm_medium=copy_link', '_blank');
}
function gotoDjFricktion() {
    window.open('https://www.instagram.com/djfricktion/?utm_medium=copy_link', '_blank');
}
function gotoNedimLepic() {
    window.open('https://www.instagram.com/nedim_lepic/?utm_medium=copy_link', '_blank');
}
function gotoSashaDevic() {
    window.open('https://www.instagram.com/sashadevic/?hl=en', '_blank');
}
var swiper = new Swiper(".mySwiper", {
    loop: true
});
AOS.init();
navSlide();

function sendMail() {
    window.location = "mailto:kailurkhanjewelry@gmail.com";
}
function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}
