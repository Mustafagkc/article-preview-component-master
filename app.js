const shareButton = document.querySelector("#share-icon");
const cardIcons = document.querySelector(".card-icons");
const profile = document.querySelector(".profile");


shareButton.addEventListener("click", () => { 
    if (window.matchMedia("(max-width:768px)").matches ) {

        
         profile.classList.toggle("none");
        
    }
 cardIcons.classList.toggle("active");    
   
} )



