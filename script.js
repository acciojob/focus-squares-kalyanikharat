let sqr = document.querySelectorAll(".square");

sqr.forEach(sqaure => {
  sqaure.addEventListener("mouseover", () => {
    sqr.forEach(sqrs => {
      if (sqrs !== sqaure) {
        sqrs.style.backgroundColor = "#6F4E37"; 
      }
    });
  });

  sqaure.addEventListener("mouseout", () => {
    sqr.forEach(sqrs => {
      sqrs.style.backgroundColor = "#E6E6FA"; 
    });
  });
});
