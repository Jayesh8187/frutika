window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let header = document.getElementById("header-wapper");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.style.backgroundColor = "rgba(0,0,0,0.9)";
    header.style.transition = "all 0.5s";
    header.style.color = "black";
    header.style.height = "80px";
  } else {
    header.style.backgroundColor = "transparent";
  }
}