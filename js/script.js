if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }
    $("#sec").on("click", function () {
        removeall();
        $("#sec").css("border", "2px solid whitesmoke");
        $("#sec").css("border-radius", "20px");
    });
    $("#pri").on("click", function () {
        removeall();
        $("#pri").css("border", "2px solid whitesmoke");
        $("#pri").css("border-radius", "20px");
    });
    $("#tri").on("click", function () {
        removeall();
        $("#tri").css("border", "2px solid whitesmoke");
        $("#tri").css("border-radius", "20px");
    });
    $("#quad").on("click", function () {
        removeall();
        $("#quad").css("border", "2px solid whitesmoke");
        $("#quad").css("border-radius", "20px");
    });
    $("#quint").on("click", function () {
        removeall();
        $("#quint").css("border", "2px solid whitesmoke");
        $("#quint").css("border-radius", "20px");
    });
    $("#hex").on("click", function () {
        removeall();
        $("#hex").css("border", "2px solid whitesmoke");
        $("#hex").css("border-radius", "20px");
    });
    $("#hept").on("click", function () {
        removeall();
        $("#hept").css("border", "2px solid whitesmoke");
        $("#hept").css("border-radius", "20px");
    });
}

$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// Light/Dark toggle
const checkbox = document.getElementById("checkbox");

function introAboutLogoTransition() {
    $("#about-quad").css("top", "70%");
    $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
    if (
        localStorage.getItem("tourism_website_darkmode") !== null &&
        localStorage.getItem("tourism_website_darkmode") === "true"
    ) {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}
checkDarkMode();

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark")
        ? localStorage.setItem("tourism_website_darkmode", true)
        : localStorage.setItem("tourism_website_darkmode", false);
});

// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (window.screen.width <= 425) {
            if (rect.top <= 1300) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else if (425 <= window.screen.width <= 768) {
            if (rect.top <= 1250) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        }
    });
}
const translation = {
    en: {
        header: "ADVENTURE",
        nav_one: "Home",
        nav_two: "Events",
        nav_three: "Explore",
        nav_four: "Tours",
        nav_five: "About",
        nav_six: "Contributions",
        nav_seven: "Contact",
        heading_1: "Explore the colourful World",
        heading_2: "A WONDERFUL GIFT",

        heading_3: "Upcoming Events",
        heading_4: "EXPLORE THE WORLD",
        heading_5: "UPCOMING TOURS & DESTINATION",
        heading_6: "About Us",
        heading_7: "Contributors",
        heading_8: "Contact Us",
        subhead_1: "Everest camp trek",
        subhead_2: "Walking holidays",
        subhead_3: "Andaman Beaches",
        para_1: "Everest base camp trek is without a doubt, one of the most renowned travel destinations in the world.",
        para_2: "Join small guided group walks, enjoy a challenging trek, or a luxury private guided walk which can be made especially for you.",
        para_3: "Diving in Andaman Beaches is exceptional. The costal belt surroundings is one of the richest coral reef ecosystems in the world.",

        para_4: "“Travel makes one modest. You see what a tiny place you occupy in the world.”– Gustav FlaubertExploring will make you want to pack your bag, book that ticket and jet away.",

        para_5: "Wed 28 sept 2023 : Port of Spain City Tour and Birdseye Fort View.Sat 1 oct 2023 : Tour the Gasparee Caves.Tues 4 oct 2023: Trinidad North Coast Experience and many more ......",
        footer: "Created By Pritam Sarbajna | © 2022 All rights reserved.",
        msg_1: "Prefer some other way ?<br />Reach us by using the details given below",
        ms_2: "Send us a message",
        submit: "Submit",
        learn: "Learn more",

    },

    es: {
        "header": "AVENTURA",
        "nav_one": "Inicio",
        "nav_two": "Eventos",
        "nav_three": "Explorar",
        "nav_four": "Tours",
        "nav_five": "Acerca de",
        "nav_six": "Contribuciones",
        "nav_seven": "Contáctanos",
        "heading_1": "Explora el Mundo Colorido",
        "heading_2": "Un Regalo Maravilloso",
        "button_1": "Aprender Más",
        "heading_3": "Próximos Eventos",
        "button_2": "Ver Todos los Detalles",
        "subhead_1": "Trek al Campamento Base del Everest",
        "subhead_2": "Vacaciones de Senderismo",
        "subhead_3": "Playas de Andamán",
        "para_1": "El trek al Campamento Base del Everest es, sin duda, uno de los destinos de viaje más renombrados del mundo.",
        "para_2": "Únete a caminatas guiadas en grupos pequeños, enfrenta un trekking desafiante o elige una experiencia privada de lujo diseñada especialmente para ti.",
        "para_3": "El buceo en las Playas de Andamán es excepcional, rodeado de uno de los ecosistemas de arrecifes de coral más ricos del mundo.",
        "heading_4": "Explora el Mundo",
        "para_4": "“Viajar te hace modesto. Ves qué pequeño lugar ocupas en el mundo.” – Gustav Flaubert. Explorar te inspirará a empacar tus maletas, reservar ese billete y volar lejos.",
        "heading_5": "Próximos Tours y Destinos",
        "para_5": "Mié, 28 de septiembre de 2023: Tour por la Ciudad de Puerto España y Vista del Fuerte Birdseye. Sáb, 1 de octubre de 2023: Tour por las Cuevas de Gasparee. Mar, 4 de octubre de 2023: Experiencia en la Costa Norte de Trinidad y más...",
        "heading_6": "Sobre Nosotros",
        "heading_7": "Contribuidores",
        "heading_8": "Contáctanos",
        "footer": "Creado por Pritam Sarbajna | © 2022 Todos los derechos reservados.",
        msg_1: "¿Prefieres otra forma?<br />Comuníquese con nosotros utilizando los detalles que se proporcionan a continuación.",
        msg_2: "Envíanos un mensaje",
        submit: "Enviar",
        learn: "Aprender más",

    },

    fr: {
        "header": "AVENTURE",
        "nav_one": "Accueil",
        "nav_two": "Événements",
        "nav_three": "Explorer",
        "nav_four": "Tours",
        "nav_five": "À Propos",
        "nav_six": "Contributions",
        "nav_seven": "Contactez-nous",
        "heading_1": "Explorez le Monde Coloré",
        "heading_2": "Un Cadeau Merveilleux",
        "button_1": "En Savoir Plus",
        "heading_3": "Événements à Venir",
        "button_2": "Voir Tous les Détails",
        "subhead_1": "Trek au Camp de Base de l'Everest",
        "subhead_2": "Vacances de Randonnée",
        "subhead_3": "Plages d'Andaman",
        "para_1": "Le trek au Camp de Base de l'Everest est sans aucun doute l'une des destinations de voyage les plus renommées au monde.",
        "para_2": "Rejoignez des randonnées guidées en petits groupes, relevez un défi avec un trek, ou optez pour une expérience privée de luxe conçue spécialement pour vous.",
        "para_3": "La plongée dans les Plages d'Andaman est exceptionnelle, entourée de l'un des écosystèmes de récifs coralliens les plus riches au monde.",
        "heading_4": "Explorez le Monde",
        "para_4": "« Voyager rend modeste. Vous voyez quel petit endroit vous occupez dans le monde. » – Gustav Flaubert. Explorer vous donnera envie de préparer vos bagages, de réserver ce billet et de vous envoler.",
        "heading_5": "Prochains Tours et Destinations",
        "para_5": "Mer, 28 septembre 2023 : Visite de la ville de Port d'Espagne et vue sur le Fort Birdseye. Sam, 1er octobre 2023 : Visite des Grottes de Gasparee. Mar, 4 octobre 2023 : Expérience sur la Côte Nord de Trinidad et bien d'autres...",
        "heading_6": "À Propos de Nous",
        "heading_7": "Contributeurs",
        "heading_8": "Contactez-nous",
        "footer": "Créé par Pritam Sarbajna | © 2022 Tous droits réservés.",
        msg_1: "Vous préférez un autre moyen ?<br />Contactez-nous en utilisant les coordonnées ci-dessous",
        msg_2: "Envoyez-nous un message",
        submit: "Soumettre",
        learn: "En savoir plus",

    },
    ar: {
        "header": "مغامرة",
        "nav_one": "الرئيسية",
        "nav_two": "الفعاليات",
        "nav_three": "استكشاف",
        "nav_four": "الجولات",
        "nav_five": "عنّا",
        "nav_six": "المساهمات",
        "nav_seven": "تواصل معنا",
        "heading_1": "استكشاف العالم الملون",
        "heading_2": "هدية رائعة",
        "button_1": "اعرف المزيد",
        "heading_3": "الفعاليات القادمة",
        "button_2": "رؤية جميع التفاصيل",
        "subhead_1": "تخيم في قاعدة إيفرست",
        "subhead_2": "عطلات المشي",
        "subhead_3": "شواطئ أندامان",
        "para_1": "تخيم قاعدة إيفرست هو بلا شك أحد أشهر وجهات السفر في العالم.",
        "para_2": "انضم إلى جولات مشي صغيرة تحت إشراف مرشدين، أو تحدى نفسك مع رحلة مشي صعبة، أو اختر تجربة خاصة فاخرة مصممة خصيصًا لك.",
        "para_3": "الغوص في شواطئ أندامان استثنائي، حيث تحيط به واحدة من أغنى نظم الشعاب المرجانية في العالم.",
        "heading_4": "استكشاف العالم",
        "para_4": "« السفر يجعلك متواضعًا. ترى أي مكان صغير تحتله في هذا العالم. » – غوستاف فلوبير. ستحفزك تجربة الاستكشاف على حزم حقائبك، وحجز تلك التذكرة، والانطلاق بعيدًا.",
        "heading_5": "الجولات والوجهات القادمة",
        "para_5": "الأربعاء، 28 سبتمبر 2023: جولة في مدينة بورت أوف سباين وإطلالة على حصن بيردساي. السبت، 1 أكتوبر 2023: جولة في كهوف غاسباري. الثلاثاء، 4 أكتوبر 2023: تجربة الساحل الشمالي لترينيداد والمزيد...",
        "heading_6": "عنا",
        "heading_7": "المساهمون",
        "heading_8": "تواصل معنا",
        "footer": "تم الإنشاء بواسطة بريتام سارباجنا | © 2022 جميع الحقوق محفوظة.",
        msg_1: "هل تفضل طريقة أخرى؟<br />تواصل معنا باستخدام التفاصيل الواردة أدناه",
        msg_2: "أرسل لنا رسالة",
        submit: "إرسال",
        learn: "تعلم المزيد",


    },
    gm: {
        "header": "ABENTEUER",
        "nav_one": "Startseite",
        "nav_two": "Veranstaltungen",
        "nav_three": "Entdecken",
        "nav_four": "Touren",
        "nav_five": "Über uns",
        "nav_six": "Beiträge",
        "nav_seven": "Kontakt",
        "heading_1": "Entdecke die bunte Welt",
        "heading_2": "Ein wunderbares Geschenk",
        "button_1": "Mehr erfahren",
        "heading_3": "Bevorstehende Veranstaltungen",
        "button_2": "Alle Details ansehen",
        "subhead_1": "Trekking zum Basislager Everest",
        "subhead_2": "Wanderurlaub",
        "subhead_3": "Andamanen-Strände",
        "para_1": "Das Trekking zum Basislager Everest ist ohne Zweifel eines der bekanntesten Reiseziele der Welt.",
        "para_2": "Nehmen Sie an geführten kleinen Gruppenwanderungen teil, stellen Sie sich einer herausfordernden Trekkingtour oder wählen Sie eine speziell für Sie gestaltete Luxusführung.",
        "para_3": "Das Tauchen an den Stränden der Andamanen ist außergewöhnlich und umgeben von einem der reichsten Korallenriff-Ökosysteme der Welt.",
        "heading_4": "Entdecke die Welt",
        "para_4": "„Reisen macht bescheiden. Man sieht, welchen winzigen Platz man in der Welt einnimmt.“ – Gustav Flaubert. Das Entdecken wird Sie dazu inspirieren, Ihre Taschen zu packen, das Ticket zu buchen und wegzufliegen.",
        "heading_5": "Bevorstehende Touren & Ziele",
        "para_5": "Mi, 28. September 2023: Stadtrundfahrt Port of Spain und Blick auf die Festung Birdseye. Sa, 1. Oktober 2023: Tour durch die Gasparee-Höhlen. Di, 4. Oktober 2023: Erfahrung an der Nordküste von Trinidad und vieles mehr...",
        "heading_6": "Über uns",
        "heading_7": "Beitragende",
        "heading_8": "Kontaktieren Sie uns",
        "footer": "Erstellt von Pritam Sarbajna | © 2022 Alle Rechte vorbehalten.",
        msg_1: "Bevorzugen Sie einen anderen Weg?<br />Erreichen Sie uns über die unten angegebenen Kontaktdaten",
        msg_2: "Senden Sie uns eine Nachricht",
        submit: "Einreichen",
        learn: "Mehr erfahren",


    }

}

const languageSelector = document.querySelector("select")
let h1 = document.getElementById("home_logo")
let nav1 = document.getElementById("pri")
let nav2 = document.getElementById("sec")
let nav3 = document.getElementById("tri")
let nav4 = document.getElementById("quad")
let nav5 = document.getElementById("quint")
let nav6 = document.getElementById("hex")
let nav7 = document.getElementById("hept")
let head1 = document.getElementById("quote")
let head2 = document.getElementById("head2")
let head3 = document.getElementById("head3")
let head4 = document.getElementById("head4")
let head5 = document.getElementById("head5")
let head6 = document.getElementById("head6")
let head7 = document.getElementById("head7")
let head8 = document.getElementById("head8")
let sub1 = document.getElementById("sub1")
let sub2 = document.getElementById("sub2")
let sub3 = document.getElementById("sub3")
let para1 = document.getElementById("para1")
let para2 = document.getElementById("para2")
let para3 = document.getElementById("para3")
let para4 = document.getElementById("para4")
let para5 = document.getElementById("para5")
let info = document.getElementById("info")
let foot = document.getElementById("footer")
let msg1 = document.getElementById("msg-1")
let msg2 = document.getElementById("contact-msg")
let submit = document.getElementById("submit-btn")
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})
const setLanguage = (language) => {
    if (language == "fr") {
        h1.innerHTML = translation.fr.header;
        nav1.innerHTML = translation.fr.nav_one;
        nav2.innerHTML = translation.fr.nav_two;
        nav3.innerHTML = translation.fr.nav_three;
        nav4.innerHTML = translation.fr.nav_four;
        nav5.innerHTML = translation.fr.nav_five;
        nav6.innerHTML = translation.fr.nav_six;
        nav7.innerHTML = translation.fr.nav_seven;
        head1.innerHTML = translation.fr.heading_1;
        head2.innerHTML = translation.fr.heading_2;
        head3.innerHTML = translation.fr.heading_3;
        head4.innerHTML = translation.fr.heading_4;
        head5.innerHTML = translation.fr.heading_5;
        head6.innerHTML = translation.fr.heading_6;
        head7.innerHTML = translation.fr.heading_7;
        head8.innerHTML = translation.fr.heading_8;
        sub1.innerHTML = translation.fr.subhead_1;
        sub2.innerHTML = translation.fr.subhead_2;
        sub3.innerHTML = translation.fr.subhead_3;
        para1.innerHTML = translation.fr.para_1;
        para2.innerHTML = translation.fr.para_2;
        para3.innerHTML = translation.fr.para_3;
        para4.innerHTML = translation.fr.para_4;
        para5.innerHTML = translation.fr.para_5;
        foot.innerHTML = translation.fr.footer;
        msg1.innerHTML = translation.fr.msg_1;
        msg2.innerHTML = translation.fr.msg_2;
        submit.value = translation.fr.submit


    }
    else if (language == "en") {
        h1.innerHTML = translation.en.header;
        nav1.innerHTML = translation.en.nav_one;
        nav2.innerHTML = translation.en.nav_two;
        nav3.innerHTML = translation.en.nav_three;
        nav4.innerHTML = translation.en.nav_four;
        nav5.innerHTML = translation.en.nav_five;
        nav6.innerHTML = translation.en.nav_six;
        nav7.innerHTML = translation.en.nav_seven;
        head1.innerHTML = translation.en.heading_1;
        head2.innerHTML = translation.en.heading_2;
        head3.innerHTML = translation.en.heading_3;
        head4.innerHTML = translation.en.heading_4;
        head5.innerHTML = translation.en.heading_5;
        head6.innerHTML = translation.en.heading_6;
        head7.innerHTML = translation.en.heading_7;
        head8.innerHTML = translation.en.heading_8;
        sub1.innerHTML = translation.en.subhead_1;
        sub2.innerHTML = translation.en.subhead_2;
        sub3.innerHTML = translation.en.subhead_3;
        para1.innerHTML = translation.en.para_1;
        para2.innerHTML = translation.en.para_2;
        para3.innerHTML = translation.en.para_3;
        para4.innerHTML = translation.en.para_4;
        para5.innerHTML = translation.en.para_5;
        foot.innerHTML = translation.en.footer;
        msg1.innerHTML = translation.en.msg_1;
        msg2.innerHTML = translation.en.msg_2;
        submit.value = translation.en.submit

    }
    else if (language == "es") {
        h1.innerHTML = translation.es.header;
        nav1.innerHTML = translation.es.nav_one;
        nav2.innerHTML = translation.es.nav_two;
        nav3.innerHTML = translation.es.nav_three;
        nav4.innerHTML = translation.es.nav_four;
        nav5.innerHTML = translation.es.nav_five;
        nav6.innerHTML = translation.es.nav_six;
        nav7.innerHTML = translation.es.nav_seven;
        head1.innerHTML = translation.es.heading_1;
        head2.innerHTML = translation.es.heading_2;
        head3.innerHTML = translation.es.heading_3;
        head4.innerHTML = translation.es.heading_4;
        head5.innerHTML = translation.es.heading_5;
        head6.innerHTML = translation.es.heading_6;
        head7.innerHTML = translation.es.heading_7;
        head8.innerHTML = translation.es.heading_8;
        sub1.innerHTML = translation.es.subhead_1;
        sub2.innerHTML = translation.es.subhead_2;
        sub3.innerHTML = translation.es.subhead_3;
        para1.innerHTML = translation.es.para_1;
        para2.innerHTML = translation.es.para_2;
        para3.innerHTML = translation.es.para_3;
        para4.innerHTML = translation.es.para_4;
        para5.innerHTML = translation.es.para_5;
        foot.innerHTML = translation.es.footer;
        msg1.innerHTML = translation.es.msg_1;
        msg2.innerHTML = translation.es.msg_2;
        submit.value = translation.es.submit

    }
    else if (language == "ar") {
        h1.innerHTML = translation.ar.header;
        nav1.innerHTML = translation.ar.nav_one;
        nav2.innerHTML = translation.ar.nav_two;
        nav3.innerHTML = translation.ar.nav_three;
        nav4.innerHTML = translation.ar.nav_four;
        nav5.innerHTML = translation.ar.nav_five;
        nav6.innerHTML = translation.ar.nav_six;
        nav7.innerHTML = translation.ar.nav_seven;
        head1.innerHTML = translation.ar.heading_1;
        head2.innerHTML = translation.ar.heading_2;
        head3.innerHTML = translation.ar.heading_3;
        head4.innerHTML = translation.ar.heading_4;
        head5.innerHTML = translation.ar.heading_5;
        head6.innerHTML = translation.ar.heading_6;
        head7.innerHTML = translation.ar.heading_7;
        head8.innerHTML = translation.ar.heading_8;
        sub1.innerHTML = translation.ar.subhead_1;
        sub2.innerHTML = translation.ar.subhead_2;
        sub3.innerHTML = translation.ar.subhead_3;
        para1.innerHTML = translation.ar.para_1;
        para2.innerHTML = translation.ar.para_2;
        para3.innerHTML = translation.ar.para_3;
        para4.innerHTML = translation.ar.para_4;
        para5.innerHTML = translation.ar.para_5;
        foot.innerHTML = translation.ar.footer;
        msg1.innerHTML = translation.ar.msg_1;
        msg2.innerHTML = translation.ar.msg_2;
        submit.value = translation.ar.submit

    }
    else if (language == "gm") {
        h1.innerHTML = translation.gm.header;
        nav1.innerHTML = translation.gm.nav_one;
        nav2.innerHTML = translation.gm.nav_two;
        nav3.innerHTML = translation.gm.nav_three;
        nav4.innerHTML = translation.gm.nav_four;
        nav5.innerHTML = translation.gm.nav_five;
        nav6.innerHTML = translation.gm.nav_six;
        nav7.innerHTML = translation.gm.nav_seven;
        head1.innerHTML = translation.gm.heading_1;
        head2.innerHTML = translation.gm.heading_2;
        head3.innerHTML = translation.gm.heading_3;
        head4.innerHTML = translation.gm.heading_4;
        head5.innerHTML = translation.gm.heading_5;
        head6.innerHTML = translation.gm.heading_6;
        head7.innerHTML = translation.gm.heading_7;
        head8.innerHTML = translation.gm.heading_8;
        sub1.innerHTML = translation.gm.subhead_1;
        sub2.innerHTML = translation.gm.subhead_2;
        sub3.innerHTML = translation.gm.subhead_3;
        para1.innerHTML = translation.gm.para_1;
        para2.innerHTML = translation.gm.para_2;
        para3.innerHTML = translation.gm.para_3;
        para4.innerHTML = translation.gm.para_4;
        para5.innerHTML = translation.gm.para_5;
        foot.innerHTML = translation.gm.footer;
        msg1.innerHTML = translation.gm.msg_1;
        msg2.innerHTML = translation.gm.msg_2;
        submit.value = translation.gm.submit

    }
}
window.addEventListener("scroll", updateNav);
