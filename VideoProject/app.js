// MDN
// The DOMContentLoaded event fires when the initial HTML
// document has been completely loaded and parsed, withouth 
// waiting for StyleSheet, images and subframes to finish loading.

// the load event is fired when the whole page has loaded,
// including all dependent resources such as stylesheet and images.

const btn = document.querySelector(".switch-btn");
const mute = document.querySelector(".mute-btn");

const video = document.querySelector(".video-container");

// make the play/pause button work

btn.addEventListener('click', function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    }
});

// make the mute/unmute button work

mute.addEventListener('click', function(){
    if(!mute.classList.contains("slide")){
        mute.classList.add("slide");
        video.muted = false;
    }else{
        mute.classList.remove("slide");
        video.muted = true;
    }
});


// terget preloader

const preloader = document.querySelector(".preloader");

window.addEventListener('load', function (){
    preloader.classList.add("hide-preloader");

})