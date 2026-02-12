// ===========================
// INITIALIZE AOS & LUCIDE
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });

  lucide.createIcons();

  initNavbar();
  initMobileMenu();
  initModal();
  initNutritionDropdown();
  initVideoCarousel();
  initGameTabs();
  initQuiz();
  initCrossword();
});

// ===========================
// BERRY DATA
// ===========================
const berryData = {
  strawberry: {
    name: 'Strawberry',
    latin: 'Fragaria × ananassa',
    badge: 'Populer',
    badgeColor: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&h=500&fit=crop',
    description: 'Strawberry adalah salah satu buah beri paling populer di dunia. Buah ini memiliki rasa manis asam yang segar dan aroma yang khas. Strawberry kaya akan vitamin C, mangan, folat, dan kalium. Buah ini juga mengandung antioksidan seperti anthocyanin dan asam ellagic yang bermanfaat untuk kesehatan jantung dan mengontrol kadar gula darah.',
    nutrition: [
      { value: '32', label: 'Kalori' },
      { value: '58.8mg', label: 'Vitamin C' },
      { value: '2g', label: 'Serat' },
      { value: '4.9g', label: 'Gula' },
    ],
    facts: [
      'Strawberry adalah satu-satunya buah yang bijinya ada di luar permukaan kulit.',
      'Rata-rata satu buah strawberry memiliki sekitar 200 biji.',
      'Strawberry termasuk keluarga mawar (Rosaceae) dan secara botani bukan buah beri sejati.',
      'California memproduksi sekitar 80% dari seluruh strawberry di Amerika Serikat.',
    ],
  },
  blueberry: {
    name: 'Blueberry',
    latin: 'Vaccinium corymbosum',
    badge: 'Superfood',
    badgeColor: 'bg-indigo-500',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&h=500&fit=crop',
    description: 'Blueberry sering disebut sebagai "raja antioksidan" karena memiliki kandungan antioksidan tertinggi di antara semua buah dan sayuran. Buah mungil berwarna biru-ungu ini kaya akan anthocyanin yang bermanfaat untuk kesehatan otak, jantung, dan membantu melawan penuaan sel. Blueberry juga rendah kalori namun tinggi nutrisi.',
    nutrition: [
      { value: '57', label: 'Kalori' },
      { value: '9.7mg', label: 'Vitamin C' },
      { value: '2.4g', label: 'Serat' },
      { value: '14.5g', label: 'Karbohidrat' },
    ],
    facts: [
      'Blueberry adalah salah satu dari sedikit buah alami berwarna biru di alam.',
      'Penduduk asli Amerika menggunakan blueberry sebagai obat tradisional selama berabad-abad.',
      'Antioksidan dalam blueberry terbukti meningkatkan fungsi memori dan kognitif otak.',
      'Blueberry termasuk buah beri sejati secara botani, berbeda dengan strawberry.',
    ],
  },
  raspberry: {
    name: 'Raspberry',
    latin: 'Rubus idaeus',
    badge: 'Serat Tinggi',
    badgeColor: 'bg-rose-500',
    image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=800&h=500&fit=crop',
    description: 'Raspberry dikenal karena kandungan seratnya yang sangat tinggi di antara buah-buahan. Buah ini memiliki rasa asam manis yang segar dan tekstur lembut. Raspberry mengandung vitamin C, mangan, dan antioksidan kuat seperti asam ellagic dan quercetin. Buah ini sangat baik untuk pencernaan dan manajemen berat badan karena rendah kalori namun mengenyangkan.',
    nutrition: [
      { value: '52', label: 'Kalori' },
      { value: '26.2mg', label: 'Vitamin C' },
      { value: '6.5g', label: 'Serat' },
      { value: '0.65mg', label: 'Mangan' },
    ],
    facts: [
      'Raspberry memiliki kandungan serat tertinggi di antara semua buah beri populer.',
      'Satu buah raspberry sebenarnya terdiri dari 100 buah kecil (drupelet) yang menyatu.',
      'Ada lebih dari 200 spesies raspberry yang tersebar di seluruh dunia.',
      'Raspberry merah, hitam, ungu, dan kuning semuanya memiliki profil nutrisi yang berbeda.',
    ],
  },
  blackberry: {
    name: 'Blackberry',
    latin: 'Rubus fruticosus',
    badge: 'Vitamin K',
    badgeColor: 'bg-violet-500',
    image: 'img/blackberry.png',
    description: 'Blackberry adalah buah beri berwarna hitam keunguan yang kaya akan vitamin K dan vitamin C. Buah ini memiliki peran penting dalam menjaga kesehatan tulang dan membantu proses pembekuan darah. Blackberry juga mengandung mangan dan antioksidan yang kuat untuk melindungi sel dari kerusakan oksidatif dan mendukung fungsi imun tubuh.',
    nutrition: [
      { value: '43', label: 'Kalori' },
      { value: '21mg', label: 'Vitamin C' },
      { value: '19.8µg', label: 'Vitamin K' },
      { value: '5.3g', label: 'Serat' },
    ],
    facts: [
      'Blackberry merupakan sumber vitamin K terkaya di antara semua buah beri.',
      'Secara botani, blackberry bukan buah beri sejati, melainkan buah agregat seperti raspberry.',
      'Blackberry liar telah dikonsumsi manusia sejak ribuan tahun lalu di era Neolitikum.',
      'Daun blackberry juga bisa diseduh menjadi teh herbal yang bermanfaat untuk kesehatan.',
    ],
  },
  cranberry: {
    name: 'Cranberry',
    latin: 'Vaccinium macrocarpon',
    badge: 'Saluran Kemih',
    badgeColor: 'bg-orange-500',
    image: 'img/cranberry.png',
    description: 'Cranberry terkenal karena manfaatnya dalam menjaga kesehatan saluran kemih. Buah ini mengandung proanthocyanidin (PAC) yang mencegah bakteri menempel pada dinding saluran kemih. Cranberry juga kaya akan vitamin C, vitamin E, dan antioksidan. Rasa asamnya yang khas menjadikan cranberry sering diolah menjadi jus, saus, dan suplemen kesehatan.',
    nutrition: [
      { value: '46', label: 'Kalori' },
      { value: '14mg', label: 'Vitamin C' },
      { value: '4.6g', label: 'Serat' },
      { value: '4g', label: 'Gula' },
    ],
    facts: [
      'Cranberry adalah salah satu dari hanya tiga buah asli Amerika Utara yang dibudidayakan secara komersial.',
      'Cranberry matang bisa memantul seperti bola karet — ini cara petani menguji kematangannya.',
      'Cranberry dipanen dengan cara menggenangi ladang dengan air, bukan dipetik dari pohon.',
      'Suku asli Amerika sudah menggunakan cranberry sebagai obat dan pewarna kain sejak lama.',
    ],
  },
  acai: {
    name: 'Acai Berry',
    latin: 'Euterpe oleracea',
    badge: 'Anti-Aging',
    badgeColor: 'bg-purple-500',
    image: 'img/accaiberry.png',
    description: 'Acai berry berasal dari hutan hujan Amazon dan telah menjadi tren superfood global. Buah kecil berwarna ungu gelap ini mengandung antioksidan yang sangat tinggi, bahkan lebih tinggi dari blueberry. Acai kaya akan asam lemak omega-3, omega-6, dan omega-9 yang baik untuk kesehatan jantung dan kulit. Buah ini juga sering dikaitkan dengan efek anti-penuaan.',
    nutrition: [
      { value: '70', label: 'Kalori' },
      { value: '5g', label: 'Lemak Sehat' },
      { value: '3.5g', label: 'Serat' },
      { value: '2g', label: 'Gula' },
    ],
    facts: [
      'Acai berry hanya bertahan 24 jam setelah dipetik, sehingga biasanya dijual beku atau bubuk.',
      'Penduduk asli Brazil telah mengonsumsi acai selama ratusan tahun sebagai makanan pokok.',
      'Acai bowl menjadi tren makanan sehat global yang dimulai dari pantai-pantai Brazil.',
      'Pohon acai juga menghasilkan heart of palm (palmito) yang merupakan makanan lezat.',
    ],
  },
};

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
function initNavbar() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===========================
// MOBILE MENU
// ===========================
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = menu.querySelectorAll('.mobile-nav-link');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// ===========================
// MODAL
// ===========================
function initModal() {
  const modal = document.getElementById('berry-modal');
  const closeBtn = document.getElementById('modal-close');
  const cards = document.querySelectorAll('.berry-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const berryKey = card.getAttribute('data-berry');
      const data = berryData[berryKey];
      if (data) openModal(data);
    });
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(data) {
  const modal = document.getElementById('berry-modal');

  document.getElementById('modal-img').src = data.image;
  document.getElementById('modal-img').alt = data.name;
  document.getElementById('modal-title').textContent = data.name;
  document.getElementById('modal-latin').textContent = data.latin;
  document.getElementById('modal-desc').textContent = data.description;

  const badge = document.getElementById('modal-badge');
  badge.textContent = data.badge;
  badge.className = `px-3 py-1 text-xs font-semibold rounded-full text-white ${data.badgeColor}`;

  // Nutrition
  const nutritionGrid = document.getElementById('modal-nutrition');
  nutritionGrid.innerHTML = data.nutrition
    .map(n => `
      <div class="nutrition-item">
        <div class="nutrition-value">${n.value}</div>
        <div class="nutrition-label">${n.label}</div>
      </div>
    `).join('');

  // Facts
  const factsList = document.getElementById('modal-facts');
  factsList.innerHTML = data.facts
    .map(f => `
      <li class="fact-item">
        <svg class="fact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
        <span>${f}</span>
      </li>
    `).join('');

  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    modal.classList.add('active');
  });
}

function closeModal() {
  const modal = document.getElementById('berry-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';

  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

// ===========================
// NUTRITION DROPDOWN
// ===========================
function initNutritionDropdown() {
  const rows = document.querySelectorAll('.nutrisi-row');

  rows.forEach(row => {
    const header = row.querySelector('.nutrisi-header');
    header.addEventListener('click', () => {
      const isOpen = row.classList.contains('open');

      // Close all other rows
      rows.forEach(r => r.classList.remove('open'));

      // Toggle current row
      if (!isOpen) {
        row.classList.add('open');
      }
    });
  });
}

// ===========================
// VIDEO CAROUSEL
// ===========================
function initVideoCarousel() {
  const slides = document.querySelectorAll('.video-slide');
  const dots = document.querySelectorAll('.video-dot');
  const totalSlides = slides.length;
  let currentIndex = 0;

  function goToSlide(index) {
    currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;
    const prevIndex = ((currentIndex - 1) % totalSlides + totalSlides) % totalSlides;
    const nextIndex = (currentIndex + 1) % totalSlides;

    slides.forEach(slide => {
      slide.classList.remove('active', 'prev', 'next');
    });

    slides[currentIndex].classList.add('active');
    slides[prevIndex].classList.add('prev');
    slides[nextIndex].classList.add('next');

    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
      dot.style.background = i === currentIndex ? 'white' : 'rgba(255,255,255,0.2)';
      dot.style.width = i === currentIndex ? '24px' : '10px';
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
  });

  // Click side slides to navigate
  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      if (slide.classList.contains('prev')) goToSlide(currentIndex - 1);
      if (slide.classList.contains('next')) goToSlide(currentIndex + 1);
    });
  });

  // Initialize first slide
  goToSlide(0);
}

// ===========================
// QUIZ
// ===========================
const quizQuestions = [
  {
    question: 'Buah beri manakah yang dijuluki "raja antioksidan"?',
    options: ['Strawberry', 'Blueberry', 'Raspberry', 'Cranberry'],
    correct: 1,
    explanation: 'Blueberry memiliki kandungan antioksidan tertinggi di antara semua buah dan sayuran, sehingga dijuluki "raja antioksidan".',
  },
  {
    question: 'Buah beri apa yang bijinya terletak di luar permukaan kulit?',
    options: ['Blackberry', 'Raspberry', 'Strawberry', 'Acai Berry'],
    correct: 2,
    explanation: 'Strawberry adalah satu-satunya buah yang bijinya ada di luar permukaan kulit, dengan rata-rata 200 biji per buah.',
  },
  {
    question: 'Buah beri mana yang terkenal untuk menjaga kesehatan saluran kemih?',
    options: ['Blueberry', 'Blackberry', 'Cranberry', 'Raspberry'],
    correct: 2,
    explanation: 'Cranberry mengandung proanthocyanidin (PAC) yang mencegah bakteri menempel pada dinding saluran kemih.',
  },
  {
    question: 'Buah beri apa yang memiliki kandungan serat tertinggi?',
    options: ['Cranberry', 'Blueberry', 'Strawberry', 'Raspberry'],
    correct: 3,
    explanation: 'Raspberry memiliki kandungan serat tertinggi di antara semua buah beri populer, yaitu sekitar 6.5g per 100g.',
  },
  {
    question: 'Dari mana asal buah Acai Berry?',
    options: ['Afrika Selatan', 'Asia Tenggara', 'Hutan Amazon, Brazil', 'Australia'],
    correct: 2,
    explanation: 'Acai berry berasal dari hutan hujan Amazon di Brazil dan telah dikonsumsi penduduk asli selama ratusan tahun.',
  },
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function initQuiz() {
  renderQuestion();

  document.getElementById('quiz-next').addEventListener('click', nextQuestion);
  document.getElementById('quiz-restart').addEventListener('click', restartQuiz);
}

function renderQuestion() {
  const q = quizQuestions[currentQuestion];
  const letters = ['A', 'B', 'C', 'D'];

  document.getElementById('quiz-question').textContent = q.question;
  document.getElementById('quiz-current').textContent = currentQuestion + 1;
  document.getElementById('quiz-progress').style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = q.options
    .map((opt, i) => `
      <button class="quiz-option" data-index="${i}">
        <span class="option-letter">${letters[i]}</span>
        <span>${opt}</span>
      </button>
    `).join('');

  // Attach click events
  optionsContainer.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.index)));
  });

  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-next').classList.add('hidden');
  answered = false;
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q = quizQuestions[currentQuestion];
  const isCorrect = index === q.correct;

  if (isCorrect) score++;

  document.getElementById('quiz-score-display').textContent = score;

  // Style options
  const options = document.querySelectorAll('.quiz-option');
  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === q.correct) {
      opt.classList.add('correct');
    } else if (i === index && !isCorrect) {
      opt.classList.add('wrong');
    }
  });

  // Show feedback
  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `
    <div class="quiz-feedback-box ${isCorrect ? 'correct' : 'wrong'}">
      <svg class="w-5 h-5 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${isCorrect
          ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
          : '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
        }
      </svg>
      <div>
        <strong>${isCorrect ? 'Benar!' : 'Kurang Tepat!'}</strong>
        <p class="mt-1 opacity-80">${q.explanation}</p>
      </div>
    </div>
  `;

  // Show next button
  const nextBtn = document.getElementById('quiz-next');
  nextBtn.classList.remove('hidden');
  nextBtn.textContent = currentQuestion < quizQuestions.length - 1
    ? 'Pertanyaan Selanjutnya'
    : 'Lihat Hasil';
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion >= quizQuestions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function showResult() {
  document.getElementById('quiz-container').classList.add('hidden');
  const resultEl = document.getElementById('quiz-result');
  resultEl.classList.remove('hidden');

  document.getElementById('result-score').textContent = score;

  // Result text
  let text = '';
  if (score === 5) text = 'Sempurna! Kamu adalah ahli buah beri sejati!';
  else if (score >= 4) text = 'Hebat! Pengetahuanmu tentang buah beri sangat baik!';
  else if (score >= 3) text = 'Bagus! Kamu cukup mengenal dunia buah beri.';
  else if (score >= 2) text = 'Lumayan! Masih ada yang bisa dipelajari tentang buah beri.';
  else text = 'Jangan menyerah! Coba baca materinya lagi dan ulangi kuisnya.';

  document.getElementById('result-text').textContent = text;

  // Stars
  const starsContainer = document.getElementById('result-stars');
  starsContainer.innerHTML = Array.from({ length: 5 }, (_, i) => `
    <svg class="result-star ${i < score ? 'filled' : 'empty'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${i < score ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
    </svg>
  `).join('');

  // Result icon
  const iconContainer = document.getElementById('result-icon');
  if (score >= 4) {
    iconContainer.innerHTML = `
      <div class="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border border-yellow-500/20 flex items-center justify-center">
        <svg class="w-10 h-10 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
      </div>
    `;
  } else if (score >= 2) {
    iconContainer.innerHTML = `
      <div class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border border-blue-500/20 flex items-center justify-center">
        <svg class="w-10 h-10 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
      </div>
    `;
  } else {
    iconContainer.innerHTML = `
      <div class="w-20 h-20 rounded-full bg-gradient-to-br from-red-400/20 to-rose-500/20 border border-red-500/20 flex items-center justify-center">
        <svg class="w-10 h-10 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
      </div>
    `;
  }

  // Animate score with AOS refresh
  AOS.refresh();
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;

  document.getElementById('quiz-score-display').textContent = '0';
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');

  renderQuestion();
}

// ===========================
// GAME TABS
// ===========================
function initGameTabs() {
  const tabQuiz = document.getElementById('tab-quiz');
  const tabTts = document.getElementById('tab-tts');
  const panelQuiz = document.getElementById('panel-quiz');
  const panelTts = document.getElementById('panel-tts');

  tabQuiz.addEventListener('click', () => {
    tabQuiz.classList.add('active');
    tabTts.classList.remove('active');
    panelQuiz.classList.remove('hidden');
    panelTts.classList.add('hidden');
  });

  tabTts.addEventListener('click', () => {
    tabTts.classList.add('active');
    tabQuiz.classList.remove('active');
    panelTts.classList.remove('hidden');
    panelQuiz.classList.add('hidden');
  });
}

// ===========================
// CROSSWORD (TTS)
// ===========================
function initCrossword() {
  // Grid layout: 10 cols x 9 rows
  // null = black cell, letter = white cell with answer
  const grid = [
    ['S','T','R','A','W','B','E','R','R','Y'],
    [null,null,null,'C',null,'L',null,null,null,null],
    [null,null,null,'A',null,'U',null,null,null,null],
    [null,null,null,'I','S','E','R','A','T',null],
    [null,null,null,null,null,'B',null,null,null,null],
    ['C','R','A','N','B','E','R','R','Y',null],
    [null,null,null,null,null,'R',null,null,null,null],
    [null,null,null,null,null,'R',null,null,null,null],
    [null,null,null,null,null,'Y',null,null,null,null],
  ];

  // Cell numbers: { "row,col": number }
  const cellNumbers = {
    '0,0': 1,
    '0,3': 2,
    '0,5': 3,
    '3,4': 4,
    '5,0': 5,
  };

  // Word definitions for highlighting
  const words = {
    '1A': { cells: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]] },
    '4A': { cells: [[3,4],[3,5],[3,6],[3,7],[3,8]] },
    '5A': { cells: [[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8]] },
    '2D': { cells: [[0,3],[1,3],[2,3],[3,3]] },
    '3D': { cells: [[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5]] },
  };

  const gridEl = document.getElementById('tts-grid');
  let selectedCell = null;
  let selectedWord = null;
  const inputMap = {};

  // Build grid
  grid.forEach((row, r) => {
    const rowEl = document.createElement('div');
    rowEl.className = 'tts-row';

    row.forEach((cell, c) => {
      const cellEl = document.createElement('div');
      cellEl.className = `tts-cell ${cell !== null ? 'white' : 'black'}`;

      if (cell !== null) {
        const key = `${r},${c}`;

        // Number label
        if (cellNumbers[key]) {
          const numEl = document.createElement('span');
          numEl.className = 'tts-cell-number';
          numEl.textContent = cellNumbers[key];
          cellEl.appendChild(numEl);
        }

        // Input
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.dataset.row = r;
        input.dataset.col = c;
        input.setAttribute('autocomplete', 'off');

        input.addEventListener('focus', () => {
          clearHighlights();
          selectedCell = { r, c };

          // Find which word this cell belongs to and highlight it
          const wordKey = findWord(r, c);
          if (wordKey) {
            selectedWord = wordKey;
            highlightWord(wordKey);
            highlightClue(wordKey);
          }

          cellEl.classList.add('selected');
        });

        input.addEventListener('input', (e) => {
          const val = e.target.value.toUpperCase();
          e.target.value = val;
          if (val) moveToNext(r, c);
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && !e.target.value) {
            e.preventDefault();
            moveToPrev(r, c);
          }
          if (e.key === 'ArrowRight') { e.preventDefault(); moveDirection(r, c, 0, 1); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); moveDirection(r, c, 0, -1); }
          if (e.key === 'ArrowDown') { e.preventDefault(); moveDirection(r, c, 1, 0); }
          if (e.key === 'ArrowUp') { e.preventDefault(); moveDirection(r, c, -1, 0); }
        });

        cellEl.appendChild(input);
        inputMap[key] = input;
      }

      rowEl.appendChild(cellEl);
    });

    gridEl.appendChild(rowEl);
  });

  // Click clues to highlight & focus
  document.querySelectorAll('.tts-clue').forEach(clue => {
    clue.addEventListener('click', () => {
      const key = clue.dataset.clue;
      if (words[key]) {
        clearHighlights();
        selectedWord = key;
        highlightWord(key);
        highlightClue(key);
        const first = words[key].cells[0];
        const firstInput = inputMap[`${first[0]},${first[1]}`];
        if (firstInput) firstInput.focus();
      }
    });
  });

  function findWord(r, c) {
    // Prefer the word in the current direction, or first match
    if (selectedWord && words[selectedWord]) {
      const inCurrent = words[selectedWord].cells.some(([wr, wc]) => wr === r && wc === c);
      if (inCurrent) return selectedWord;
    }
    for (const [key, w] of Object.entries(words)) {
      if (w.cells.some(([wr, wc]) => wr === r && wc === c)) return key;
    }
    return null;
  }

  function highlightWord(key) {
    words[key].cells.forEach(([wr, wc]) => {
      const input = inputMap[`${wr},${wc}`];
      if (input) input.parentElement.classList.add('highlighted');
    });
  }

  function highlightClue(key) {
    document.querySelectorAll('.tts-clue').forEach(c => c.classList.remove('active'));
    const clueEl = document.querySelector(`.tts-clue[data-clue="${key}"]`);
    if (clueEl) clueEl.classList.add('active');
  }

  function clearHighlights() {
    document.querySelectorAll('.tts-cell').forEach(c => {
      c.classList.remove('selected', 'highlighted');
    });
    document.querySelectorAll('.tts-clue').forEach(c => c.classList.remove('active'));
  }

  function moveToNext(r, c) {
    if (!selectedWord) return;
    const cells = words[selectedWord].cells;
    const idx = cells.findIndex(([wr, wc]) => wr === r && wc === c);
    if (idx >= 0 && idx < cells.length - 1) {
      const [nr, nc] = cells[idx + 1];
      const next = inputMap[`${nr},${nc}`];
      if (next) next.focus();
    }
  }

  function moveToPrev(r, c) {
    if (!selectedWord) return;
    const cells = words[selectedWord].cells;
    const idx = cells.findIndex(([wr, wc]) => wr === r && wc === c);
    if (idx > 0) {
      const [pr, pc] = cells[idx - 1];
      const prev = inputMap[`${pr},${pc}`];
      if (prev) { prev.focus(); prev.value = ''; }
    }
  }

  function moveDirection(r, c, dr, dc) {
    const nr = r + dr;
    const nc = c + dc;
    const next = inputMap[`${nr},${nc}`];
    if (next) next.focus();
  }

  // Check answers
  document.getElementById('tts-check').addEventListener('click', () => {
    let allCorrect = true;
    let allFilled = true;

    for (const [key, input] of Object.entries(inputMap)) {
      const [r, c] = key.split(',').map(Number);
      const answer = grid[r][c];
      const val = input.value.toUpperCase();
      const cell = input.parentElement;

      cell.classList.remove('correct', 'wrong');

      if (!val) {
        allFilled = false;
        allCorrect = false;
      } else if (val === answer) {
        cell.classList.add('correct');
      } else {
        cell.classList.add('wrong');
        allCorrect = false;
      }
    }

    const feedback = document.getElementById('tts-feedback');
    feedback.classList.remove('hidden');

    if (allCorrect && allFilled) {
      feedback.innerHTML = `
        <div class="quiz-feedback-box correct">
          <svg class="w-5 h-5 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <div><strong>Sempurna!</strong><p class="mt-1 opacity-80">Semua jawaban benar! Kamu ahli buah beri sejati!</p></div>
        </div>`;
    } else if (!allFilled) {
      feedback.innerHTML = `
        <div class="quiz-feedback-box wrong">
          <svg class="w-5 h-5 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
          <div><strong>Belum lengkap!</strong><p class="mt-1 opacity-80">Masih ada kotak yang kosong. Isi semua kotak terlebih dahulu.</p></div>
        </div>`;
    } else {
      feedback.innerHTML = `
        <div class="quiz-feedback-box wrong">
          <svg class="w-5 h-5 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
          <div><strong>Ada yang salah!</strong><p class="mt-1 opacity-80">Kotak merah menunjukkan jawaban yang perlu diperbaiki.</p></div>
        </div>`;
    }
  });

  // Reset
  document.getElementById('tts-reset').addEventListener('click', () => {
    for (const input of Object.values(inputMap)) {
      input.value = '';
      input.parentElement.classList.remove('correct', 'wrong', 'selected', 'highlighted');
    }
    document.querySelectorAll('.tts-clue').forEach(c => c.classList.remove('active'));
    document.getElementById('tts-feedback').classList.add('hidden');
    selectedCell = null;
    selectedWord = null;
  });
}
