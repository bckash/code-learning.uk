
// const

const selectMenu1 = document.getElementById("select1");
const secAll = document.getElementsByClassName("c-main");
const bottNav = document.getElementById("bottom-nav")

// EL

selectMenu1.addEventListener("change", goToItem);
window.addEventListener("scroll", showNav);

// F->

// select menu anchors
function goToItem () {

    if (selectMenu1.value !== "0") {
        location.href = select1.value;
    } 
}

// for each "-c-main" section, create a new <option> element inside <select>
function getID () {

    const arr = Array.from(secAll);
    
    for (let i=1; i<arr.length; i++){
        const op = document.createElement("option");
        op.setAttribute("value", `#${arr[i].id}` )
        const opTxt = document.createTextNode(arr[i].firstElementChild.innerHTML);
        op.appendChild(opTxt);
        selectMenu1.appendChild(op);
    }
}

getID()


// show & hide bottom nav
function showNav(){
    
    let pos = window.scrollY;

    function addRemove (add, remove) {
        bottNav.classList.add(add);
        bottNav.classList.remove(remove);
    }

    if (pos > 600) {
        addRemove("opa-1", "opa-0")
    } else {
        addRemove("opa-0", "opa-1")
    }
}
