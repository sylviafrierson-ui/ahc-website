/* Meta Pixel for At Home Chiropractic (ID 1598411941833783).
   Kept in its own file because the site's Content-Security-Policy blocks inline scripts.
   No health information is ever sent: only PageView, Lead (contact form sent) and Schedule (booking link clicked). */
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1598411941833783');
fbq('track', 'PageView');
(function () {
  var p = location.pathname.replace(/\.html$/, '');
  if (p === '/thanks') fbq('track', 'Lead');
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest ? ev.target.closest('a[href*="sendlynx.com/book"]') : null;
    if (a) fbq('track', 'Schedule');
  }, true);
})();
