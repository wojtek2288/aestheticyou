$('.ml3').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });

  anime.timeline()
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: function(el, i) {
        return 150 * (i+1)
      }
    });
  
    $('.second').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
  
    anime.timeline()
      .add({
        targets: '.second .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: function(el, i) {
          return 150 * (i+1)
        }
      });



function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}
