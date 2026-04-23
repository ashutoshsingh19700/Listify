// ═══════════════════════════════════════════════
//  LISTIFY — App Logic
// ═══════════════════════════════════════════════

// ─── DATA ───
const PLACES = [
  { id:1, name:"The Brew Lab", category:"Cafe", location:"Downtown", rating:4.8, reviews:324, vibe:"Chill", vibes:["chill","work"], img:"images/place-cafe.png", tags:["WiFi","Specialty Coffee","Quiet"], price:"$$" },
  { id:2, name:"Iron Temple", category:"Gym", location:"Midtown", rating:4.9, reviews:512, vibe:"Energetic", vibes:["fitness"], img:"images/place-gym.png", tags:["24/7","Personal Training","Sauna"], price:"$$$" },
  { id:3, name:"Saffron & Sage", category:"Restaurant", location:"Old Quarter", rating:4.7, reviews:287, vibe:"Luxury", vibes:["date","luxury"], img:"images/place-restaurant.png", tags:["Fine Dining","Cocktails","Romantic"], price:"$$$$" },
  { id:4, name:"Glow Studio", category:"Salon", location:"Uptown", rating:4.6, reviews:198, vibe:"Relaxing", vibes:["luxury"], img:"images/place-salon.png", tags:["Spa","Hair","Nails"], price:"$$$" },
  { id:5, name:"Chapter One", category:"Bookstore", location:"Arts District", rating:4.9, reviews:156, vibe:"Cozy", vibes:["chill","work"], img:"images/place-bookstore.png", tags:["Reading Nook","Events","Coffee Corner"], price:"$" },
  { id:6, name:"Neon Lounge", category:"Bar", location:"Nightlife Strip", rating:4.5, reviews:421, vibe:"Vibrant", vibes:["nightlife","date"], img:"images/place-bar.png", tags:["Craft Cocktails","Live DJ","Rooftop"], price:"$$$" },
  { id:7, name:"Sunrise Bistro", category:"Restaurant", location:"Riverside", rating:4.8, reviews:363, vibe:"Family", vibes:["family","budget"], img:"images/place-restaurant.png", tags:["Brunch","Outdoor Seating","Kid-Friendly"], price:"$$" },
  { id:8, name:"ZenFit Yoga", category:"Gym", location:"Green Park", rating:4.7, reviews:189, vibe:"Peaceful", vibes:["fitness","chill"], img:"images/place-gym.png", tags:["Yoga","Meditation","Wellness"], price:"$$" },
  { id:9, name:"The Daily Grind", category:"Cafe", location:"University Area", rating:4.4, reviews:278, vibe:"Budget Friendly", vibes:["budget","work"], img:"images/place-cafe.png", tags:["Study Spot","Cheap Eats","Open Late"], price:"$" },
  { id:10, name:"Velvet Room", category:"Bar", location:"Warehouse District", rating:4.6, reviews:334, vibe:"Date Spot", vibes:["date","nightlife","luxury"], img:"images/place-bar.png", tags:["Wine Bar","Intimate","Jazz"], price:"$$$$" },
  { id:11, name:"Fresh Cuts", category:"Salon", location:"Main Street", rating:4.3, reviews:145, vibe:"Trendy", vibes:["budget"], img:"images/place-salon.png", tags:["Barber","Walk-In","Affordable"], price:"$" },
  { id:12, name:"Page Turner", category:"Bookstore", location:"College Town", rating:4.8, reviews:92, vibe:"Work-Friendly", vibes:["work","chill"], img:"images/place-bookstore.png", tags:["Coworking","Rare Books","Workshops"], price:"$" },
];

const REVIEWS = [
  { author:"Sarah M.", initial:"S", place:"The Brew Lab", stars:5, text:"Best specialty coffee in town. The pour-over is incredible and the atmosphere is perfect for deep work sessions. Can't recommend enough!", helpful:true, reactions:{like:42,fire:18,heart:27} },
  { author:"James K.", initial:"J", place:"Iron Temple", stars:5, text:"Finally a gym that respects your time. Clean equipment, no waiting, and the trainers actually know their stuff. Worth every penny.", helpful:false, reactions:{like:35,fire:24,heart:12} },
  { author:"Priya R.", initial:"P", place:"Saffron & Sage", stars:4, text:"The tasting menu was a journey. Each dish told a story. Perfect for anniversaries or when you want to feel special. Book ahead!", helpful:true, reactions:{like:28,fire:31,heart:45} },
  { author:"Alex W.", initial:"A", place:"Chapter One", stars:5, text:"A bookstore that feels like home. Found three books I've been searching for and stayed for the poetry reading. Magical place.", helpful:false, reactions:{like:22,fire:8,heart:33} },
  { author:"Nina L.", initial:"N", place:"Neon Lounge", stars:4, text:"The rooftop cocktails at sunset are unmatched. Great music, great crowd. Gets busy after 10pm so arrive early for the best seats.", helpful:true, reactions:{like:38,fire:42,heart:19} },
  { author:"David C.", initial:"D", place:"Sunrise Bistro", stars:5, text:"Sunday brunch with the family is our new tradition. The kids love it, the pancakes are fluffy, and the riverside view is stunning.", helpful:false, reactions:{like:31,fire:15,heart:28} },
];

const LEADERS = [
  { name:"Maya Chen", points:2840, reviews:47, badge:"Explorer", initial:"M" },
  { name:"Raj Patel", points:2315, reviews:38, badge:"Reviewer", initial:"R" },
  { name:"Sophie Lee", points:1920, reviews:31, badge:"Explorer", initial:"S" },
  { name:"Tom Rivera", points:1650, reviews:24, badge:"Newcomer", initial:"T" },
  { name:"Aisha Khan", points:1420, reviews:19, badge:"Reviewer", initial:"A" },
];

const BADGES = [
  { icon:"🔍", name:"Explorer", desc:"Visit 10+ places" },
  { icon:"✍️", name:"Reviewer", desc:"Write 5+ reviews" },
  { icon:"⭐", name:"Tastemaker", desc:"Get 50+ helpful votes" },
  { icon:"🔥", name:"Trendsetter", desc:"First to review 3 new spots" },
  { icon:"💎", name:"Gem Finder", desc:"Discover 5 hidden gems" },
  { icon:"👑", name:"VIP", desc:"Top explorer for 4 weeks" },
];

const MAP_PINS = [
  { x:15, y:30 }, { x:35, y:20 }, { x:55, y:45 }, { x:72, y:25 },
  { x:25, y:60 }, { x:80, y:55 }, { x:45, y:70 }, { x:60, y:15 },
];

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  lastScroll = window.scrollY;
});

// ─── HERO SLIDESHOW ───
const heroImages = document.querySelectorAll('.hero-bg img');
let currentHero = 0;
setInterval(() => {
  heroImages[currentHero].classList.remove('active');
  currentHero = (currentHero + 1) % heroImages.length;
  heroImages[currentHero].classList.add('active');
}, 5000);

// ─── SEARCH SUGGESTIONS ───
const searchWhat = document.getElementById('searchWhat');
const suggestionsBox = document.getElementById('suggestionsWhat');
const allSuggestions = [
  "Best Cafes Near You","Top Rated Restaurants","Gyms with Best Reviews",
  "Cozy Bookstores","Date Night Spots","Late Night Eats","Rooftop Bars",
  "Work-Friendly Cafes","Budget Friendly Spots","Luxury Dining"
];

searchWhat.addEventListener('focus', () => suggestionsBox.classList.add('active'));
searchWhat.addEventListener('input', () => {
  const val = searchWhat.value.toLowerCase();
  const filtered = val ? allSuggestions.filter(s => s.toLowerCase().includes(val)) : allSuggestions.slice(0,5);
  suggestionsBox.innerHTML = filtered.map(s =>
    `<div class="suggestion-item" data-value="${s}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
      ${s}
    </div>`
  ).join('');
  suggestionsBox.classList.toggle('active', filtered.length > 0);
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-field')) suggestionsBox.classList.remove('active');
});
suggestionsBox.addEventListener('click', (e) => {
  const item = e.target.closest('.suggestion-item');
  if (item) { searchWhat.value = item.dataset.value; suggestionsBox.classList.remove('active'); }
});

// ─── RENDER PLACE CARD ───
function renderPlaceCard(place) {
  return `
    <div class="place-card" data-vibes="${place.vibes.join(',')}" data-id="${place.id}">
      <div class="place-card-img">
        <img src="${place.img}" alt="${place.name}" loading="lazy">
        <div class="place-card-rating">★ ${place.rating}</div>
        <div class="place-card-vibe">${place.vibe}</div>
      </div>
      <div class="place-card-body">
        <h3 class="place-card-name">${place.name}</h3>
        <div class="place-card-meta">
          <span>${place.category}</span> · <span>${place.location}</span> · <span>${place.price}</span>
        </div>
        <div class="place-card-tags">
          ${place.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

// ─── POPULATE FEEDS ───
function populateFeeds() {
  document.getElementById('trendingFeed').innerHTML = shuffle([...PLACES]).slice(0,8).map(renderPlaceCard).join('');
  document.getElementById('gemsFeed').innerHTML = shuffle([...PLACES]).slice(0,8).map(renderPlaceCard).join('');
  document.getElementById('topRatedFeed').innerHTML = [...PLACES].sort((a,b) => b.rating - a.rating).slice(0,8).map(renderPlaceCard).join('');
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ─── TODAY'S PICKS ───
function populatePicks() {
  const reasons = ["Because you love coffee shops","Similar to places you've visited","Popular in your area","Matches your vibe","Trending this week","New in your neighborhood"];
  document.getElementById('picksList').innerHTML = shuffle([...PLACES]).slice(0,6).map((p, i) => `
    <div class="pick-card">
      <div class="pick-card-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="pick-card-info">
        <h4>${p.name}</h4>
        <div class="meta">${p.category} · ${p.location} · ★ ${p.rating}</div>
        <div class="reason">✨ ${reasons[i % reasons.length]}</div>
      </div>
    </div>
  `).join('');
}

// ─── REVIEWS ───
function populateReviews() {
  document.getElementById('reviewsList').innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar">${r.initial}</div>
        <div class="review-author-info">
          <h4>${r.author}</h4>
          <span>reviewed ${r.place}</span>
        </div>
      </div>
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      ${r.helpful ? '<div class="review-helpful">✦ Most Helpful Review</div>' : ''}
      <p class="review-text">"${r.text}"</p>
      <div class="review-reactions">
        <button class="reaction-btn" onclick="react(this)"><span>👍</span><span class="count">${r.reactions.like}</span></button>
        <button class="reaction-btn" onclick="react(this)"><span>🔥</span><span class="count">${r.reactions.fire}</span></button>
        <button class="reaction-btn" onclick="react(this)"><span>❤️</span><span class="count">${r.reactions.heart}</span></button>
      </div>
    </div>
  `).join('');
}

function react(btn) {
  btn.classList.toggle('active');
  const countEl = btn.querySelector('.count');
  let count = parseInt(countEl.textContent);
  countEl.textContent = btn.classList.contains('active') ? count + 1 : count - 1;
}

// ─── LEADERBOARD ───
function populateLeaderboard() {
  const ranks = ['gold','silver','bronze','',''];
  document.getElementById('leaderboard').innerHTML = LEADERS.map((l, i) => `
    <div class="leader-row">
      <div class="leader-rank ${ranks[i]}">${i + 1}</div>
      <div class="leader-avatar">${l.initial}</div>
      <div class="leader-info">
        <h4>${l.name}</h4>
        <span>${l.reviews} reviews · ${l.badge}</span>
      </div>
      <div class="leader-points">${l.points.toLocaleString()} pts</div>
    </div>
  `).join('');
}

// ─── BADGES ───
function populateBadges() {
  document.getElementById('badgesRow').innerHTML = BADGES.map(b => `
    <div class="badge-card">
      <div class="badge-icon">${b.icon}</div>
      <h4>${b.name}</h4>
      <p>${b.desc}</p>
    </div>
  `).join('');
}

// ─── MAP PINS ───
function populateMap() {
  document.getElementById('mapPins').innerHTML = MAP_PINS.map((pin, i) => `
    <div class="map-pin" style="left:${pin.x}%;top:${pin.y}%;animation-delay:${i * 0.1}s">
      <span>${i + 1}</span>
    </div>
  `).join('');
}

// ─── MAP TOGGLE ───
document.querySelectorAll('.map-toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.map-toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ─── VIBE FILTERS ───
document.querySelectorAll('.vibe-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.vibe-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const vibe = chip.dataset.vibe;
    document.querySelectorAll('.place-card').forEach(card => {
      if (vibe === 'all') { card.style.display = ''; return; }
      const cardVibes = card.dataset.vibes.split(',');
      card.style.display = cardVibes.includes(vibe) ? '' : 'none';
    });
  });
});

// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ─── SWIPE DISCOVERY ───
const swipeOverlay = document.getElementById('swipeOverlay');
const swipeStack = document.getElementById('swipeStack');
let swipePlaces = [];
let swipeIndex = 0;

document.getElementById('fabSwipe').addEventListener('click', openSwipe);
document.getElementById('swipeClose').addEventListener('click', () => swipeOverlay.classList.remove('active'));
document.getElementById('swipePass').addEventListener('click', () => doSwipe('left'));
document.getElementById('swipeLike').addEventListener('click', () => doSwipe('right'));
document.getElementById('swipeSave').addEventListener('click', () => doSwipe('right'));

function openSwipe() {
  swipePlaces = shuffle([...PLACES]);
  swipeIndex = 0;
  swipeOverlay.classList.add('active');
  renderSwipeCards();
}

function renderSwipeCards() {
  swipeStack.innerHTML = '';
  const visible = swipePlaces.slice(swipeIndex, swipeIndex + 3).reverse();
  visible.forEach((place, i) => {
    const card = document.createElement('div');
    card.className = 'swipe-card';
    card.style.transform = `scale(${1 - (visible.length - 1 - i) * 0.04}) translateY(${(visible.length - 1 - i) * 8}px)`;
    card.style.zIndex = i + 1;
    card.innerHTML = `
      <div class="swipe-indicator nope">NOPE</div>
      <div class="swipe-indicator like">LIKE</div>
      <div class="swipe-card-image"><img src="${place.img}" alt="${place.name}"></div>
      <div class="swipe-card-content">
        <h3>${place.name}</h3>
        <div class="meta">${place.category} · ${place.location} · ★ ${place.rating}</div>
        <div class="vibes">${place.vibes.map(v => `<span>${v}</span>`).join('')}</div>
      </div>
    `;
    swipeStack.appendChild(card);

    // Drag for top card
    if (i === visible.length - 1) initDrag(card);
  });
}

function initDrag(card) {
  let startX = 0, currentX = 0, isDragging = false;

  const onStart = (e) => {
    isDragging = true;
    startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    card.classList.add('swiping');
  };
  const onMove = (e) => {
    if (!isDragging) return;
    const x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    currentX = x - startX;
    card.style.transform = `translateX(${currentX}px) rotate(${currentX * 0.05}deg)`;
    const likeInd = card.querySelector('.swipe-indicator.like');
    const nopeInd = card.querySelector('.swipe-indicator.nope');
    likeInd.style.opacity = Math.max(0, currentX / 100);
    nopeInd.style.opacity = Math.max(0, -currentX / 100);
  };
  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove('swiping');
    if (Math.abs(currentX) > 100) {
      doSwipe(currentX > 0 ? 'right' : 'left');
    } else {
      card.style.transform = '';
      card.querySelector('.swipe-indicator.like').style.opacity = 0;
      card.querySelector('.swipe-indicator.nope').style.opacity = 0;
    }
    currentX = 0;
  };

  card.addEventListener('mousedown', onStart);
  card.addEventListener('touchstart', onStart, {passive:true});
  window.addEventListener('mousemove', onMove);
  window.addEventListener('touchmove', onMove, {passive:true});
  window.addEventListener('mouseup', onEnd);
  window.addEventListener('touchend', onEnd);
}

function doSwipe(direction) {
  const topCard = swipeStack.lastElementChild;
  if (!topCard) return;
  const dist = direction === 'right' ? 500 : -500;
  topCard.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
  topCard.style.transform = `translateX(${dist}px) rotate(${dist * 0.05}deg)`;
  topCard.style.opacity = '0';
  setTimeout(() => {
    swipeIndex++;
    if (swipeIndex >= swipePlaces.length) { swipeIndex = 0; swipePlaces = shuffle([...PLACES]); }
    renderSwipeCards();
  }, 400);
}

// ─── INIT ───
populateFeeds();
populatePicks();
populateReviews();
populateLeaderboard();
populateBadges();
populateMap();
