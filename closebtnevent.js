document.getElementsById("closeBtn").addEventListener('click',hideinfo)//hideinfo is fun which will hide all the things
//when we click hideinfo the following functionality should be performed
//when we click on closeBtn ---> hideinfo should be called

function hideinfo(){

    sideNavBar.style.display="block";
    mainSection.forEach(function(item){
        item.style.display="block"
    })
    loginModel.style.display="none"
}

//SIDE BAR AND MAIN BAR WILL DISAPPER -BLOCK(means closed)


function openinfo(){
    sideNavBar.style.display="none";
    mainSection.forEach(function(item){
        item.style.display="none"
    })

    loginModel.style.display
}
//we dont want to block, to again opne that page or section we call openinfo

//this is called declaration of function