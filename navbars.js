

// CONST
//-----------

const ecDesign = document.getElementById("ec-design-demo")
const ecZar = document.getElementById("ec-zar")
const ecSka = document.getElementById("ec-ska")
const ecComp = document.getElementById("ec-comp")

const logoGH1 = document.getElementById("gl-1")
const logoGH2 = document.getElementById("gl-2")
const logoGH3 = document.getElementById("gl-3")
const logoGH4 = document.getElementById("gl-4")
const logoR1 = document.getElementById("lr-1");
const logoR4 = document.getElementById("lr-4");

const srcGHblack = "img/github-black.png";
const srcGHbgrey = "img/github-grey.png";
const srcReactBlue = "img/react-logo-blue.png";
const srcReactGrey = "img/react-logo.png";


// EL
//------------

ecDesign.addEventListener("mouseenter", hoverON)
ecDesign.addEventListener("mouseleave", hoverOFF)
ecZar.addEventListener("mouseenter", hoverON)
ecZar.addEventListener("mouseleave", hoverOFF)
ecSka.addEventListener("mouseenter", hoverON)
ecSka.addEventListener("mouseleave", hoverOFF)
ecComp.addEventListener("mouseenter", hoverON)
ecComp.addEventListener("mouseleave", hoverOFF)

// (f) =>
//------------

function hoverON (e) {

    if (e.target.id === "ec-design-demo") {
        logoGH1.src = srcGHblack
        logoR1.src = srcReactBlue
    } else if (e.target.id === "ec-zar") {
        logoGH2.src = srcGHblack
    } else if (e.target.id === "ec-ska") {
        logoGH3.src = srcGHblack
    } else if (e.target.id === "ec-comp") {
        logoGH4.src = srcGHblack 
        logoR4.src = srcReactBlue        
    }


}

function hoverOFF (e) {

    if (e.target.id === "ec-design-demo") {
        logoGH1.src = srcGHbgrey
        logoR1.src = srcReactGrey
    } else if (e.target.id === "ec-zar") {
        logoGH2.src = srcGHbgrey
    } else if (e.target.id === "ec-ska") {
        logoGH3.src = srcGHbgrey
    } else if (e.target.id === "ec-comp") {
        logoGH4.src = srcGHbgrey 
        logoR4.src = srcReactGrey
    }
}