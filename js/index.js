let swiperRender = (function () {
  let swiperExample = null;
  let change = function (example) {
    let {slides: slideAry, activeIndex} = example;

    [].forEach.call(slideAry, (item, index) => {
      if (index === activeIndex) {
        item.id = 'page' + (activeIndex + 1);
        return;
      }
      item.id = null;
    })


  }
  return {
    init: function (index=0) {
      if (!swiperExample) {
        swiperExample = new Swiper('.swiper-container', {
          direction: 'vertical',
          effect: 'coverflow',
          onInit: change,
          onTransitionEnd: change,
        });
      }
      index = index > 6 ? 6 : index;
      swiperExample.slideTo(index, 0);
    }

  }
})();
swiperRender.init();