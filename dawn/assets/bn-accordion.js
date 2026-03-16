/**
 * bn-accordion.js
 * Smooth open/close animation for product page accordions.
 * Targets .product__accordion details — does NOT affect
 * Dawn's header dropdowns, search modal, or other <details> elements.
 */
(function () {
  var DURATION_OPEN  = 320; /* ms */
  var DURATION_CLOSE = 260; /* ms */

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animateOpen(details, content) {
    /* Mark as opening so clicks mid-animation are ignored */
    details.dataset.animating = '1';
    details.open = true;

    var target = content.scrollHeight;
    content.style.height = '0px';

    var start = null;
    function tick(now) {
      if (!start) start = now;
      var p = Math.min((now - start) / DURATION_OPEN, 1);
      content.style.height = (target * easeInOutCubic(p)) + 'px';
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        content.style.height = '';
        delete details.dataset.animating;
      }
    }
    requestAnimationFrame(tick);
  }

  function animateClose(details, content) {
    details.dataset.animating = '1';

    var from = content.scrollHeight;
    content.style.height = from + 'px';

    var start = null;
    function tick(now) {
      if (!start) start = now;
      var p = Math.min((now - start) / DURATION_CLOSE, 1);
      content.style.height = (from * (1 - easeInOutCubic(p))) + 'px';
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        details.open = false;
        content.style.height = '';
        delete details.dataset.animating;
      }
    }
    requestAnimationFrame(tick);
  }

  function initAccordions() {
    document.querySelectorAll('.product__accordion details').forEach(function (details) {
      /* Guard — don't double-bind */
      if (details.dataset.bnBound) return;
      details.dataset.bnBound = '1';

      var summary = details.querySelector('summary');
      var content = details.querySelector('.accordion__content');
      if (!summary || !content) return;

      summary.addEventListener('click', function (e) {
        e.preventDefault();
        if (details.dataset.animating) return;
        if (details.open) {
          animateClose(details, content);
        } else {
          animateOpen(details, content);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordions);
  } else {
    initAccordions();
  }
})();
