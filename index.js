
// CONST
//...........

// nav up
const butNav = document.getElementById("chevron")
const ulNavUp = document.getElementById("fm-nav");
const ulNavUpChildren = document.getElementsByClassName("um");

const fillLi = document.getElementById("fill-li");
const fillTxt = document.getElementById("chev-txt");


const indexNavi = [
    {
        id:"page",
        txt: "this . page",
        content: `'Learning Curve' is my personal web development base, documenting on my efforstts in the field. In black background navigation menu, you will find some of front-end fundamentals i learned about and latest websites and apps i built. To get more info about me, pick a topic with a black chevron on the right side.`,
        quote: "",
        author: "",
        nr: 0
    },
    {
        id:"about",
        txt: "about me",
        content: "Aspiring frontend developer. First line of code I wrote dates back to myspace times, when tables and floats were used for layout. Since then, I grasped the fundamental concepts of HTML and CSS. In 2020 I started building and deploying my first websites. Frontend development became my main interest and focus, on which I spend most of my time currently.",
        quote: "A real warrior never quits",
        author: "Po / Kung Fu Panda",
        nr: 1
    },
    {
        id:"skill",
        txt: "skills",
        content: "exmaple context 3",
        author: "master Yoda",
        quote: "Do or do not. There is no try.",
        nr: 2
    },
    {
        id:"soft",
        txt: "software",
        content: "exmaple context 4",
        author: "Confucius",
        quote: "If a craftsman wants to do good work, he must first sharpen his tools.",
        nr: 3
    },
    {
        id:"des",
        txt: "design",
        content: "exmaple context 5",
        author: "Albert Einstein",
        quote: "Creativity is inteligence having fun",
        nr: 4
    },
    {
        id:"next",
        txt: "next",
        content: "exmaple context 6",
        author: "",
        quote: "best iz yet 2 come",
        nr: 5
    },
]


// for "next" (F)
let gNextindex = 0;
fillLi.innerText = `${indexNavi[0].txt}`
fillTxt.innerText = `${indexNavi[0].content}`



let currentNE = ulNavUp.firstElementChild;
let currentNEall = Array.from(ulNavUpChildren);


// EL
//...........

butNav.addEventListener("click", goNext)



// () =>
//...........

// CHEVRON BUTTON: add index
function goNext (e) {
    e.preventDefault()
    gNextindex += 1;
    next(e);
    e.preventDefault()
}

// CHEVRON BUTTON: change pictures
function next(ev) {

    // (F) on/off for main menu titles
//     function onOff (idName, contName){
        
//         if (currentNE.id === idName) {
//             contName.style.display = "block"
//         } else {
//             contName.style.display = "none" 
//     }
// }

    if (gNextindex === indexNavi.length) {
        gNextindex = 0;
    }

    for (let i=0; i<indexNavi.length; i++) {
        if (indexNavi[i].nr === gNextindex) {
            fillLi.innerText = `${indexNavi[i].txt}`
            fillTxt.innerText = `${indexNavi[i].content}`
        }
    }





    // onOff("next", dodWearCont)
    // onOff("page", analogiaCont)
    // onOff("about", pdecCont)
    // onOff("skill", brgCont)
    // onOff("soft", bcCont)
    // onOff("des", wfdCont)

    // (F) curent "Li" visible, rest NOT
    // function displayChange (a){

    //     for (let y = 0; y < currentNEall.length; y++) {
    //         if (currentNEall[y].id === a.id) {
    //             a.style.display = "block";
    //         } else {
    //             currentNEall[y].style.display = "none";         
    //         }
    //     }
    // }

    // if (gNextindex === currentNEall.length) {

    //     gNextindex = 0;
    //     after = currentNEall[0];
    //     displayChange(after); 
    //     currentNE = after;
    //     return currentNE;
    // } 
    
    // else {

    //     let after = currentNE.nextElementSibling
    //     displayChange(after);
    //     currentNE = after;
    //     return currentNE;
    // }

}