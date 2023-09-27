function createSlick(){  
  $(".imageCarousel").not('.slick-initialized').slick({
    centerMode: false,
      autoplay: true,
      dots: false,
      autoplaySpeed: 5000,
        arrows: true,
      slidesToShow: 1,
      responsive: [{ 
          breakpoint: 200,
          settings: {
              dots: false,
              arrows: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1
          } 
      }]
  }); 

} 
createSlick();
$(window).on( 'resize', createSlick );

// smooth scrolling down
function smoothScroll(targetId, duration) {
  var target = document.getElementById(targetId);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

