const revealBtn = document.getElementById("reveal-el")
const ulEl = document.getElementById("ul-el")

revealBtn.addEventListener("click",function(){
    ulEl.innerHTML = `<ul class = "white space">Properly learn all the languages needed for Web Development</ul>
    <ul class = "white space">Become a master at using Github</ul>
    <ul class = "white space">Improve my creativity/design skills when building websites</ul>`
})