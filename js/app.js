/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/* make array of sections */
let sections = document.querySelectorAll("section")
var navbarList = document.getElementById("navbar__list");

/* loop on the array of sections to add lists to the navbar */
for (const section of sections){
    sectionName = section.getAttribute("data-nav") ; /* save the "data-nav" name in the variable "sectionName" */
    sectionId = section.getAttribute("id");
    let item = document.createElement("li");
    let a = document.createElement("a");
  
    a.setAttribute("class","menu__link"); 
    a.textContent = sectionName;
  
    item.appendChild(a);               /* put the elemnt "a" in the elemnt "li" */

    navbarList.appendChild(item);    /* put the elemnt "li" in the elemnt "ul" */

    /* scroll to the prefered section when clicking on the section in the navbar  */
    item.addEventListener("click", function getTheSection(){
        section.scrollIntoView();
        item.preventDefault(); });
}

/* make function that checks if the section is in view or not */
function sectionInView(element) {
    let position = element.getBoundingClientRect();
    return (position.top >= 0 );;
}
/* function that make the section in view to be active */
function makeSectionActive(){
for (const section of sections) {
    if(sectionInView(section)) {
        if (!section.classList.contains('your-active-class')) {  
            section.classList.add('your-active-class'); }
} else {
            section.classList.remove('your-active-class'); /* make the section unactive if it isn't in view */
      }
    
} }
 document.addEventListener('scroll', makeSectionActive);

 



/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

/*   */
