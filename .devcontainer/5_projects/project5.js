// genernate randomcolor number

const randomcolor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalcolor;
  
  let startchangingcolor = function () {
    if (!intervalcolor) {
      intervalcolor = setInterval(startcoloring, 1000);
    }
  
    function startcoloring() {
      document.body.style.backgroundColor = randomcolor();
    }
  };
  
  let stopchangingcolor = function () {
    clearInterval(intervalcolor);
    intervalcolor = null;
  };
  
  document.querySelector("#start").addEventListener("click", startchangingcolor);
  
  document.querySelector("#stop").addEventListener("click", stopchangingcolor);
  