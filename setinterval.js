const Animator = setInterval(sampleAnimation,1000)

let a=0;

function sampleAnimation(){
    a=a+1  //incrementing

    if(a==10){
        clearInterval(Animator)

    }
    const textAnimation = document.getElementById("title")
    textAnimation.style.fontSize= a+"rem"
}