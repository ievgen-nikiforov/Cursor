function generateBlocksInterval() {
    for (let index = 0; index < 5; index++) {
      const newDiv = document.createElement("div");
      document.body.append(newDiv);
      for (let index = 0; index < 5; index++) {
        const newDiv = document.createElement("div");
        document.body.append(newDiv);
  
        newDiv.style.width = 50 + "px";
        newDiv.style.height = 50 + "px";
        newDiv.style.backgroundColor = getRandomColor();
        newDiv.style.display = "inline-block";
      }
      function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    }
    setInterval(newColor, 1000);
    function newColor() {
      var divs = Array.prototype.slice.call(
        document.getElementsByTagName("div"),
        0
      );
      divs.forEach((div) => (div.style.backgroundColor = getRandomColor()));
    }
  }
  
  
  


