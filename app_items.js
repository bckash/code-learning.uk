

// CONST
// main buttons

const butO = document.getElementById("or");
const butFG = document.getElementById("fg");
const butAS = document.getElementById("as")
const divO = document.getElementById("order");
const divAFG = document.getElementById("grow");
const divAS = document.getElementById("shrink");


// sub-buttons "order"

const butO1 = document.getElementById("o1");
const butO2 = document.getElementById("o2");
const butO3 = document.getElementById("o3");
const butInfo1 = document.getElementById("signature")

const order1 = "order1";
const order2 = "order2";
const order3 = "order3";
const order4 = "order4";
const order5 = "order5";

const orders = [order1, order2, order3, order4, order5]

const sq1 = document.getElementById("sq1");
const sq2 = document.getElementById("sq2");
const sq3 = document.getElementById("sq3");
const sq4 = document.getElementById("sq4");
const sq5 = document.getElementById("sq5");

const squares = [sq1, sq2, sq3, sq4, sq5];

// sub-buttons "grow"

const slider = document.getElementById("slider")
const FGElement = document.getElementById("fg2");
const hInfo2 = document.getElementById("signature2")
const hInfo3 = document.getElementById("signature3")

// sub-buttons "shrink"

const slider2 = document.getElementById("slider2")
const FSElement = document.getElementById("fs");
const hInfo4 = document.getElementById("signature4")
const hInfo5 = document.getElementById("signature5")

// EVENT LISTENERS
// main buttons

butO.addEventListener("click", function(){
    mainBut(butO, butFG, butAS, divO, divAFG, divAS)
});

butFG.addEventListener("click", function(){
    mainBut(butFG, butO, butAS, divAFG, divO, divAS)
});

butAS.addEventListener("click", function(){
    mainBut(butAS, butO, butFG, divAS, divO, divAFG)
});


//sub-buttons
//"order" 

butO1.addEventListener("mouseover", function(){
    changeOrder(1, 3, 5, 2, 4);
});

butO2.addEventListener("mouseover", function(){
    changeOrder(5, 4, 3, 2, 1);
});

butO3.addEventListener("mouseover", function(){
    changeOrder(1, 5, 2, 4, 3);
});

//"flex-grow

slider.addEventListener("input", function(){
    flexGrow();
});

//"flex-shrink

slider2.addEventListener("input", function(){
    flexShrink();
});


// FUNCTIONS
// Main Buttons.
// ba = button active | bh1,bh2 = button hover | da = div active |dh1,dh2 = divs hover;


function mainBut(ba, bh1, bh2, da, dh1, dh2) {

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

// Order
// sq1-5 = tells you which square is on which place; 

function changeOrder(snr1, snr2, snr3, snr4, snr5){
    
    let i;
    for (i=0; i < squares.length; i++){
        squares[i].classList.remove(order1, order2, order3, order4, order5);
    }

    // squares[0].classList.remove(order1, order2, order3, order4, order5);
    // squares[1].classList.remove(order1, order2, order3, order4, order5);
    // squares[2].classList.remove(order1, order2, order3, order4, order5);
    // squares[3].classList.remove(order1, order2, order3, order4, order5);
    // squares[4].classList.remove(order1, order2, order3, order4, order5);

    console.log(snr1, snr2, snr3, snr4, snr5);

    let p1 = snr1 - 1;
    console.log("p1= " + p1 + " | " + squares[p1].id);
    let p2 = snr2 - 1;
    console.log("p2= " + p2 + " | " + squares[p2].id);
    let p3 = snr3 - 1;
    console.log("p3= " + p3 + " | " + squares[p3].id);
    let p4 = snr4 - 1;
    console.log("p4= " + p4 + " | " + squares[p4].id);
    let p5 = snr5 - 1;
    console.log("p5= " + p5 + " | " + squares[p5].id);

    pAll = [p1, p2, p3, p4, p5];

    for (i=0; i < pAll.length; i++){
        squares[pAll[i]].classList.add(orders[i]);
    }

    // squares[p1].classList.add(order1);
    // squares[p2].classList.add(order2);
    // squares[p3].classList.add(order3);
    // squares[p4].classList.add(order4);
    // squares[p5].classList.add(order5);

    butInfo1.innerHTML = "Observe elements changing places"

}

// Flex Grow

function flexGrow() {
    console.log("from " + FGElement.style.flexGrow);
    let i = slider.valueAsNumber;
    console.log("to " + i);
    FGElement.style.flexGrow = i;

    hInfo3.innerHTML = `flex-grow: ${i}`;
    hInfo2.innerHTML = `Observe element (b).`;
}


function flexShrink() {
    console.log("from " + FSElement.style.flexShrink);
    let i = slider2.valueAsNumber;
    console.log("to " + i);
    FSElement.style.flexShrink = i;
    console.log("shink = " + FSElement.style.flexShrink)

    hInfo4.innerHTML = `flex-shrink: ${i}`;
    hInfo5.innerHTML = `Width of <b>(a + b + c)</b> is overlaping the container. <b>Flex-shrink</b> organizes this surplus space, and "cuts" it out of elements in proportion.`;
}