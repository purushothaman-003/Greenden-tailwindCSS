const sidenav = document.querySelector("#sidenav")
const menuicon = document.getElementById("menuicon")
const closetag = document.getElementById("closetag")


menuicon.addEventListener("click", function(){
    sidenav.style.right = 0
})

closetag.addEventListener("click", function(){
    sidenav.style.right = "-50%";
})

//Product search functionality

const productContainer = document.getElementById("product-container")
const search = document.getElementById("search")
const productlist = productContainer.querySelectorAll("div")


    search.addEventListener("keyup", function(){
        var enteredValue = event.target.value.toUpperCase()

        for(count=0; count<productlist.length; count=count+1)
            {
                var productname = productlist[count].querySelector("h1").textContent

                if(productname.toUpperCase().indexOf(enteredValue)<0)
                {
                    productlist[count].style.display="none"
                }
                else{
                    productlist[count].style.display="block"
                }
            }
    })