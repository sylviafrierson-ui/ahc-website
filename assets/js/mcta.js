/* Phone "Book a visit / Text us" bar: stays hidden while the page's own top buttons are on screen,
   slides in once they scroll away, so it never sits over the opening paragraph. */
(function () {
  var bar = document.querySelector('.mcta');
  if (!bar) return;
  var top = document.querySelector('.page-cta');
  if (!top || !('IntersectionObserver' in window)) { bar.classList.add('is-on'); return; }
  new IntersectionObserver(function (e) {
    var past = !e[0].isIntersecting && e[0].boundingClientRect.top < 0;
    bar.classList.toggle('is-on', past);
  }).observe(top);
})();
