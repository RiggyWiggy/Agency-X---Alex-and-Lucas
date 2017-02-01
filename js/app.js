// JavaScript Document
$(document).foundation();

(function() {
"use strict";

var iceCreamContent = {
home: {
  header: "Your go-to experts of all things Ice Cream",
  mainImg: "images/icecream1.jpg",
  mainHeader: "Experts Of Ice Cream",
  mainBio: "Maestros of confectionary, we are the utmost experts of all things Ice Cream. Through many years of training and application Golden Spoon Ice Cream Tasting are the foremost experts of Ice Cream. We strive for the betterment of ice cream for all. We offer our tasting expertise through a multitude of services including consultation and flavor creation.",

  subImg: "images/icecream2.jpg",
  subHeader: "Artisans Of Award Winning Flavours",
  subBio: "Golden Spoon Ice Cream Tasting has created many delicious award winning flavours including Sunset Strawberry Supernova, Chunky Chocolate Coconut Cluster and Velvet Venetian Vanilla. Our creations have won multiple awards including: the IDFA’s Flavour of The Year, the World Dairy Expo Cream Grand Champion and the National Ice Cream Retailers Association award."
},
about: {
  header: "About Us",
  mainImg: "images/alex.jpg",
  mainHeader: "Alex Brown",
  mainBio: "Co-Owner of Golden Spoon Ice Cream Tasting. A graduate from Fanshawe College, Alex is one half of Golden Spoon Ice Cream Tasting. Born in Toronto, Alex moved to London at an early age where his interest in Ice Cream blossomed. Ever since his first Strawberry ice cream, he grew a passion for creating new ice cream flavours. Over the years, Alex has travelled all around the world expanding his ice cream pallet and learning from best ice creameries.",

  subImg: "images/lucas.png",
  subHeader: "Lucas McCallum",
  subBio: "Graduated from Fanshawe College in 1956. Lucas is the other half of Golden Spoon Ice Cream Tasting and co-founded it with his partner Alex in 1967. Born in London, Lucas met Alex and learned about the different flavours of ice cream at an early age. Over the years, Lucas has travelled with Alex across with world in hopes of finding the perfect ice cream."
},
contact: {
  header: "Contact Us Anytime!",
  mainImg: "images/twitter-contact.png",
  mainHeader: "Twitter",
  mainBio: "Follow us below on Twitter to stay updated on new flavours!",

  subImg: "images/facebook-contact.png",
  subHeader: "Facebook",
  subBio: "Like us below on Facebook to follow our content!"
}
};

var navCont = document.querySelectorAll(".nav-item");
var servicesCont = document.querySelector("#servicesCont");
var formContainer = document.querySelector("#formContainer");

var pageSect = document.querySelectorAll(".page-sect");
var pageHeader = document.querySelector(".page-header");
var mainHeaderCont = document.querySelector(".main-page-header");
var mainImgCont = document.querySelector(".main-page-img");
var mainBioCont = document.querySelector(".main-page-bio");

var subHeaderCont = document.querySelector(".sub-page-header");
var subImgCont = document.querySelector(".sub-page-img");
var subBioCont = document.querySelector(".sub-page-bio");

pageHeader.firstChild.nodeValue = iceCreamContent['home'].header;
mainHeaderCont.firstChild.nodeValue = iceCreamContent['home'].mainHeader;
mainBioCont.firstChild.nodeValue = iceCreamContent['home'].mainBio;
mainImgCont.src = iceCreamContent['home'].mainImg;
subHeaderCont.firstChild.nodeValue = iceCreamContent['home'].subHeader;
subBioCont.firstChild.nodeValue = iceCreamContent['home'].subBio;
subImgCont.src = iceCreamContent['home'].subImg;
formContainer.style.display = "none";
servicesCont.style.display = "block";

function objectChange(e){
  var currentSelect = e.currentTarget.id;
  //alert(currentSelect);
  pageHeader.firstChild.nodeValue = iceCreamContent[currentSelect].header;
  mainHeaderCont.firstChild.nodeValue = iceCreamContent[currentSelect].mainHeader;
  mainBioCont.firstChild.nodeValue = iceCreamContent[currentSelect].mainBio;
  mainImgCont.src = iceCreamContent[currentSelect].mainImg;

  subHeaderCont.firstChild.nodeValue = iceCreamContent[currentSelect].subHeader;
  subBioCont.firstChild.nodeValue = iceCreamContent[currentSelect].subBio;
  subImgCont.src = iceCreamContent[currentSelect].subImg;

for(var i=0; i < pageSect.length; i++){
  if (currentSelect === "home"){
    pageSect[i].classList.remove("bioBox");
    pageSect[i].classList.remove("contactBox");
    pageSect[i].classList.add("defaultBox");
    servicesCont.style.display = "block";
    formContainer.style.display = "none";

  } else if (currentSelect === "about") {
    pageSect[i].classList.remove("defaultBox");
    pageSect[i].classList.remove("contactBox");
    pageSect[i].classList.add("bioBox");
    servicesCont.style.display = "none";
    formContainer.style.display = "none";

  } else if (currentSelect === "contact"){
    pageSect[i].classList.remove("bioBox");
    pageSect[i].classList.remove("defaultBox");
    pageSect[i].classList.add("contactBox");
    servicesCont.style.display = "none";
    formContainer.style.display = "block";
}
}
}
[].forEach.call(navCont, function(item){
item.addEventListener('click', objectChange, true);
})


})();
