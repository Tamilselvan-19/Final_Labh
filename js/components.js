/* =========================================
   COMPONENT LOADER – header.html & footer.html
   Works both on a web server AND when opened
   directly as a local file (file:// protocol).
========================================= */

(function () {

  /* ── Detect base path from this script's own location ── */
  function getBasePath() {
    var scripts = document.querySelectorAll('script[src]');
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].getAttribute('src');
      if (src && src.indexOf('components.js') !== -1) {
        /* Remove "js/components.js" to get folder root */
        return src.replace(/js\/components\.js$/, '');
      }
    }
    return '';
  }

  function loadComponent(url, placeholderId, callback) {
    var el = document.getElementById(placeholderId);
    if (!el) return;

    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (html) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        el.replaceWith(wrapper.firstElementChild || wrapper);
        if (callback) callback();
      })
      .catch(function (err) {
        console.warn('Component load error (' + url + '):', err);
        if (el) el.style.display = 'none';
      });
  }

  /* ── Re-init interactive header after injection ── */
  function initHeader() {

    /* Mobile menu */
    var menuBtn   = document.querySelector('.menu-toggle');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
      });
    }

    /* Dropdown */
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dd) {
      var btn = dd.querySelector('.dropbtn');
      if (btn) {
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          dd.classList.toggle('open');
        });
      }
    });
    document.addEventListener('click', function (e) {
      dropdowns.forEach(function (dd) {
        if (!dd.contains(e.target)) dd.classList.remove('open');
      });
    });

    /* Highlight active nav link */
    var currentPath = window.location.pathname;
    document.querySelectorAll('.main-nav a, .dropdown-content a').forEach(function (link) {
      var href = link.getAttribute('href') || '';
      /* Strip leading slash for comparison */
      var clean = href.replace(/^\//, '');
      if (clean && (currentPath.endsWith('/' + clean) || currentPath.endsWith(clean))) {
        link.classList.add('active');
      }
    });
  }

  /* ── Boot ── */
  var base = getBasePath();

  function boot() {
    loadComponent(base + 'header.html', 'site-header', initHeader);
    loadComponent(base + 'footer.html', 'site-footer');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
