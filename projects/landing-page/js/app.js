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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
/** Global Sections Variable */
const lpSections = document.querySelectorAll('section');

/** Global Navigation Variable */
const lpNavigation = document.getElementById('navbar__list');

/** Global Menu Variable */
const navMenu = document.querySelector('.navbar__menu');

/** Global Navigation List Variable */


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

/** Navigation Functionality */
const topNav = () => {
  
  let navBehavior = '';
  // loops over the sections
  lpSections.forEach(section => {
    
    const sectionID = section.id;
    const sectionDataSet = section.dataset.nav;
    
    navBehavior += `<li class="menu__item"><a class="menu__link" href="#${sectionID}">${sectionDataSet}</a></li>`;
    
  });
 /** Adding Hamburger Menu to Mobile Responsive Rules */
  const hamburgerMenu = document.createElement('div');
  
  hamburgerMenu.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
  hamburgerMenu.classList.add('hamburger-menu');
  navMenu.appendChild(hamburgerMenu);
  
/** Add All Items To The Navigation */  
lpNavigation.innerHTML = navBehavior;
  
};

topNav();

/** Click Event on Hamburger Menu */
const mobileBurgerMenu = document.querySelector('.hamburger-menu');
const navBarList = document.getElementById('navbar__list');

mobileBurgerMenu.addEventListener('click', mobileMenu);

function mobileMenu() {
    mobileBurgerMenu.classList.toggle('active');
    navBarList.classList.toggle('active');
}

/** Close Click Event on Hamburger Menu  */
const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    mobileBurgerMenu.classList.remove('active');
    navBarList.classList.remove('active');
};


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


