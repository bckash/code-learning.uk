

// for every h2: adds ".plus" & click EL (acordeaon) 
const all = document.querySelectorAll(".js-main").forEach(function(art){
  
  const h2element = art.firstElementChild;
  h2element.className = "plus";
  h2element.addEventListener("click", () => {

    const section = h2element.nextElementSibling;
    section.classList.toggle("active")
    h2element.classList.toggle("minus")
    h2element.classList.toggle("plus")
    
})
})



