/* ==========================================================
GRADE 9 PYTHON
COMPONENT LIBRARY
========================================================== */

document.addEventListener("DOMContentLoaded",()=>{

console.log("Components Loaded");

});
/* ==========================================================
COPY CODE BUTTON
========================================================== */

document.querySelectorAll(".copy-button").forEach(button=>{

button.addEventListener("click",()=>{

const code=button.closest(".code-card")
.querySelector("pre").innerText;

navigator.clipboard.writeText(code);

const original=button.innerText;

button.innerText="Copied!";

setTimeout(()=>{

button.innerText=original;

},1500);

});

});
