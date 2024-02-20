import "./styleDesktop.css";
import placeholderImgSmall from "./assets/placeholder-small.jpg";
import placeholderImgMedium from "./assets/placeholder-medium.jpg";
import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import twitterIcon from "./assets/twitter.svg";
import openInNewIcon from "./assets/open-in-new.svg";
import phoneIcon from "./assets/phone.svg";
import emailIcon from "./assets/email.svg";

// Place header image
const headerImg = document.querySelector("header img");
headerImg.src = placeholderImgSmall;

// Place button svg icons inside header
const githubHeader = document.querySelector(
  ".header-links-container a:nth-child(1)",
);

const linkedinHeader = document.querySelector(
  ".header-links-container a:nth-child(2)",
);

const twitterHeader = document.querySelector(
  ".header-links-container a:nth-child(3)",
);

githubHeader.innerHTML = githubIcon;
linkedinHeader.innerHTML = linkedinIcon;
twitterHeader.innerHTML = twitterIcon;

// Place github and live preview icons to individual project containers
const projectsGithub = document.querySelectorAll(
  ".project-name-links a:nth-child(2)",
);

Array.from(projectsGithub).forEach((githubLink) => {
  const link = githubLink;
  link.innerHTML = githubIcon;
});

const projectsLive = document.querySelectorAll(
  ".project-name-links a:nth-child(3)",
);

Array.from(projectsLive).forEach((liveLink) => {
  const link = liveLink;
  link.innerHTML = openInNewIcon;
});

// Place footer image
const footerImg = document.querySelector("footer img");
footerImg.src = placeholderImgMedium;

// Place footer icons and content
const githubFooter = document.querySelector(
  ".footer-links-container a:nth-child(1)",
);

const linkedinFooter = document.querySelector(
  ".footer-links-container a:nth-child(2)",
);

const twitterFooter = document.querySelector(
  ".footer-links-container a:nth-child(3)",
);

githubFooter.innerHTML = githubIcon;
linkedinFooter.innerHTML = linkedinIcon;
twitterFooter.innerHTML = twitterIcon;

const phoneFooter = document.querySelector(".contact-container #phone");
const emailFooter = document.querySelector(".contact-container #email");
phoneFooter.innerHTML = phoneIcon;
phoneFooter.innerHTML += "555-555-5555";

emailFooter.innerHTML = emailIcon;
emailFooter.innerHTML += "johndoe.is.not.real@gmail.com";
