let photos = [
    "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060",
    "https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560",
    "https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200",
    "https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
    "https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400",
    "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260",
    "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ];
  
  document.addEventListener("mouseup", updateLastActiveTime);
  document.addEventListener("mousedown", updateLastActiveTime);
  document.addEventListener("mousemove", updateLastActiveTime);
  document.addEventListener("wheel", updateLastActiveTime);
  document.addEventListener("click", updateLastActiveTime);
  document.addEventListener("dblclick", updateLastActiveTime);
  document.addEventListener("scroll", updateLastActiveTime);
  
  setInterval(checkTime, 1000);
  setInterval(updateImage, 5000);
  
  let ss = false;
  let timeLeft = 10;
  let lastActiveTime = new Date();
  
  function openSS() {
    document.getElementById("screensaver").style.display = "block";
    ss = true;
  }
  
  function closeSS() {
    document.getElementById("screensaver").style.display = "none";
    ss = false;
  }
  
  function checkTime() {
    if (new Date().getSeconds() - lastActiveTime.getSeconds() > timeLeft && !ss) {
      openSS();
    }
  }
  
  function updateLastActiveTime() {
    lastActiveTime = new Date();
    closeSS();
  }
  
  function updateImage() {
    if (ss) {
      let img = document.getElementById("screensaver__image");
      img.style.opacity = "0";
      fadeInOut(img);
  
      let randomNumber = Math.floor(Math.random() * photos.length) + 0;
      let randomImage = photos[randomNumber];
      document
        .getElementById("screensaver__image")
        .setAttribute("src", randomImage);
      document.getElementById("screensaver__image").style.display = "block";
  
      let imgW = document.getElementById("screensaver__image").offsetWidth;
      let imgH = document.getElementById("screensaver__image").offsetHeight;
      let windowW = window.innerWidth;
      let windowH = window.innerHeight;
  
      document.getElementById(
        "screensaver__image"
      ).style.maxWidth = `${windowW}px`;
  
      document.getElementById(
        "screensaver__image"
      ).style.maxHeight = `${windowH}px`;
  
      generatePosition();
      function generatePosition() {
        let x = Math.random() * (windowW - imgW);
        let y = Math.random() * (windowH - imgH);
  
        document.getElementById("screensaver__image").style.left = `${x}px`;
        document.getElementById("screensaver__image").style.top = `${y}px`;
      }
    }
  }
  
  function fadeInOut(element) {
    let opacity;
  
    if (element.style.opacity > 0.9) {
      element.style.opacity = 1;
  
      let current = setInterval(function () {
        element.style.opacity -= 0.05;
  
        if (element.style.opacity < 0) {
          clearInterval(current);
          opacity = Number(element.style.opacity);
          element.style.opacity = opacity;
        }
      }, 20);
    } else if (element.style.opacity < 1) {
      element.style.opacity = 0;
  
      let newVar = setInterval(function () {
        element.style.opacity = +parseFloat(element.style.opacity) + 0.05;
  
        if (element.style.opacity > 1) {
          clearInterval(newVar);
          opacity = Number(element.style.opacity);
          element.style.opacity = opacity;
        }
      }, 20);
    }
  }
  