

// CONST
// main buttons

const butJC = document.getElementById("jc");
const butAI = document.getElementById("ai");
const butAC = document.getElementById("ac")
const divJust = document.getElementById("justify");
const divAlig = document.getElementById("align");
const divAC = document.getElementById("align-c");


// sub-buttons "justify"

const butCentre = document.getElementById("center");
const butSpEv = document.getElementById("space-evn");
const butSpBe = document.getElementById("space-bet");
const flexC = document.getElementById("container");
const butInfo = document.getElementById("signature")

const cent = "center";
const spEv = "space-evenly";
const spBe = "space-between";

// sub-buttons "align - items"

const butACenter = document.getElementById("acenter");
const butAStrech = document.getElementById("astrech");
const butAEnd = document.getElementById("aend");
const flexC2 = document.getElementById("container2");
const butInfo2 = document.getElementById("signature2")

const aCent = "center2";
const aEnd = "flex-end";
const aStr = "flex-start";

// sub-buttons "align - content"

const butACCenter = document.getElementById("accenter");
const butACSB = document.getElementById("sbetween");
const butACSA = document.getElementById("saround");
const flexC3 = document.getElementById("container3");
const butInfo3 = document.getElementById("signature3")

const acCent = "center";
const acSB = "space-between";
const acSA = "space-around";


// EVENT LISTENERS
// main buttons

butJC.addEventListener("click", function(){
    mainBut2(butJC, butAI, butAC, divJust, divAlig, divAC)
});

butAI.addEventListener("click", function(){
    mainBut2(butAI, butJC, butAC, divAlig, divJust, divAC)
});

butAC.addEventListener("click", function(){
    mainBut2(butAC, butJC, butAI, divAC, divJust, divAlig)
});


//sub-buttons
//"justify" 

butCentre.addEventListener("mouseover", function(){
    changeJustify(cent);
});

butSpEv.addEventListener("mouseover", function(){
    changeJustify(spEv);
});

butSpBe.addEventListener("mouseover", function(){
    changeJustify(spBe);
});


// sub-buttons
// "align - items" 

butACenter.addEventListener("mouseover", function(){
    changeAlign(aCent);
});

butAEnd.addEventListener("mouseover", function(){
    changeAlign(aEnd);
});

butAStrech.addEventListener("mouseover", function(){
    changeAlign(aStr);
});

// sub-buttons
// "align - content"

butACCenter.addEventListener("mouseover", function(){
    changeAlign2(acCent);
});

butACSB.addEventListener("mouseover", function(){
    changeAlign2(acSB);
});

butACSA.addEventListener("mouseover", function(){
    changeAlign2(acSA);
});


// FUNCTIONS
// Main Buttons.
// ba = button active | bh1,bh2 = button hover | da = div active |dh1,dh2 = divs hover;

function mainBut (ba, bh1, bh2, da, dh1, dh2){

    ba.classList.add("act2");
    ba.classList.remove("hov");

    bh1.classList.add("hov");
    bh1.classList.remove("act2");
    bh2.classList.add("hov");
    bh2.classList.remove("act2");

    da.classList.remove("none")
    dh1.classList.add("none")
    dh2.classList.add("none")
}

function mainBut2(ba, bh1, bh2, da, dh1, dh2) {

    ba.classList.add("act2");
    ba.classList.remove("hov");

    const bh = [bh1.classList, bh2.classList];
    const dh = [dh1.classList, dh2.classList];

    bh.forEach(addHov);
    function addHov(x){x.add("hov");

    bh.forEach(remAct2);
    function remAct2(x){x.remove("act2")};

    dh.forEach(addNone);
    function addNone(x){x.add("none")};

    da.classList.remove("none")

    }
}

// Justify 
// a = class to add;

function changeJustify(a) {
    flexC.classList.remove(cent, spEv, spBe);
    flexC.classList.add(a);
    butInfo.innerHTML = "";
    butInfo.innerHTML = a;
}

// Align - Items
// a = class to add;

function changeAlign(a) {
    flexC2.classList.remove(aCent, aEnd, aStr);
    flexC2.classList.add(a);
    butInfo2.innerHTML = "";
    if (a === aCent) {
        butInfo2.innerHTML = `${cent}`;
    } else {butInfo2.innerHTML = a};
}

// Align - Content
// a = class to add;

function changeAlign2(a) {
    flexC3.classList.remove(acCent, acSA, acSB);
    flexC3.classList.add(a);
    butInfo3.innerHTML = "";
    if (a === acCent) {
        butInfo3.innerHTML = `${cent}`;
    } else {butInfo3.innerHTML = a};
}

// Align - Universal
// a = class to add; c = flex container; p1,p2,p3 = positions; i = info div;

function changeAlignU(a, c, p1, p2, p3, i) {
    c.classList.remove(p1, p2, p3);
    c.classList.add(a);
    i.innerHTML = "";
    if (a === p1) {
        i.innerHTML = `${cent}`;
    } else {i.innerHTML = a};
}