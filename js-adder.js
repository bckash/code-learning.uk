


// adding one position (section), to main parent WITH altered <code> inside
function adder3 (codeName, codeEl, codeDes, sec){

    //txt
    const txtNode = document.createTextNode(codeName);
    const txtNode3 = document.createTextNode(codeDes);
    
    //divs
    const div1 = document.createElement("div");
    div1.className = "code-name";
    const div2 = document.createElement("div");
    div2.className = "code-code";
    const div3 = document.createElement("div");
    div3.className = "code-descr";

    //sec
    const sec1P = document.createElement("section");
    sec1P.className = "code-one-position";

    //-> divs
    div1.appendChild(txtNode); // txt
    div2.appendChild(codeEl); // <code>
    div3.appendChild(txtNode3); // txt

    //-> section
    sec1P.appendChild(div1);
    sec1P.appendChild(div2);
    sec1P.appendChild(div3);

    // -> article
    const secPNT = document.getElementById(`${sec}`);
    secPNT.appendChild(sec1P);
}

// passing parameters from position object to adder3()
function createSection (arrTitle) {
    for (let i in arrTitle) {
 
        let codeName = arrTitle[i].cName;
        let codeEl = arrTitle[i].codeFun();
        let codeDes = arrTitle[i].cDesc;
        let sec = arrTitle[i].sec;
    
        adder3(codeName, codeEl, codeDes, sec);
    }
}




// MATH........................................

// round 
const mathRound = {
    sec     : "c1",
    cName   : "rounding",
    cDesc   : "",
    txtSpan : "n1,n2",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `Math.round (${sE})`;
        return codeE;
    }
}

// ceil / floor
const mathCeil = {
    sec     : "c1",
    cName   : "round up / down",
    cDesc   : "",
    txtSpan : "n1,n2",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `Math.ceil (${sE}) ; Math.floor (${sE})`;
        return codeE;
    }
}

// sqrt
const mathSqrt = {
    sec     : "c1",
    cName   : "pierwiastek",
    cDesc   : "",
    txtSpan : "n",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `Math.sqrt(${sE})`;
        return codeE;
    }
}

// w bezwzgledna
const mathAbs = {
    sec     : "c1",
    cName   : "wart. bezwzgledna",
    cDesc   : "",
    txtSpan : "-n",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `Math.abs(${sE})`;
        return codeE;
    }
}

// potegowanie
const mathPow = {
    sec     : "c1",
    cName   : "potegowanie",
    cDesc   : "",
    txtSpan : "n1, n2",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `Math.pow(${sE})`;
        return codeE;
    }
}

// min / max
const mathMin = {
    sec     : "c1",
    cName   : "min / max value",
    cDesc   : "",
    txtSpan : "n1, n2, -n3",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `Math.min(${sE}) ; Math.max(${sE})`;
        return codeE;
    }
}


// random
const mathRan = {
    sec     : "c1",
    cName   : "random value (0.0 - 1)",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `Math.random(${sE})`;
        return codeE;
    }
}

// ----> ()
math = [mathRound, mathCeil, mathSqrt, mathAbs, mathPow, mathMin, mathRan];

createSection(math);




// STRING METHODS...............................

// append -> [two txtSpan]
const stringApp = {
    sec     : "c2",
    cName   : "append to value",
    cDesc   : "",
    txtSpan : "name",
    txtSpan2: "value",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE;
        let sE2;
        sE = `<span class="value">${txt}</span>`;
        sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `${sE} += ${sE2}`;
        return codeE;
    }
}

// uppercase / lowercase
const stringUp = {
    sec     : "c2",
    cName   : "uppercase / lowercase",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.toUpperCase() ; .toLowerCase()`;
        return codeE;
    }
}

// letter index start
const stringIndex = {
    sec     : "c2",
    cName   : "letter index, from start",
    cDesc   : "",
    txtSpan : "L",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.indexOf(${sE})`;
        return codeE;
    }
}

// letter index end
const stringIndexEnd = {
    sec     : "c2",
    cName   : "letter index, from end",
    cDesc   : "",
    txtSpan : "letter",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.lastIndexOf (${sE})`;
        return codeE;
    }
}

// character from word array
const stringChar = {
    sec     : "c2",
    cName   : "character from word array",
    cDesc   : "",
    txtSpan : "number",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `name.[${sE}]`;
        return codeE;
    }
}

// character from word array (2)
const stringCharAt = {
    sec     : "c2",
    cName   : "character from word array (2)",
    cDesc   : "",
    txtSpan : "number",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.charAt(${sE})`;
        return codeE;
    }
}

// get last character
const stringGetLast = {
    sec     : "c2",
    cName   : "get last character",
    cDesc   : "",
    txtSpan : "-1",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.chartAt (name.legth ${sE})`;
        return codeE;
    }
}

// substring
const stringSubst = {
    sec     : "c2",
    cName   : "substring (fragment)",
    cDesc   : "from n1 to n2",
    txtSpan : "n1,n2",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.substring (${sE})`;
        return codeE;
    }
}

// slice
const stringSlice = {
    sec     : "c2",
    cName   : "substring (2)",
    cDesc   : "",
    txtSpan : "+-n1,+-n2",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.slice(${sE})`;
        return codeE;
    }
}

// split
const stringSplit = {
    sec     : "c2",
    cName   : "split after, into array",
    cDesc   : "",
    txtSpan : "&quot,&quot",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.split(${sE})`;
        return codeE;
    }
}

// replace
const stringReplace = {
    sec     : "c2",
    cName   : "replace",
    cDesc   : "",
    txtSpan : "string1, string2",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.replace( ${sE})`;
        return codeE;
    }
}

// check if includes
const stringCheck = {
    sec     : "c2",
    cName   : "check if includes",
    cDesc   : "",
    txtSpan : "string",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.includes( ${sE})`;
        return codeE;
    }
}

// ----> ()
string = [stringApp, stringUp, stringIndex, stringIndexEnd, stringChar, stringCharAt, stringGetLast, stringSubst, stringSlice, stringSplit, stringReplace, stringCheck];

createSection(string);



// ARRAY ............................

// check if array
const arrayIs = {
    sec     : "c3",
    cName   : "check if array",
    cDesc   : "",
    txtSpan : "?",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `Array.isArray(${sE})`;
        return codeE;
    }
}

// insert into -> [two txtSpan]
const arrayInsert = {
    sec     : "c3",
    cName   : "insert into array index",
    cDesc   : "",
    txtSpan : "number",
    txtSpan2: "value",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE;
        let sE2;
        sE = `<span class="value">${txt}</span>`;
        sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `name[${sE}] = ${sE2}`;
        return codeE;
    }
}

// index of value
const arrayIndex = {
    sec     : "c3",
    cName   : "index of value",
    cDesc   : "",
    txtSpan : "number",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.indexOf(${sE})`;
        return codeE;
    }
}

// push
const arrayPush = {
    sec     : "c3",
    cName   : "add to end",
    cDesc   : "",
    txtSpan : "value",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.push(${sE})`;
        return codeE;
    }
}

// unshift
const arrayUnshift = {
    sec     : "c3",
    cName   : "add to front",
    cDesc   : "",
    txtSpan : "value",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.unshift(${sE})`;
        return codeE;
    }
}

// pop
const arrayPop = {
    sec     : "c3",
    cName   : "take off from end",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.pop(${sE})`;
        return codeE;
    }
}

// shift
const arrayShift = {
    sec     : "c3",
    cName   : "take off from front",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.shift(${sE})`;
        return codeE;
    }
}

// splice
const arraySplice = {
    sec     : "c3",
    cName   : "splice - fragment from, to",
    cDesc   : "",
    txtSpan : "n1,n2",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.splice(${sE})`;
        return codeE;
    }
}

// reverse
const arrayRev = {
    sec     : "c3",
    cName   : "index reverse",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.revere(${sE})`;
        return codeE;
    }
}

// sort alfabet
const arraySort = {
    sec     : "c3",
    cName   : "sort alfabet",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.sort(${sE})`;
        return codeE;
    }
}

// sort numbers
const arraySortNr = {
    sec     : "c3",
    cName   : "sort numbers",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.sort( function(x,y){
            return x-y })`;
        return codeE;
    }
}

// sort numbers (reverse)
const arraySortNrR = {
    sec     : "c3",
    cName   : "sort numbers (reverse)",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.sort( function(x,y){
            return y-x })`;
        return codeE;
    }
}

// ----> ()
array = [arrayIs, arrayInsert, arrayIndex, arrayPush, arrayUnshift, arrayPop, arrayShift, arraySplice, arrayRev, arraySort, arraySortNr, arraySortNrR ];

createSection(array);




// DATES....................................

// new date
const dateNew = {
    sec     : "c4",
    cName   : "new date",
    cDesc   : "4 formats to set a date",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `new Date()`;
        return codeE;
    }
}

// get month
const dateMonth = {
    sec     : "c4",
    cName   : "get month",
    cDesc   : "-1 (0 based)",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getMonth()`;
        return codeE;
    }
}

// get day
const dateDay = {
    sec     : "c4",
    cName   : "get week day, numerical",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getDay()`;
        return codeE;
    }
}

// get full year + ...
const dateYear = {
    sec     : "c4",
    cName   : "get year / hours / min / sec / mili sec",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getFullYear() ; .getHours() ; .getMinutes() ; .getSeconds() ; .getMilliseconds()`;
        return codeE;
    }
}

// time stamp
const dateTime = {
    sec     : "c4",
    cName   : "time stamp from 1970",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getTime()`;
        return codeE;
    }
}

// set time
const dateSet = {
    sec     : "c4",
    cName   : "set time",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.setMonth(), .setDate(), .setFullYear(), .setHours(), .setMinutes(), .setSeconds() `;
        return codeE;
    }
}

// ----> ()
dates = [dateNew, dateMonth, dateDay, dateYear, dateTime, dateSet];

createSection(dates);



// IF

// >=
const ifsGreater= {
    sec     : "c5",
    cName   : "= or greater / less",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `>= ; <=`;
        return codeE;
    }
}

// && ||
const ifsAnd= {
    sec     : "c5",
    cName   : "and / or",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `&& ; ||`;
        return codeE;
    }
}

// if else
const ifsElse = {
    sec     : "c5",
    cName   : "if / else",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `If ( ) { } else { }`;
        return codeE;
    }
}

// if else if
const ifsElseIf = {
    sec     : "c5",
    cName   : "if / else if / else",
    cDesc   : "",
    txtSpan : "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `If ( ) { } else if { } else { }`;
        return codeE;
    }
}

// tst if undefined
const ifsUn= {
    sec     : "c5",
    cName   : "test if undefined",
    cDesc   : "",
    txtSpan : "name",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `if (typeof ${sE} !== undefined) { }`;
        return codeE;
    }
}

// ternary operator
const ifsT= {
    sec     : "c5",
    cName   : "ternary operator",
    cDesc   : "(: - if)  (? - else)",
    txtSpan : "name",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `(${sE} ? &apos;YES&apos; : &apos;NO&apos;)`;
        return codeE;
    }
}

// for, continue
const ifsCon= {
    sec     : "c5",
    cName   : "for, skip iteration (continue)",
    cDesc   : "",
    txtSpan : "name",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `for ( ) { if ( ) {continue} }`;
        return codeE;
    }
}

// for, break
const ifsBreak= {
    sec     : "c5",
    cName   : "for, break iteration (break)",
    cDesc   : "",
    txtSpan : "name",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `for ( ) { if ( ) {break} }`;
        return codeE;
    }
}

// while
const ifsWhile= {
    sec     : "c5",
    cName   : "while",
    cDesc   : "only 1condintion inside while",
    txtSpan : "name",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `let i=0&semi; while ( ) { }&semi; i++&semi;`;
        return codeE;
    }
}

// while do
const ifsDo= {
    sec     : "c5",
    cName   : "while do",
    cDesc   : "will run once no matter what (even if condition not met",
    txtSpan : "name",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `let i=0&semi; do { ; i++ } while ( )`;
        return codeE;
    }
}

// switches
const ifsSwitch= {
    sec     : "c5",
    cName   : "switches - when a lot cases",
    cDesc   : "default - when no case",
    txtSpan : "code",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let sE;
        sE = `<span class="value">${txt}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `switch(${sE}) { case x : ${sE}; break; case y : ${sE}; break; default : ${sE}}`;
        return codeE;
    }
}

// for each
const ifsFor= {
    sec     : "c5",
    cName   : "f() for each (index value in array), no return",
    cDesc   : "index, arr, thisValue - optional",
    txtSpan : "value",
    txtSpan2: "index",
    txtSpan3: "arr",
    txtSpan4: "thisValue",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let txt4 = this.txtSpan4;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let sE4 = `<span class="value">${txt4}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.forEach( function(${sE}, ${sE2}, ${sE3}), ${sE4})`;
        return codeE;
    }
}

// map
const ifsMap= {
    sec     : "c5",
    cName   : "f() for each (index value in array), returns new array",
    cDesc   : "index, arr, thisValue - optional",
    txtSpan : "value",
    txtSpan2: "index",
    txtSpan3: "arr",
    txtSpan4: "thisValue",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let txt4 = this.txtSpan4;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let sE4 = `<span class="value">${txt4}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.map( function(${sE}, ${sE2}, ${sE3}), ${sE4})`;
        return codeE;
    }
}

// map
const ifsForIn= {
    sec     : "c5",
    cName   : "f() for each (index value in array)",
    cDesc   : "may be order issues",
    txtSpan : "key",
    txtSpan2: "object",
    txtSpan3: "",
    txtSpan4: "",
    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let txt4 = this.txtSpan4;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let sE4 = `<span class="value">${txt4}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `for (let ${sE} in ${sE2})`;
        return codeE;
    }
}

// ----> ()
ifs = [ifsGreater, ifsAnd, ifsElse, ifsElseIf, ifsUn, ifsT, ifsCon, ifsBreak, ifsWhile, ifsDo, ifsSwitch, ifsFor, ifsMap, ifsForIn];

createSection(ifs);


// WINDOW............................

// alert
const winAlert= {
    sec     : "c6",
    cName   : "alert message",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `alert(${sE})`;
        return codeE;
    }
}

// prompt
const winPrompt= {
    sec     : "c6",
    cName   : "alert message with input",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `prompt(${sE})`;
        return codeE;
    }
}

// confirm
const winCon= {
    sec     : "c6",
    cName   : "alert message with confirmation",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `confirm(${sE})`;
        return codeE;
    }
}

// outer height
const winOut= {
    sec     : "c6",
    cName   : "outter height & width",
    cDesc   : "whole window",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `window : .outerHeight; .outerWidth;`;
        return codeE;
    }
}

// inner height
const winInner= {
    sec     : "c6",
    cName   : "inner height & width",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `window : .innerHeight; .innerWidth;`;
        return codeE;
    }
}

// scroll
const winScroll= {
    sec     : "c6",
    cName   : "scroll bar possition",
    cDesc   : "?",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `window.scrollX; window.scrollY;`;
        return codeE;
    }
}

// location
const winLoc= {
    sec     : "c6",
    cName   : "location",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `window : .location; .hostname, .port, .href`;
        return codeE;
    }
}

// location reload
const winRe= {
    sec     : "c6",
    cName   : "reload page",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `window : .location.reload()`;
        return codeE;
    }
}

// location history
const winHis= {
    sec     : "c6",
    cName   : "history object",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `window : .location.history; .go, .length`;
        return codeE;
    }
}

// navigation
const winNav= {
    sec     : "c6",
    cName   : "information about the visitor's browser",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `window.navigation`;
        return codeE;
    }
}

// ----> ()
win =[winAlert, winPrompt, winCon, winOut, winInner, winScroll, winLoc, winRe, winHis, winNav];

createSection(win);

// DOC..............................

// document object
const docD= {
    sec     : "c7",
    cName   : "document object properties",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `document. ; head, body, doctype, domain, characterSet, contentType`;
        return codeE;
    }
}

// selecting 
const docS= {
    sec     : "c7",
    cName   : "selecting elements with .document",
    cDesc   : "",
    txtSpan : "message",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `document. ; .forms, .links, .images, .scripts`;
        return codeE;
    }
}

// getElementById
const docID= {
    sec     : "c7",
    cName   : "get Element By Id",
    cDesc   : "",
    txtSpan : "ID",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getElementById(${sE})`;
        return codeE;
    }
}

// style
const docStyle= {
    sec     : "c7",
    cName   : "change element style",
    cDesc   : "",
    txtSpan : "ID",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.style ; .background, .color, .padding, .display ; ="" `;
        return codeE;
    }
}

// change content
const docCon= {
    sec     : "c7",
    cName   : "change element content",
    cDesc   : "",
    txtSpan : "ID",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.textContent = ""`;
        return codeE;
    }
}

// change content (2)
const docCon2= {
    sec     : "c7",
    cName   : "change element content (2)",
    cDesc   : "",
    txtSpan : "ID",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.innerText = ""`;
        return codeE;
    }
}

// inner html
const docHtml= {
    sec     : "c7",
    cName   : "change element with html code",
    cDesc   : "",
    txtSpan : "ID",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.innerHTML = ""`;
        return codeE;
    }
}

// query selector
const docQ= {
    sec     : "c7",
    cName   : "single element selector",
    cDesc   : "",
    txtSpan : "x",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.querySelector( ${sE}); #; .; h2; ul li; li:nth-child(3)`;
        return codeE;
    }
}

// class name
const docClass= {
    sec     : "c7",
    cName   : "get element by class name",
    cDesc   : "",
    txtSpan : ".class",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getElementByClassName( ${sE})`;
        return codeE;
    }
}

// tag name
const docTag= {
    sec     : "c7",
    cName   : "get element by tag name",
    cDesc   : "",
    txtSpan : "tag",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getElementByTagName( ${sE}) ; "li"`;
        return codeE;
    }
}

// multiple element selector
const docMu= {
    sec     : "c7",
    cName   : "multiple element selector",
    cDesc   : "node list",
    txtSpan : "x",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.querySelectorAll( ${sE}) ; "li" "#" "." "li:nth-child(odd)`;
        return codeE;
    }
}

// get child nodes
const docChild= {
    sec     : "c7",
    cName   : "get child nodes",
    cDesc   : "",
    txtSpan : "x",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getChildNodes`;
        return codeE;
    }
}

// get child node
const docChild1= {
    sec     : "c7",
    cName   : "get child node",
    cDesc   : "",
    txtSpan : "n",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getChildNodes[ ${sE}]; .firstChild, .lastChild`;
        return codeE;
    }
}

// get child node name
const docChildN= {
    sec     : "c7",
    cName   : "get child node name",
    cDesc   : "",
    txtSpan : "n",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getChildNodes[ ${sE}].nodeName`;
        return codeE;
    }
}

// get child node type
const docChildT= {
    sec     : "c7",
    cName   : "get child node type",
    cDesc   : "nr: 1 element / 3 txt node / 8 comment / 9 document itself / 10 doctype",
    txtSpan : "n",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getChildNodes[ ${sE}].nodeType`;
        return codeE;
    }
}

// get children
const docChildren= {
    sec     : "c7",
    cName   : "get children elements",
    cDesc   : "without nodes",
    txtSpan : "n",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getChildren`;
        return codeE;
    }
}

// get child 
const docChildren2= {
    sec     : "c7",
    cName   : "get child element",
    cDesc   : "without nodes",
    txtSpan : "n",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getChildren[ ${sE}]; .firstElementChild, .lastElementChild, `;
        return codeE;
    }
}

// get parent node
const docParNode= {
    sec     : "c7",
    cName   : "get parent node",
    cDesc   : "",
    txtSpan : "n",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getParentNode`;
        return codeE;
    }
}

// get parent elemnt
const docPar= {
    sec     : "c7",
    cName   : "get parent element",
    cDesc   : "",
    txtSpan : "n",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getParentElement`;
        return codeE;
    }
}

// get sibling
const docSib= {
    sec     : "c7",
    cName   : "get sibling",
    cDesc   : "",
    txtSpan : "n",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.nextSibling; .previousSibling, .nextElementSibling, .previousElementSibling`;
        return codeE;
    }
}

// ----> ()
doc = [docD, docS, docID, docStyle, docCon, docCon2, docHtml, docQ, docClass, docTag, docMu, docChild, docChild1, docChildN, docChildT, docChildren, docChildren2, docParNode, docPar, docSib];

createSection(doc);


// CREATING DOC

// get sibling
const createEl = {
    sec     : "c8",
    cName   : "create element",
    cDesc   : "",
    txtSpan : "el",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.createElement(${sE})`;
        return codeE;
    }
}

// add class
const createCl = {
    sec     : "c8",
    cName   : "add class",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.className = ""`;
        return codeE;
    }
}

// add id
const createID = {
    sec     : "c8",
    cName   : "add ID",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.id = ""`;
        return codeE;
    }
}

// set atribute
const createAt = {
    sec     : "c8",
    cName   : "set attribute",
    cDesc   : "",
    txtSpan : "att",
    txtSpan2: "value",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.setAttribute( "${sE}", "${sE2}")`;
        return codeE;
    }
}

// create node
const createNo = {
    sec     : "c8",
    cName   : "create node",
    cDesc   : "",
    txtSpan : "txt",
    txtSpan2: "value",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.createTextNode( ${sE})`;
        return codeE;
    }
}

// appendChild
const createCh = {
    sec     : "c8",
    cName   : "append child",
    cDesc   : "",
    txtSpan : "child",
    txtSpan2: "value",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.appendChild( ${sE})`;
        return codeE;
    }
}

// replace
const createRe = {
    sec     : "c8",
    cName   : "replace child",
    cDesc   : "",
    txtSpan : "new",
    txtSpan2: "old",
    txtSpan3: "parent",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `${sE3}.replaceChild( ${sE}, ${sE2})`;
        return codeE;
    }
}

// remove
const createRem = {
    sec     : "c8",
    cName   : "remove child",
    cDesc   : "",
    txtSpan : "child",
    txtSpan2: "parent",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `${sE2}.removeChild( ${sE})`;
        return codeE;
    }
}

// remove list item
const createRemL = {
    sec     : "c8",
    cName   : "remove list item",
    cDesc   : "",
    txtSpan : "n",
    txtSpan2: "",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `list[${sE}].remove()`;
        return codeE;
    }
}

// remove list item
const createCL = {
    sec     : "c8",
    cName   : "class list",
    cDesc   : "",
    txtSpan : "n",
    txtSpan2: "",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.classList ; .classList[${sE}]`;
        return codeE;
    }
}

// add, remove class list
const createCLAR = {
    sec     : "c8",
    cName   : "class list add / remove",
    cDesc   : "",
    txtSpan : "Cname",
    txtSpan2: "",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.classList.add( ${sE}) ; .classList.remove( ${sE})`;
        return codeE;
    }
}

// get attribute
const createGet = {
    sec     : "c8",
    cName   : "get attribute",
    cDesc   : "",
    txtSpan : "att",
    txtSpan2: "",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.getAttribute( ${sE}) ;`;
        return codeE;
    }
}

// has attribute
const createHas = {
    sec     : "c8",
    cName   : "has attribute?",
    cDesc   : "true / false",
    txtSpan : "att",
    txtSpan2: "",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.hasAttribute( ${sE}) ;`;
        return codeE;
    }
}

// remove attribute
const createRemA = {
    sec     : "c8",
    cName   : "remove attribute",
    cDesc   : "",
    txtSpan : "att",
    txtSpan2: "",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.removeAttribute( ${sE}) ;`;
        return codeE;
    }
}

// ----> ()
create = [createEl, createCl, createID, createAt, createNo, createCh, createRe, createRem, createRemL, createCL, createCLAR, createGet, createHas, createRemA];

createSection(create);



// EVENT LISTENERS

// remove attribute
const evEL = {
    sec     : "c9",
    cName   : "add event listener",
    cDesc   : "",
    txtSpan : "event",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `.addEventListener( ${sE}, ${sE2})`;
        return codeE;
    }
}

// event type
const evTar = {
    sec     : "c9",
    cName   : "get the element that triggered a event",
    cDesc   : "",
    txtSpan : "event",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `e.target ; e.target.id ; e.target.className`;
        return codeE;
    }
}

// event target
const evTyp = {
    sec     : "c9",
    cName   : "get the event that triggered a event",
    cDesc   : "",
    txtSpan : "event",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `e.type`;
        return codeE;
    }
}

// event timestamp
const evTime = {
    sec     : "c9",
    cName   : "get the timestamp",
    cDesc   : "from www load",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `e.timeStamp`;
        return codeE;
    }
}

// coordinates win
const evCo = {
    sec     : "c9",
    cName   : "x / y mouse coordinates (to window)",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `e.clientX ; e.clientY`;
        return codeE;
    }
}

// coordinates element
const evCl = {
    sec     : "c9",
    cName   : "x / y mouse coordinates (to the element)",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `e.offsetX ; e.offsetY`;
        return codeE;
    }
}

// prevent default
const evPrev = {
    sec     : "c9",
    cName   : "prevent default behaviour",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `e.preventDefault()`;
        return codeE;
    }
}

// ----> ()
ev = [evEL, evTar, evTyp, evTime, evCo, evCl, evPrev];

createSection(ev);



// MOUSE EVENTS

// cclick
const mouseCl = {
    sec     : "c10",
    cName   : "click",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `click`;
        return codeE;
    }
}

// double click
const mouseCl2 = {
    sec     : "c10",
    cName   : "double click",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `dbclick`;
        return codeE;
    }
}

// mouse down
const mouseD = {
    sec     : "c10",
    cName   : "click + hold down",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `mousedown`;
        return codeE;
    }
}

// mouse up
const mouseUp = {
    sec     : "c10",
    cName   : "click + hold up",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `mouseup`;
        return codeE;
    }
}

// mouse enter
const mouseEn = {
    sec     : "c10",
    cName   : "drag on element",
    cDesc   : "works only on main parent",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `mouseenter`;
        return codeE;
    }
}

// mouse over
const mouseOv = {
    sec     : "c10",
    cName   : "drag on element (2)",
    cDesc   : "works on every element of parent",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `mouseover`;
        return codeE;
    }
}

// mouse leave
const mouseLv = {
    sec     : "c10",
    cName   : "drag off element",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `mouseleave`;
        return codeE;
    }
}

// mouse out
const mouseOut = {
    sec     : "c10",
    cName   : "drag off element (2)",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `mouseout`;
        return codeE;
    }
}

// mouse move
const mouseMov = {
    sec     : "c10",
    cName   : "any mouse movement",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `mousemove`;
        return codeE;
    }
}

// ----> ()
mouse = [mouseCl, mouseCl2, mouseD, mouseUp, mouseEn, mouseOv, mouseLv, mouseOut, mouseMov];

createSection(mouse)



// KEYBOARD / INPUT EVENTS

// submit
const keySub = {
    sec     : "c11",
    cName   : "submit",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `submit`;
        return codeE;
    }
}

// keydown
const keyD = {
    sec     : "c11",
    cName   : "key down",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `keydown`;
        return codeE;
    }
}

// key up
const keyUp = {
    sec     : "c11",
    cName   : "key up",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `keyup`;
        return codeE;
    }
}

// key press
const keyP = {
    sec     : "c11",
    cName   : "key press",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `keypress`;
        return codeE;
    }
}

// key focus
const keyF = {
    sec     : "c11",
    cName   : "key clicked (focus)",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `focus`;
        return codeE;
    }
}

// key blur
const keyB = {
    sec     : "c11",
    cName   : "key clicked off (blur)",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `blur`;
        return codeE;
    }
}

// key cut
const keyC = {
    sec     : "c11",
    cName   : "cut",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `cut`;
        return codeE;
    }
}

// key paste
const keyPaste = {
    sec     : "c11",
    cName   : "paste",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `paste`;
        return codeE;
    }
}

// key input
const keyIn = {
    sec     : "c11",
    cName   : "input type",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `input`;
        return codeE;
    }
}

// key change
const keyCh = {
    sec     : "c11",
    cName   : "change (like in select list)",
    cDesc   : "",
    txtSpan : "",
    txtSpan2: "f(e)",
    txtSpan3: "",

    
    codeFun : function() {
        let txt = this.txtSpan;
        let txt2 = this.txtSpan2;
        let txt3 = this.txtSpan3;
        let sE = `<span class="value">${txt}</span>`;
        let sE2 = `<span class="value">${txt2}</span>`;
        let sE3 = `<span class="value">${txt3}</span>`;
        let codeE;
        codeE = document.createElement("code");
        codeE.innerHTML = `change`;
        return codeE;
    }
}

// ----> ()
key = [keySub, keyD, keyUp, keyP, keyF, keyB, keyC, keyPaste, keyIn, keyCh];

createSection(key);