let slider = document.querySelectorAll(".mainContent")
const slides = document.querySelectorAll(".box")
const aRight = document.querySelector(".arrowR")
const aLeft = document.querySelector(".arrowL")
const seeResults = document.querySelector(".seeResults")
const results = document.querySelector(".results")
const mainContent = document.querySelector(".mainContent")
const dnArrow = document.querySelector(".dnArrow")
const backt = document.querySelector(".backt")
let s=0;

slides[s].classList.add("clickable");

const hideL = function(){
    if ( s === 0 ) {
        aLeft.classList.add("hidden")
    }else{
        aLeft.classList.remove("hidden")
    };
    }

const hideR = function(){
    if ( s === 6 ) {
        aRight.classList.add("hidden")
    }else{
        aRight.classList.remove("hidden")
    };
    }

hideL();

aRight.addEventListener('click', function() {
    
    s+=1;
    hideL();
    hideR();
    slides.forEach(() => {
    slides[s].style.transform = "translateX(0%)";
    slides[s].classList.add("clickable");
    slides[s-1].style.transform = "translateX(-116.5%)";
    slides[s-1].classList.remove("clickable");
}); 
    
});

aLeft.addEventListener('click', function() {
    
    s-=1;
    hideL();
    hideR();

    slides.forEach(() => {
    slides[s].style.transform = "translateX(0%)";
    slides[s].classList.add("clickable");
    slides[s+1].style.transform = "translateX(116.5%)";
    slides[s+1].classList.remove("clickable");
}); 
    
});

const p1 = "40%"
const p2 = "30%"
const p3 = "10%"
const p4 = "10%"
const p5 = "5%"
const p6 = "5%"

const html1 = `<div class="rLine">You spend <h1>${p1}</h1> of your week time Working</div>
<div class="rLine">You spend <h1>${p2}</h1> of your week time Sleeping</div>
<div class="rLine">You spend <h1>${p3}</h1> of your week time in Free time</div>
<div class="rLine">You spend <h1>${p4}</h1> of your week time Studying</div>
<div class="rLine">You spend <h1>${p5}</h1> of your week time Exercising</div>
<div class="rLine">You spend <h1>${p6}</h1> of your week time Eating/Bathing</div>`

const html2 = `<div style="transform: rotate(90deg); 
font-weight: bold;
color: midnightblue;
text-align: center;
font-weight: bold;
font-size: 400%;
padding: 100px;
-webkit-text-stroke: 2px black;">></div>
`

seeResults.addEventListener('click', function() {
    mainContent.classList.add("hidden");
    results.classList.add("flex");
    results.insertAdjacentHTML('afterbegin', html1);
    dnArrow.insertAdjacentHTML('beforeend', html2);
    backt.classList.remove("hidden");
    results.classList.add("flex");
});



backt.addEventListener('click', function() {
    
    mainContent.classList.remove("hidden");
    backt.classList.add("hidden");
    results.classList.add("hidden");
    dnArrow.classList.add("hidden");
    results.classList.remove("flex");
    dnArrow.classList.remove("flex");
    window.location.reload();
    window.scrollTo({top: 0,});
});







