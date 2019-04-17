const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br>Is<br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Helper for Quick Selecting items out of the Object above
const item = (array, index) => array[index];
// variables to make selection quick and easy
const mainContentItems = ['features', 'about', 'services', 'product', 'vision'];
const contactItems = ['address', 'phone', 'email'];

// UPDATE NAV LINKS
// Updating Link Labels
let navLinks = document.querySelectorAll(`nav a`);
navLinks.forEach((link, index) => {
  link.style.color = 'green';
  link.innerText = siteContent['nav']["nav-item-".concat(index+1)]
});
// Creating new elements as required
let homeLink = document.createElement('a', {href: '#'});
homeLink.innerText = 'Home';
homeLink.style.color = 'green';
let tipLink = document.createElement('a', {href: '#'});
tipLink.innerText = 'Buy Me a Coffee!';
tipLink.style.color = 'green';
let nav = document.querySelector('header nav');
// Adding new elements to DOM
nav.prepend(homeLink);
nav.append(tipLink);

// UPDATE CTA IMAGE SOURCE
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// UPDATE CTA HEADER & BUTTON
let ctaH1 = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('.cta-text button');
ctaH1.innerHTML = siteContent['cta']['h1'];
ctaButton.innerText = siteContent['cta']['button'];

// UPDATE MAIN CONTENT
let contentHeaders = document.querySelectorAll('.text-content h4');
let contentText = document.querySelectorAll('.text-content p');
let contentImage = document.getElementById('middle-img');
contentHeaders.forEach((header, index) => {
  header.innerText = siteContent['main-content'][item(mainContentItems, index).concat('-h4')]
});
contentText.forEach((header, index) => {
  header.innerText = siteContent['main-content'][item(mainContentItems, index).concat('-content')];
});
contentImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// UPDATE CONTACT
let contactHeader = document.querySelector('.contact h4');
let contactParagraphs = document.querySelectorAll('.contact p');
contactHeader.innerText = siteContent['contact']['contact-h4'];
contactParagraphs.forEach((paragraph, index) => {
  paragraph.innerHTML = siteContent['contact'][item(contactItems, index)];
})

// UPDATE FOOTER
let footerContent = document.querySelector('footer p');
footerContent.innerText = siteContent['footer']['copyright'];