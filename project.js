const box = document.getElementById("hoverBox");

box.addEventListener("mouseenter", transform);

    function transform() {
        box.style.backgroundColor = "yellow"
    };

    box.addEventListener("mouseleave", detransform);

    function detransform() {
      box.style.backgroundColor = "white"  
    };