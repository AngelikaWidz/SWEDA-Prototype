/* =========================================================
   SWEDA prototype — shared JS
   Handles: mobile nav toggle, success-story carousel,
   and demo contact-form submission (no backend on GitHub Pages).
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a nav link is clicked (useful on mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Success stories carousel ---------- */
  var stories = document.querySelectorAll('.story-slide');
  var storyIndex = 0;
  var prevBtn = document.getElementById('story-prev');
  var nextBtn = document.getElementById('story-next');
  var dots = document.getElementById('story-dots');

  function showStory(index) {
    stories.forEach(function (slide, i) {
      slide.style.display = i === index ? 'block' : 'none';
    });
    if (dots) {
      dots.textContent = (index + 1) + ' of ' + stories.length;
    }
  }

  if (stories.length) {
    showStory(storyIndex);

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        storyIndex = (storyIndex - 1 + stories.length) % stories.length;
        showStory(storyIndex);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        storyIndex = (storyIndex + 1) % stories.length;
        showStory(storyIndex);
      });
    }
  }

  /* ---------- Contact form (demo only) ----------
     GitHub Pages can't run server-side code, so this just
     validates and shows a confirmation message in the page.
     To make this live, wire the form up to a service such as
     Formspree, Netlify Forms, or your own backend endpoint —
     swap the code in this block for a real fetch()/POST call. */
  var forms = document.querySelectorAll('.contact-form');

  forms.forEach(function (form) {
    var status = form.querySelector('.form-status');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var consent = form.querySelector('input[name="consent"]');
      if (consent && !consent.checked) {
        status.textContent = 'Please tick the consent box before sending your message.';
        status.className = 'form-status error';
        return;
      }

      if (!form.checkValidity()) {
        status.textContent = 'Please fill in all required fields.';
        status.className = 'form-status error';
        return;
      }

      status.textContent = "Thanks — this is a prototype form, so nothing was actually sent yet. Once connected to a form service, your message will reach the SWEDA team.";
      status.className = 'form-status success';
      form.reset();
    });
  });

});
