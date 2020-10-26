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
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
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

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let headImage = document.getElementById("cta-img");
headImage.setAttribute('src' , siteContent['cta']['img-src']);

let navBar = document.querySelectorAll('nav a');
console.log(navBar);
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];

let h1 = document.querySelector('h1');

// h1.textContent = siteContent['cta']['h1']

let h1text1 = document.createTextNode('DOM');
h1.appendChild(h1text1);

let br = document.createElement('br')
h1.appendChild(br)

let h1text2 = document.createTextNode("IS");
h1.appendChild(h1text2)

let br2 = document.createElement('br');
h1.appendChild(br2)

let h1text3 = document.createTextNode('Awesome!');
h1.appendChild(h1text3);

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

//Top

let p1Top = document.querySelector('div .top-content .text-content:nth-of-type(1) h4');
p1Top.textContent = siteContent['main-content']['features-h4'];
let p1 = document.querySelector('div .top-content .text-content:nth-of-type(1) p');
p1.textContent = siteContent['main-content']['features-content'];
let p2Top = document.querySelector('div .top-content .text-content:nth-of-type(2) h4');
p2Top.textContent = siteContent['main-content']['about-h4'];
let p2 = document.querySelector('div .top-content .text-content:nth-of-type(2) p');
p2.textContent = siteContent['main-content']['about-content'];

//Bottom

let p3Top = document.querySelector('div .bottom-content .text-content:nth-of-type(1) h4');
p3Top.textContent = siteContent['main-content']['services-h4'];
let p3 = document.querySelector('div .bottom-content .text-content:nth-of-type(1) p');
p3.textContent = siteContent['main-content']['services-content'];
let p4Bot = document.querySelector('div .bottom-content .text-content:nth-of-type(2) h4');
p4Bot.textContent = siteContent['main-content']['product-h4'];
let p4 = document.querySelector('div .bottom-content .text-content:nth-of-type(2) p');
p4.textContent = siteContent['main-content']['product-content'];
let p5Bot = document.querySelector('div .bottom-content .text-content:nth-of-type(3) h4');
p5Bot.textContent = siteContent['main-content']['vision-h4'];
let p5 = document.querySelector('div .bottom-content .text-content:nth-of-type(3) p');
p5.textContent = siteContent['main-content']['vision-content'];

//foot

let footerh4 = document.querySelector('.contact h4');
console.log(footerh4)
footerh4.textContent = siteContent['contact']['contact-h4']

let footerP = document.querySelector('.contact p')
footerP.textContent = siteContent['contact']['address']

let footerEm = document.querySelector('.contact p:nth-of-type(3)')
console.log(footerEm)
footerEm.textContent = siteContent['contact']['email']

let breaker = document.createElement('br');
footerP.appendChild(breaker)

let footerP2 = document.querySelector('.contact p:nth-of-type(2)')
console.log(footerP2)
footerP2.textContent = siteContent['contact']['phone']

let footerP3 = document.querySelector('footer p');
footerP3.textContent = siteContent['footer']['copyright']

