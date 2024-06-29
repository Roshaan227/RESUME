const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstParagraphAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y : "-10",
        opacity:0,
        duration: 2,
        ease:Expo.easeInOut
    })
}
firstParagraphAnim();

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
        
    })
}
circleMouseFollower();

