const sidenav = document.querySelector("#sidenav")
const menuicon = document.getElementById("menuicon")
const closetag = document.getElementById("closetag")


menuicon.addEventListener("click", function(){
    sidenav.style.right = 0
})

closetag.addEventListener("click", function(){
    sidenav.style.right = "-50%";
})