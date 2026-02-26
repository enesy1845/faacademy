const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
const navLinks = Array.from(primaryNav.querySelectorAll('a[href^="#"]'));
const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
const loadMoreBtn = document.getElementById('loadMoreBtn');
const lightbox = document.getElementById('lightbox');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const backToTop = document.getElementById('backToTop');
const detailLinks = Array.from(document.querySelectorAll('[data-detail-target]'));
const sectionIds = ['programs', 'gallery', 'parents', 'about', 'contact'];

let currentFilter = 'all';
let visibleCount = 6;
let modalOpener = null;

const applyGalleryVisibility = () => {
  const filteredItems = galleryItems.filter((item) => currentFilter === 'all' || item.dataset.category === currentFilter);

  galleryItems.forEach((item) => {
    const include = filteredItems.includes(item);
    item.classList.toggle('is-filtered', !include);
    item.classList.remove('is-hidden');
  });

  filteredItems.forEach((item, index) => {
    item.classList.toggle('is-hidden', index >= visibleCount);
  });

  loadMoreBtn.hidden = filteredItems.length <= visibleCount;
};

const closeMobileNav = () => {
  primaryNav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
};

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  primaryNav.classList.toggle('open', !expanded);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileNav();
  });
});

detailLinks.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.detailTarget);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      setTimeout(() => target.removeAttribute('tabindex'), 800);
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        const isMatch = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('is-active', isMatch);
      });
    });
  },
  { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
);

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) observer.observe(section);
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');
    currentFilter = button.dataset.filter;
    visibleCount = 6;
    applyGalleryVisibility();
  });
});

loadMoreBtn.addEventListener('click', () => {
  visibleCount += 3;
  applyGalleryVisibility();
});

const openModal = (item) => {
  const image = item.querySelector('img');
  if (!image) return;
  modalOpener = item;
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  modalClose.focus();
};

const closeModal = () => {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  modalImage.src = '';
  modalImage.alt = '';
  if (modalOpener) modalOpener.focus();
};

galleryItems.forEach((item) => {
  item.addEventListener('click', () => openModal(item));
});

modalClose.addEventListener('click', closeModal);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
    closeModal();
  }
});

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('year').textContent = new Date().getFullYear();

applyGalleryVisibility();
