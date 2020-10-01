
// classList - shows/gets all classes
// contains - checks classList for specific classes
// add - add class
// remove - remove class
// toggle - toggles class

const navToggles = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggles.addEventListener('click', function(){
    //if(links.classList.contains("show-links")){
    //    links.classList.remove("show-links");
    //}else{
    //    links.classList.add("show-links");
    //}
    links.classList.toggle("show-links");
});