import "./styleDesktop.css";
import placeholderImgSmall from "./assets/placeholder-small.jpg";
import placeholderImgMedium from "./assets/placeholder-medium.jpg";
import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import twitterIcon from "./assets/twitter.svg";

// Place header image
const img = document.querySelector("header img");
img.src = placeholderImgSmall;

// Place button svg icons inside header
const github = document.querySelector(".header-links-container a:nth-child(1)");

const linkedin = document.querySelector(
  ".header-links-container a:nth-child(2)",
);

const twitter = document.querySelector(
  ".header-links-container a:nth-child(3)",
);

github.innerHTML = githubIcon;
linkedin.innerHTML = linkedinIcon;
twitter.innerHTML = twitterIcon;
