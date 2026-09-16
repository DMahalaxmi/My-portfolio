/* =====================================================
                    MOBILE MENU
===================================================== */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* =====================================================
                CLOSE MOBILE MENU
===================================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });


/* =====================================================
                    ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");


        if (
            item.getAttribute("href") ===
            "#" + current
        ) {

            item.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();


/* =====================================================
                    HERO TYPING
===================================================== */

const typingElement =
    document.getElementById("typing");


const typingWords = [

    "building_projects()",

    "solving_problems()",

    "learning_every_day()",

    "creating_solutions()"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingElement) return;


    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {


        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1400
            );

            return;

        }

    }


    else {


        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                typingWords.length;

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 45 : 80

    );

}


typeEffect();


/* =====================================================
                CONTACT TERMINAL
===================================================== */

const contactTyping =
    document.getElementById(
        "contactTyping"
    );


const contactText =
    "ready_to_connect()";


let contactIndex = 0;


function contactType() {

    if (!contactTyping) return;


    if (
        contactIndex <
        contactText.length
    ) {

        contactTyping.textContent +=
            contactText.charAt(
                contactIndex
            );


        contactIndex++;


        setTimeout(
            contactType,
            90
        );

    }

}


setTimeout(
    contactType,
    900
);


/* =====================================================
                    SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element => observer.observe(element)
);