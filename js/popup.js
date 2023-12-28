$(document).ready(() => {
  $('.portfolio-item').on('click', (e) => {
    e.stopPropagation();
    const src = $(e.currentTarget).data('src'); // Получаем значение data-src
    createPopup(e.currentTarget, src);
  });


  $('.control-item').on('click', (e) => {
    e.stopPropagation();
    slideTestimonials(e.currentTarget);
});
});

function createPopup(item, src) {
  const clicked = $(item);
  const container = $('<div>', { 'class': 'popup-container' });
  const img = $('<img>', { 'class': 'popup', 'src': src });
  container.append(img);
  $('body').append(container);

  img.on('click', () => {
    container.removeClass('ready');
    setTimeout(() => {
      container.remove();
    }, 250);
  });
}


  function slideTestimonials(item){
    const clicked = $(item);
    if(clicked.hasClass('active')) {
      return
    }
    const index =$('.control-item').index(clicked);
   /* console.log(index);*/
  
   const width = $('.testimonials-card').outerWidth(true);
  const scroll = width * 2 * index;
  $('.testimonials-inner').css('transform', 'translateX(-' + scroll + 'px)');

  $('.control-item').removeClass('active').eq(index).addClass('active');

  }
  
  

  $(document).ready(() => {
    $('.testimonials-inner').swipe({
      swipeLeft: function() {
        scrollTestimonials('left');
      },
      swipeRight: function() {
        scrollTestimonials('right');
      },
      threshold: 0
    });
  
    $('.control-item').on('click', (e) => {
      e.stopPropagation();
      slideTestimonials(e.currentTarget);
    });
  });
  
  function scrollTestimonials(direction) {
    const width = $('.testimonials-card').outerWidth(true);
    
  
    let newIndex;
    if (direction === 'left') {
      newIndex = currentIndex + 1;
    } else if (direction === 'right') {
      newIndex = currentIndex - 1;
    }
  
    if (newIndex >= 0 && newIndex < $('.control-item').length) {
      const scroll = width * newIndex;
      $('.testimonials-inner').css('transform', 'translateX(-' + scroll + 'px)');
      $('.control-item').removeClass('active').eq(newIndex).addClass('active');
    }
  }
  
  
  