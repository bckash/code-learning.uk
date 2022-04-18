

//
// "BLACK CHEVRON" after-click 
//
//___________________________


//
// [CONST]
//..............


// "black chevron"
const butNav = document.getElementById("chevron")

// dynamic fields
const fillLi = document.getElementById("fill-li");
const fillTxt = document.getElementById("tbc");
const fillQuote = document.getElementById("fill-quote");
const fillAuthor = document.getElementById("fill-author");
const fillIcon = document.getElementById("nav-big-icon");

// txt content
const contentAll = document.getElementsByClassName("content-toggle")

// "content" (in dynamic fields) that changes, after clicking "black chevron" button. NOTE: "content" has been broken to pieces for styling.
const indexNavi = [
    {
        id:"page",
        txt: "this. page",
        quote: "The roots of education are bitter, but the fruit is sweet",
        author: "Aristotle",
        span: `<img class="animation-icon" src="img/fa_info.svg" alt="info icon">`,
        nr: 0
    },
    {
        id:"about",
        txt: "about me",
        quote: "A real warrior never quits",
        author: "Po / Kung Fu Panda",
        nr: 1
    },
    {
        id:"skill",
        txt: "IT Skills",
        author: "Confucius",
        quote: "If a craftsman wants to do good work, he must first sharpen his tools",
        span: `<span class="material-icons animation-icon">code</span>`,
        nr: 2
    },
    {
        id:"design",
        txt: "design",
        author: "Albert Einstein",
        quote: "Creativity is inteligence having fun",
        span: `<span class="material-icons animation-icon">architecture</span>`,
        nr: 3
    },
    {
        id:"next",
        txt: "next",
        content: "exmaple context 6",
        author: "",
        quote: "best iz yet 2 come",
        span: `<span class="material-icons animation-icon"></span>`,
        nr: 4
    },
]

//pause button
const pauseBut = document.getElementById("pause-but");
const stopButAll = document.getElementsByClassName("stop-ani")
const stopButAllArray = Array.from(stopButAll);

//
// [START VALUES] 
//.................


// for "next" (F)
let gNextindex = 0;

// start values for elements that are filled
fillLi.innerText = indexNavi[0].txt
contentAll[0].style.display="block"
fillQuote.innerText = indexNavi[0].quote
fillAuthor.innerText = indexNavi[0].author



//
//   [EL]
//.............

butNav.addEventListener("click", goNext)
pauseBut.addEventListener("click", pauseAnimation)

//
//   () =>
//..............

console.log(fillIcon.firstElementChild)

// CHEVRON BUTTON: add index
function goNext (e) {
    e.preventDefault()
    gNextindex += 1;
    next(e);
    e.preventDefault()
}

// CHEVRON BUTTON: change menu items
function next(ev) {

    fillLi.classList.remove("animation-chevron")
    void fillLi.offsetWidth;
    fillLi.classList.add("animation-chevron")

    //reset the index when  
    if (gNextindex === indexNavi.length) {
        gNextindex = 0;
    }

    if (gNextindex === 0) {
            fillLi.innerText = indexNavi[0].txt
            contentAll[indexNavi.length -1].style.display = "none";
            contentAll[0].style.display = "block"; 
            fillQuote.innerText = indexNavi[0].quote
            fillAuthor.innerText = indexNavi[0].author
    } else {
        for (let i=0; i<indexNavi.length; i++) {
            if (indexNavi[i].nr === gNextindex) {
                fillLi.innerText = indexNavi[i].txt
                contentAll[i-1].style.display = "none";
                contentAll[i].style.display = "block"; 
                fillQuote.innerText = indexNavi[i].quote
                fillAuthor.innerText = indexNavi[i].author
            }
        }
    }

    if (gNextindex === 0 && fillIcon.firstElementChild !== "img" ) {
        fillIcon.removeChild(fillIcon.firstElementChild)
        fillIcon.innerHTML = indexNavi[0].span
    } else if (gNextindex === 2) {
        fillIcon.removeChild(fillIcon.firstElementChild)
        fillIcon.innerHTML = indexNavi[2].span
    } else if (gNextindex === 3) {
        fillIcon.removeChild(fillIcon.firstElementChild)
        fillIcon.innerHTML = indexNavi[3].span
    } else if (gNextindex === 4) {
        fillIcon.removeChild(fillIcon.firstElementChild)
        fillIcon.innerHTML = indexNavi[4].span
    }

    


}

let click = 0;

console.log(stopButAllArray)

// PAUSE ANIMATION
function pauseAnimation () {
    click += 1
    if (click === 1) {
        stopButAllArray.forEach(item => {
            item.style.animationPlayState = "paused";
        })

        pauseBut.innerText = "play_circle";
       
    } else {
        stopButAllArray.forEach(item => {
            item.style.animationPlayState = "running";
        })
        pauseBut.innerText = "pause_circle";
        click = 0;
    }
}







