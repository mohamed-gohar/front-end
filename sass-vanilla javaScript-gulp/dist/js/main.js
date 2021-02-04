//==================================================
//=====================variables====================
//==================================================
const colorList = document.querySelectorAll(".color li"),
  stopImgSpan = document.querySelectorAll(".stop-img span"),
  showBullSpan = document.querySelectorAll(".hide-bullets span"),
  navbullets = document.querySelector(".navbullets");
let loopGround;

//=====================================================
// ==================== local storage =================
//=====================================================
let colorOpt = localStorage.getItem("color-opt"),
  spanData = localStorage.getItem("spanData"),
  spanBullets = localStorage.getItem("bulletshow");

//color change
if (colorOpt !== null) {
  document.documentElement.style.setProperty("--main-color", colorOpt);
  //color active
  activeINStorage(colorList, "color", colorOpt);
}

// stop ground span
if (spanData !== null) {
  // background active
  activeINStorage(stopImgSpan, "backg", spanData);
}
if (spanData == null || spanData == "yes") {
  backgroundLoop();
} else {
  clearInterval(loopGround);
}

// show hide span
if (spanBullets !== null) {
  activeINStorage(showBullSpan, "show", spanBullets);

  if (spanBullets == "show") {
    navbullets.style.display = "block";
  } else {
    navbullets.style.display = "none";
  }
}

//==========================================================
// =================== navbar toggle menu  =================
//==========================================================
let links = document.querySelector(".menu .links"),
  toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.onclick = function (e) {
  e.stopPropagation();

  this.classList.toggle("open-menu");
  links.classList.toggle("open");
};
links.onclick = function (e) {
  e.stopPropagation();
};
document.addEventListener("click", (e) => {
  if (e.target !== links) {
    toggleMenu.classList.remove("open-menu");
    links.classList.remove("open");
  }
});
//==========================================================
// =================== side box open ======================
//==========================================================
document.querySelector(".gear").onclick = function () {
  //add class spin
  this.childNodes[0].classList.toggle("fa-spin");
  //add open class
  document.querySelector(".side-box").classList.toggle("open");
};
//change color on select
colorList.forEach((li) => {
  li.addEventListener("click", (e) => {
    let dataColor = e.target.dataset.color;
    document.documentElement.style.setProperty("--main-color", dataColor);
    //set local storage
    localStorage.setItem("color-opt", dataColor);
    // add and remove active class
    addActive(e, "active");
  });
});

//change select Stop img span active
stopImgSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    let spanDataset = e.target.dataset.backg;
    addActive(e, "active");
    //stop background
    if (spanDataset == "yes") {
      backgroundLoop();
    } else {
      clearInterval(loopGround);
    }
    localStorage.setItem("spanData", spanDataset);
  });
});
//change select bullets span active
showBullSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    addActive(e);
    if (e.target.dataset.show === "show") {
      navbullets.style.display = "block";
    } else {
      navbullets.style.display = "none";
    }
    localStorage.setItem("bulletshow", e.target.dataset.show);
  });
});
//reset local storage
document.querySelector(".reset").onclick = function () {
  localStorage.clear();
  location.reload();
};

//==========================================================
// ========== navlinks and bullets scroll to ===============
//==========================================================
let bullets = document.querySelectorAll(".navbullets .bullet"),
  navLinks = document.querySelectorAll(".navbar .links a");

scrollTo(bullets);
scrollTo(navLinks);
//=============================================================
// =============== header image auto change ===================
//=============================================================
let header = document.querySelector(".header"),
  imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
  count = 1;
// backgroundLoop();

//=============================================================
// =============== skill progress animate ===================
//=============================================================
let skill = document.querySelector(".skill-sec"),
  skillSpan = document.querySelectorAll(".skills .progress span");
window.onscroll = function () {
  let skillOffsetTop = skill.offsetTop,
    skillHeight = skill.offsetHeight,
    windowHeight = this.innerHeight,
    pageOffset = this.pageYOffset;

  if (pageOffset > skillOffsetTop - windowHeight + skillHeight * 0.5) {
    skillSpan.forEach((span) => {
      span.style.width = span.dataset.prog;
      span.textContent = span.dataset.prog;
    });
  }
};

//=============================================================
// =============== create gallery popup ===================
//=============================================================
document.querySelectorAll(".gallery-imgs img").forEach((img) => {
  img.addEventListener("click", (e) => {
    document.body.style.overflow = "hidden";
    //create overlay
    let overlay = document.createElement("div");
    overlay.className = "gal-overlay";
    document.body.appendChild(overlay);
    //create popup box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    let popupImg = document.createElement("img");
    popupImg.src = img.src;
    popupBox.appendChild(popupImg);
    document.body.appendChild(popupBox);
    //create popup head
    if (img.alt !== "") {
      let headEle = document.createElement("h3"),
        headTxt = document.createTextNode(img.alt);
      headEle.appendChild(headTxt);
      popupBox.insertBefore(headEle, popupImg);
    }
    //create close button
    let close = document.createElement("span"),
      closeTxt = document.createTextNode("X");
    close.className = "span-close";
    close.appendChild(closeTxt);
    popupBox.appendChild(close);
  });
});
// close popup when click on button close
// or on overlay
close("click");
// or press on esc
close("keydown");

//=======================================================
// ===================== functions ======================
//=======================================================
// remove and add active class
function addActive(e, className = "active") {
  // remove active class
  e.target.parentElement.querySelectorAll(`.${className}`).forEach((ele) => {
    ele.classList.remove(className);
  });
  // add active class
  e.target.classList.add(className);
}

// loop of background imgs
function backgroundLoop() {
  loopGround = setInterval(() => {
    //random imgs
    // let randNum = Math.floor(Math.random() * imgArray.length);
    // header.style.backgroundImage = `url(dist/imgs/${imgArray[randNum]})`;
    // header.setAttribute(
    //   "style",
    //   `background-image:url(dist/imgs/${imgArray[randNum]})`
    // );

    //imgs by order
    if (count == imgArray.length) {
      count = 0;
      header.style.backgroundImage = `url(dist/imgs/${imgArray[count]})`;
      count++;
    } else {
      header.style.backgroundImage = `url(dist/imgs/${imgArray[count]})`;
      count++;
    }
  }, 3000);
}

//Gallery popup close function
function close(eventName, keycode = 27) {
  document.addEventListener(eventName, (e) => {
    if (
      e.target.className === "span-close" ||
      e.target.className === "gal-overlay" ||
      e.keyCode == keycode
    ) {
      document.querySelector(".popup-box").remove();
      document.querySelector(".gal-overlay").remove();
      document.body.style.overflow = "auto";
    }
  });
}

// scroll to section
function scrollTo(eles) {
  eles.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// local storage handle elements active
function activeINStorage(
  element,
  datasetName,
  storageData,
  className = "active"
) {
  element.forEach((ele) => {
    ele.classList.remove(className);
    if (ele.getAttribute(`data-${datasetName}`) === storageData) {
      ele.classList.add(className);
    }
  });
}
