/* ============================================================
   AETHER SCENTS — Shared JavaScript
   ============================================================ */

/* ── Product Data ── */
const PRODUCTS = [
  {
    id: 1,
    name: "Noir Absolu",
    notes: "Oud · Vetiver · Amber",
    price: 185,
    description: "A deeply enigmatic composition anchored by rare oud wood and earthy vetiver, warmed by golden amber. Noir Absolu is a statement of quiet power — for those who need not speak to be noticed.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
    badge: null
  },
  {
    id: 2,
    name: "Cèdre Blanc",
    notes: "Cedarwood · Musk · Iris",
    price: 149,
    description: "The stillness of a cedar forest after rain. Smooth white musk and powdery iris soften the earthy foundation, creating an effortlessly understated elegance.",
    image: "https://m.media-amazon.com/images/I/71OUGcfs6QL.jpg",
    badge: "new"
  },
  {
    id: 3,
    name: "Lumière Dorée",
    notes: "Bergamot · Jasmine · Sandalwood",
    price: 165,
    description: "Sunlight filtered through warm skin. Sparkling bergamot opens over a heart of white jasmine, settling into creamy sandalwood that lingers like a memory.",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRI9lD0ztxtAyMhceFQ4e-9769dIAKz3ToMp0h9PdcNxRQDABkZvIpM6cYDqsimRtX4mhhCe47dQK_7-zgvS16ELaSyMqdplcK71sFSl8elwCvbX8qZnvF2Nw",
    badge: null
  },
  {
    id: 4,
    name: "Sel Gris",
    notes: "Sea Salt · Driftwood · Oakmoss",
    price: 129,
    description: "The raw poetry of coastal air — briny sea salt mingled with sun-bleached driftwood and ancient oakmoss. Sel Gris is freedom, distilled.",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQdq-LbEFTEh53vthPwNcRpWn2lkWLlT50Uw5eBTSjEIxggPiHyTZBA1KBFJddDR_v6AbValPWr85EMjrN9w6nr_iR3WOKliDzlbfKsklRMYJkyOXW2-L8h7w",
    badge: null
  },
  {
    id: 5,
    name: "Encens Sacré",
    notes: "Frankincense · Rose · Patchouli",
    price: 199,
    description: "Sacred smoke, eternal rose, and dark patchouli intertwine in this meditative ritual scent. Encens Sacré is ceremony — worn and deeply felt.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&q=80",
    badge: "bestseller"
  },
  {
    id: 6,
    name: "Vétiver Moderne",
    notes: "Vetiver · Lime · Black Pepper",
    price: 139,
    description: "Vetiver reimagined for the present. A sharp burst of lime and crackling black pepper introduces an earthy, smoky base that evolves through the hours.",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80",
    badge: null
  },
  {
    id: 7,
    name: "Peau de Soie",
    notes: "Silk Accord · Vanilla · Musk",
    price: 155,
    description: "Like the softest fabric against warm skin. Peau de Soie is intimate, comforting, and impossibly smooth — a second skin rendered in scent.",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
    badge: "new"
  },
  {
    id: 8,
    name: "Tabac Obscur",
    notes: "Tobacco · Leather · Dark Rum",
    price: 175,
    description: "A dimly lit study, aged leather-bound books, and a glass of dark rum. Tabac Obscur is richly masculine yet entirely ungendered — a seduction in three acts.",
    image: "https://m.media-amazon.com/images/I/71dEJ6oVs9L.jpg",
    badge: null
  },
  {
    id: 9,
    name: "Aqua Minerale",
    notes: "Mineral · Green Tea · Bamboo",
    price: 99,
    description: "Clarity in liquid form. Crystalline mineral accords meet the freshness of green tea and clean bamboo in a scent built for those who value precision.",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSh1pK3nmyfYwMHmX84bHJ-amAnQvqdjyuhDrW_bO25mXgkmX8pBbEea2XpDjrl4WbPHelRqTi0hlBnUET4572Dt0lfDtXR",
    badge: null
  },
  {
    id: 10,
    name: "Santal Mystère",
    notes: "Sandalwood · Cardamom · Ylang",
    price: 169,
    description: "Sandalwood from Mysore, warm cardamom, and an exotic whisper of ylang-ylang. Santal Mystère is the scent of discovery — of places not yet visited.",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQz6uG1Rn1SPHmjwY_ZYulvhXgO7uH9on_eesvbdGs-z-S3pHfr-56usFHLzo_BO8BOwRfWswPktadKrNTuwonRrGSDqf7r",
    badge: null
  },
  {
    id: 11,
    name: "Brume Froide",
    notes: "Violet · Cashmere · White Cedar",
    price: 145,
    description: "A pale morning fog over still water. Violet and cashmere weave together through crisp white cedar in this ethereal, quiet composition.",
    image: "https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?w=600&q=80",
    badge: "new"
  },
  {
    id: 12,
    name: "Résine Noire",
    notes: "Black Resin · Myrrh · Tonka",
    price: 189,
    description: "Ancient resins and sacred myrrh coalesce with sweet tonka bean in this deeply spiritual fragrance. Résine Noire rewards patience — its full beauty unfolds over hours.",
    image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=600&q=80",
    badge: null
  },
  {
    id: 13,
    name: "Herbe Verte",
    notes: "Galbanum · Neroli · Vetiver",
    price: 119,
    description: "Dewy greens, the brilliance of neroli blossom, and grounding vetiver — Herbe Verte captures that precise moment between early morning and full daylight.",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQvclqt7gQhTGDOiqrXnoVC8eK6T38TsJ92Q2P582bDPc0zWSt8V4-JtgUNsW1draL54O-lQHGxuBei2P83yZbkFmcgsKoFRNbbVcNNRJ9jCEP196galE2N",
    badge: null
  },
  {
    id: 14,
    name: "Zeste Noir",
    notes: "Black Citrus · Labdanum · Smoke",
    price: 159,
    description: "Citrus with a shadow. Luminous black citrus is immediately grounded by labdanum and a thread of smoke, creating a tension that is entirely addictive.",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRv2QbQkNEwOJZFQSTC-Mk2T-fQUoZwYT3ivp0_I0iXIjXBiseX_dHbpKyx2t7NxVJ3KgoHIP9HMhTeciYDA9VzY3dzUdN_TQwFQ8_YfYu2S_ZGUe5nVLOlexo",
    badge: "new"
  },
  {
    id: 15,
    name: "Mousse d'Or",
    notes: "Oakmoss · Amber · Bergamot",
    price: 135,
    description: "A classic structure reimagined. Golden amber and vivid bergamot dance over a mossy, earthy base — timeless, yet unmistakably modern.",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTWl8A1ttaXNMxey2A2K9fBQcqcYhJrG7vbekOVViRLjM4AMK--nCfwALSvr3FrdtsFqYMJsOPelZriU-C3_Tm23RC8n4426CCSxAHJe2RCm8apcD15cLRx",
    badge: null
  },
  {
    id: 16,
    name: "Nuit Blanche",
    notes: "Jasmine · Musks · Vetiver",
    price: 179,
    description: "The scent of a sleepless night: intoxicating white jasmine slowly yielding to warm skin musks and a faint memory of vetiver at dawn. Nuit Blanche is restless beauty.",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKwODeXpdMFpA2rtnVfmYC7cVsp4vDO4zcbc09x1vtV3ziC3mK1bw9HbrwlnZ0gdAGoUuNlDEAO6Yn5KxZyugF2_KKAdAzh5VMpvDHppOFjgwYAWSkmTDB8Q",
    badge: "bestseller"
  }
];

const NEW_ARRIVALS_IDS  = [2, 7, 11, 14];
const FEATURED_IDS      = [1, 2, 5, 8];

/* ── Utility ── */
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function formatPrice(p) { return `$${p.toFixed(2)}`; }

/* ── Active Nav Link ── */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  $$('#site-header .nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === page);
  });
}

/* ── Sticky Header ── */
function initHeader() {
  const header = $('#site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Hamburger ── */
function initHamburger() {
  const btn = $('#hamburger-btn');
  const nav = $('#mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}

/* ── Scroll Animations ── */
function initScrollFade() {
  const els = $$('.fade-in');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── Hero Parallax ── */
function initHero() {
  const hero = $('.hero');
  if (!hero) return;
  setTimeout(() => hero.classList.add('loaded'), 100);
  const bg = $('.hero-bg');
  if (!bg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    bg.style.transform = `scale(1) translateY(${y * 0.25}px)`;
  }, { passive: true });
}

/* ── Product Card Builder ── */
function buildProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card fade-in';
  card.dataset.id = product.id;
  const badgeHtml = product.badge
    ? `<span class="badge-new" style="position:absolute;top:14px;left:14px;z-index:5;padding:4px 12px;background:var(--gold);color:var(--black);font-size:9px;font-weight:500;letter-spacing:0.25em;text-transform:uppercase;">${product.badge.toUpperCase()}</span>`
    : '';
  card.innerHTML = `
    <div class="product-img-wrap">
      ${badgeHtml}
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-overlay"><span>View Details</span></div>
    </div>
    <div class="product-info">
      <div class="product-name">${product.name}</div>
      <div class="product-notes">${product.notes}</div>
      <div class="product-price">${formatPrice(product.price)}</div>
    </div>`;
  card.addEventListener('click', () => openProductModal(product));
  return card;
}

/* ── Render Products ── */
function renderProducts(containerSel, ids = null) {
  const container = $(containerSel);
  if (!container) return;
  const list = ids ? PRODUCTS.filter(p => ids.includes(p.id)) : PRODUCTS;
  list.forEach(p => container.appendChild(buildProductCard(p)));
  initScrollFade();
}

/* ── Filter Tags ── */
function initFilterTags() {
  const tags = $$('.filter-tag');
  const grid = $('.shop-grid') || $('.new-arrivals-grid');
  if (!tags.length || !grid) return;

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      const filter = tag.dataset.filter;
      const cards = $$('.product-card', grid);
      cards.forEach(card => {
        const id = parseInt(card.dataset.id);
        const product = PRODUCTS.find(p => p.id === id);
        if (!product) return;
        if (filter === 'all') {
          card.style.display = '';
        } else if (filter === 'new') {
          card.style.display = NEW_ARRIVALS_IDS.includes(product.id) ? '' : 'none';
        } else if (filter === 'bestseller') {
          card.style.display = product.badge === 'bestseller' ? '' : 'none';
        } else {
          const noteMatch = product.notes.toLowerCase().includes(filter);
          card.style.display = noteMatch ? '' : 'none';
        }
      });
    });
  });
}

/* ── Size Selector ── */
function initSizeSelector() {
  $$('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* ── Product Modal ── */
let currentProduct = null;

function openProductModal(product) {
  currentProduct = product;
  const overlay = $('#product-modal');
  if (!overlay) return;
  $('#modal-img', overlay).src = product.image;
  $('#modal-img', overlay).alt = product.name;
  $('#modal-title', overlay).textContent = product.name;
  $('#modal-notes', overlay).textContent = product.notes;
  $('#modal-description', overlay).textContent = product.description;
  $('#modal-price', overlay).textContent = formatPrice(product.price);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const overlay = $('#product-modal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initProductModal() {
  const overlay = $('#product-modal');
  if (!overlay) return;
  const closeBtn = $('#modal-close-btn', overlay);
  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeProductModal(); });

  const orderBtn = $('#modal-order-btn', overlay);
  if (orderBtn) orderBtn.addEventListener('click', () => { closeProductModal(); openOrderModal(); });
}

/* ── Order Modal ── */
function openOrderModal() {
  const overlay = $('#order-modal');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
  const overlay = $('#order-modal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initOrderModal() {
  const overlay = $('#order-modal');
  if (!overlay) return;
  const closeBtn = $('#order-close-btn', overlay);
  if (closeBtn) closeBtn.addEventListener('click', closeOrderModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeOrderModal(); });
}

/* ── Keyboard ESC ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeOrderModal();
    const mobileNav = $('#mobile-nav');
    if (mobileNav) mobileNav.classList.remove('open');
  }
});

/* ── Contact Form ── */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Message received — we\'ll be in touch shortly.');
    form.reset();
  });
}

/* ── Toast ── */
function showToast(msg) {
  let toast = $('#global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initHeader();
  initHamburger();
  initScrollFade();
  initHero();
  initProductModal();
  initOrderModal();
  initContactForm();
  initFilterTags();
  initSizeSelector();

  /* Page-specific render */
  renderProducts('#featured-grid', FEATURED_IDS);
  renderProducts('#shop-grid');
  renderProducts('#new-arrivals-grid', NEW_ARRIVALS_IDS);
});
