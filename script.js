var tl = gsap.timeline();
var nav = document.getElementById("#navbar");
var navContent = document.querySelectorAll("#navbar-content span");
var navContenta = document.querySelector("#navbar-content a");
tl.from("#content h1", {
  // x: -700,
  // y: 300,
  duration: 1.5,
  delay: 1,
  // opacity: 0,
  // scale: 0,
  y: 1000,
});

tl.from("#navbar", {
  y: -100,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
});

tl.from("#navbar-content span", {
  y: -100,
  duration: 0.6,
  // delay: 0.2,
  stagger: 0.2,
  opacity: 0,
});

tl.from("#content h2", {
  // x: -1000,
  duration: 0.8,
  // delay:0.1,
  opacity: 0,
  scale: 0,
});

tl.to("#notice", {
  duration: 0.5,
  left: 0,
});
var noticeclose = document.querySelector("#notice i");
noticeclose.addEventListener("click", () => {
  gsap.to("#notice", {
    left: "-80%",
  });
});

gsap.to("#navbar", {
  backgroundColor: "#FFFFF0",
  boxShadow: "5px 0.5px 4px 0px #a5a5a5",
  // backdropFilter: blur(0),
  // document.getElementById("#navbar-content h1").color="white",
  scrollTrigger: {
    trigger: "#navbar",
    scroller: "body",
    start: 130,
    end: "top -100%",
    markers: false,
    scrub: true,
  },
});

gsap.to("#page1 #navbar #navbar-content a", {
  color: "black",
  scrollTrigger: {
    trigger: "#page1 #navbar #navbar-content a",
    scroller: "body",
    start: 30,
    end: "top -100%",
    scrub: true,
    // markers: true,
  },
});

gsap.to("#nav-btn-icon", {
  color: "black",
  scrollTrigger: {
    trigger: "#nav-btn-icon",
    scroller: "body",
    start: 30,
    end: "top -100%",
    scrub: true,
    // markers: true,
  },
});

navContent.forEach((el) => {
  el.addEventListener("mouseenter", function (dets) {
    var component = document.querySelector(`#${dets.target.id} h4`);
    t2 = gsap.timeline();
    t2.from(component, {
      y: 30,
      duration: 0.5,
      repeat: 0,
    });
    t2.to(component, {
      y: 0,
      duration: 0.5,
      repeat: 0,
    });
  });
});
function logo_transition() {
  var t = gsap.timeline();
  var logo = document.querySelector("#navbar img");
  var logo_div = document.querySelector("#logo");
  t.to(logo, {
    scale: 1.1,
    rotateY: 360,
  });
  t.pause();
  logo_div.addEventListener("mouseenter", () => {
    t.play();
  });
  logo_div.addEventListener("mouseleave", () => {
    t.reverse();
  });
}
logo_transition();

function splitTextAnimation() {
  var t = gsap.timeline();
  var npgc = document.querySelector("#content h1").textContent.split("");
  var content = "";
  npgc.forEach((e, i) => {
    content += `<span id="collegeName_${i}">${e}</span>`;
  });
  document.querySelector("#content h1").innerHTML = content;
  var animationText = document.querySelectorAll("#content h1 span");
  animationText.forEach((el, i) => {
    el.addEventListener("mouseenter", (dets) => {
      gsap.from(dets.target, {
        scale: 1.2,
        opacity: 0.5,
      });
    });
    el.addEventListener("mouseleave", (dets) => {
      gsap.to(dets.target, {
        scale: 1,
        y: 0,
        opacity: 1,
      });
    });
  });
}
splitTextAnimation();

var joinNowButton = document.querySelector("#cta section a ");
joinNowButton.addEventListener("click", () => {
  gsap.to("#googleform", {
    scale: 1,
    x: 0,
  });
});
var formclose = document.querySelector("#googleform");
formclose.addEventListener("click", () => {
  gsap.to("#googleform", {
    scale: 0,
    x: "-100%",
  });
});
// navContent.addEventListener("mouseleave", () => {});
var navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
  
  if(document.querySelector("#nav-btn-icon").classList.contains("ri-close-line")){
    document.querySelector("#nav-btn-icon").classList.remove("ri-close-line");
    document.querySelector("#nav-btn-icon").classList.add("ri-menu-3-line");
    document.querySelector("#navbar-content").style.top = "-60vh";
  }
  else if(document.querySelector("#nav-btn-icon").classList.contains("ri-menu-3-line")){
    document.querySelector("#nav-btn-icon").classList.remove("ri-menu-3-line");
    document.querySelector("#nav-btn-icon").classList.add("ri-close-line");

    document.querySelector("#navbar-content").style.top = "0";
  }
});