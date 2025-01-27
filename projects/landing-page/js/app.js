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

// obtaining the highest number that is not greater than a given value.
const balance = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove active class to section and navigation
const removeActiveClass = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background:linear-gradient(0deg, rgba(139,0,139,1) 0%, rgba(75,0,130,1) 100%);";
    sectionNumber = section.id.slice(7,8) -1;
    lpNavigation.childNodes[sectionNumber].style.cssText = "text-decoration: none";
};

// add active class to section and navigation
const addActiveClass = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background: #fff;color: #000";
        sectionNumber = section.id.slice(7,8) -1;
        lpNavigation.childNodes[sectionNumber].style.cssText = "text-decoration: underline";
    };
};

// Activating active section
const sectionActivate = () => {
    lpSections.forEach(section => {
        const sectionBalance = balance(section);

        inviewport = () => sectionBalance < 80 && sectionBalance >= -80;

        removeActiveClass(section);
        addActiveClass(inviewport(),section);
    });
};

window.addEventListener('scroll', sectionActivate);


// Section Acccordian Variables

const sectionHeader = document.getElementsByClassName("section-header"),
      sectionContents = document.getElementsByClassName("section-content"),
      icons = document.getElementsByClassName("icon");

// Section Acccordian Function
 for (let i = 0; i < sectionHeader.length; i++) {
        sectionHeader[i].addEventListener('click', () => {

            for (let j = 0; j < sectionContents.length; j++) {
                if (i == j) {
                    icons[j].innerHTML = sectionContents[j].getBoundingClientRect().height === 0 ? "-" : "+";
                    sectionContents[j].classList.toggle('content-transition');
                } else {
                    icons[j].innerHTML = "+";
                    sectionContents[j].classList.remove('content-transition');
                }
            }

        });
    }

// Scroll to section

 const scroll = () => {

    const sectionAnchor = document.querySelectorAll('.navbar__menu a');
    sectionAnchor.forEach(sectionAnchor => {
        sectionAnchor.addEventListener('click', () => {
            for(i = 0 ; i<lpSections ; i++){
                lpSections[i].addEventListener('click',sectionScroll(link));
            }
        });
    });

};

scroll();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


