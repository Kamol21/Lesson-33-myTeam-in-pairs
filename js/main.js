// let changerMainBox = document.querySelectorAll(".director-item__main-page")
let changerLi = document.querySelectorAll(".director-item");
let changerBtn = document.querySelectorAll('.director-item__changer-btn');
// let changerBox = document.querySelectorAll(".director-item__info-page");



changerBtn.forEach(function (bnts) {
    
    bnts.addEventListener("click", function () {
        
        
        changerLi.forEach(function(item){
            item.classList.remove("director-item--active");

        })

        bnts.parentElement.classList.add("director-item--active");


    
    })
    
})


// changerBtn.addEventListener("mouseover", () => {
//     changerMainBox.classList.toggle('director-item__main-page')
//     changerMainBox.classList.toggle('director-item__main-page-On')
//     changerBox.classList.toggle("director-item__info-page-On")
// })


// changerMainBox.forEach(function(item){
//     item.classList.remove("director-item__main-page");
//     document.querySelector(".director-item__info-page").classList.add("director-item__info-page-On");
// })