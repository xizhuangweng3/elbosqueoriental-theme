/* Override Dawn's SliderComponent to scroll a full visible page per arrow click */
(function () {
  function applyOverride() {
    if (typeof SliderComponent === 'undefined') return;
    SliderComponent.prototype.onButtonClick = function (event) {
      event.preventDefault();
      var isNext = event.currentTarget.name === 'next';
      var scrollAmount = this.slider.clientWidth;
      this.slider.scrollTo({
        left: this.slider.scrollLeft + (isNext ? scrollAmount : -scrollAmount),
        behavior: 'smooth'
      });
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyOverride);
  } else {
    applyOverride();
  }
})();
