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
  initWaveText();
});

// ===========================
// WAVE TEXT EFFECT
// ===========================
function initWaveText() {
  const title = document.getElementById('hero-title');
  if (!title) return;
  const chars = title.querySelectorAll('.wave-char');

  title.addEventListener('mousemove', (e) => {
    chars.forEach((c) => {
      const rect = c.getBoundingClientRect();
      const charCenterX = rect.left + rect.width / 2;
      const dist = Math.abs(e.clientX - charCenterX);

      if (dist < 20) {
        c.style.transform = 'translateY(-10px) scale(1.25)';
      } else if (dist < 50) {
        c.style.transform = 'translateY(-6px) scale(1.15)';
      } else if (dist < 80) {
        c.style.transform = 'translateY(-3px) scale(1.07)';
      } else {
        c.style.transform = 'translateY(0) scale(1)';
      }
    });
  });

  title.addEventListener('mouseleave', () => {
    chars.forEach(c => {
      c.style.transform = 'translateY(0) scale(1)';
    });
  });
}

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
const allQuizQuestions = [
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
  {
    question: 'Vitamin apa yang paling tinggi kandungannya pada Strawberry?',
    options: ['Vitamin A', 'Vitamin K', 'Vitamin C', 'Vitamin E'],
    correct: 2,
    explanation: 'Strawberry mengandung 58.8mg vitamin C per 100g, menjadikannya buah beri dengan kandungan vitamin C tertinggi.',
  },
  {
    question: 'Buah beri mana yang kaya vitamin K dan baik untuk kesehatan tulang?',
    options: ['Blueberry', 'Blackberry', 'Strawberry', 'Cranberry'],
    correct: 1,
    explanation: 'Blackberry merupakan sumber vitamin K terkaya di antara semua buah beri, penting untuk kesehatan tulang dan pembekuan darah.',
  },
  {
    question: 'Anthocyanin pada buah beri terutama bermanfaat untuk kesehatan organ apa?',
    options: ['Jantung', 'Hati', 'Otak', 'Ginjal'],
    correct: 2,
    explanation: 'Anthocyanin dalam beri meningkatkan daya ingat, memperlambat penurunan kognitif, dan membantu komunikasi antar sel-sel saraf di otak.',
  },
  {
    question: 'Berapa kalori yang terkandung dalam 100g Blueberry?',
    options: ['32 kkal', '43 kkal', '57 kkal', '70 kkal'],
    correct: 2,
    explanation: 'Blueberry mengandung 57 kkal per 100g, menjadikannya pilihan camilan sehat yang relatif rendah kalori.',
  },
  {
    question: 'Buah beri apa yang mengandung asam lemak omega-3, omega-6, dan omega-9?',
    options: ['Blueberry', 'Cranberry', 'Acai Berry', 'Raspberry'],
    correct: 2,
    explanation: 'Acai berry kaya akan asam lemak omega-3, omega-6, dan omega-9 yang baik untuk kesehatan jantung dan kulit.',
  },
  {
    question: 'Strawberry termasuk dalam keluarga tanaman apa?',
    options: ['Solanaceae (Terung)', 'Rosaceae (Mawar)', 'Ericaceae (Heather)', 'Rutaceae (Jeruk)'],
    correct: 1,
    explanation: 'Strawberry termasuk keluarga mawar (Rosaceae) dan secara botani bukan buah beri sejati.',
  },
  {
    question: 'Buah beri apa yang dipanen dengan cara menggenangi ladang dengan air?',
    options: ['Blueberry', 'Strawberry', 'Cranberry', 'Blackberry'],
    correct: 2,
    explanation: 'Cranberry dipanen dengan cara menggenangi ladang dengan air, bukan dipetik dari pohon. Buah matangnya mengapung di permukaan air.',
  },
];

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;
let quizTotal = 5;

function initQuiz() {
  document.querySelectorAll('.diff-btn[data-game="quiz"]').forEach(btn => {
    btn.addEventListener('click', () => {
      startQuiz(btn.dataset.diff);
    });
  });

  document.getElementById('quiz-next').addEventListener('click', nextQuestion);
  document.getElementById('quiz-restart').addEventListener('click', restartQuiz);
}

function startQuiz(difficulty) {
  currentQuestion = 0;
  score = 0;
  answered = false;

  if (difficulty === 'easy') {
    quizTotal = 5;
  } else if (difficulty === 'medium') {
    quizTotal = 8;
  } else {
    quizTotal = 12;
  }

  // Shuffle all questions and pick the required amount
  const shuffled = [...allQuizQuestions].sort(() => Math.random() - 0.5);
  quizQuestions = shuffled.slice(0, quizTotal);

  document.getElementById('quiz-total').textContent = quizTotal;
  document.getElementById('quiz-score-display').textContent = '0';

  document.getElementById('quiz-difficulty').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');

  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentQuestion];
  const letters = ['A', 'B', 'C', 'D'];

  document.getElementById('quiz-question').textContent = q.question;
  document.getElementById('quiz-current').textContent = currentQuestion + 1;
  document.getElementById('quiz-total').textContent = quizTotal;
  document.getElementById('quiz-progress').style.width = `${((currentQuestion + 1) / quizTotal) * 100}%`;

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
  document.getElementById('result-total').textContent = quizTotal;

  const pct = (score / quizTotal) * 100;

  // Result text
  let text = '';
  if (pct === 100) text = 'Sempurna! Kamu adalah ahli buah beri sejati!';
  else if (pct >= 80) text = 'Hebat! Pengetahuanmu tentang buah beri sangat baik!';
  else if (pct >= 60) text = 'Bagus! Kamu cukup mengenal dunia buah beri.';
  else if (pct >= 40) text = 'Lumayan! Masih ada yang bisa dipelajari tentang buah beri.';
  else text = 'Jangan menyerah! Coba baca materinya lagi dan ulangi kuisnya.';

  document.getElementById('result-text').textContent = text;

  // Stars (5 stars based on percentage)
  const filledStars = Math.round((score / quizTotal) * 5);
  const starsContainer = document.getElementById('result-stars');
  starsContainer.innerHTML = Array.from({ length: 5 }, (_, i) => `
    <svg class="result-star ${i < filledStars ? 'filled' : 'empty'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${i < filledStars ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
    </svg>
  `).join('');

  // Result icon
  const iconContainer = document.getElementById('result-icon');
  if (pct >= 80) {
    iconContainer.innerHTML = `
      <div class="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border border-yellow-500/20 flex items-center justify-center">
        <svg class="w-10 h-10 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
      </div>
    `;
  } else if (pct >= 40) {
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
  document.getElementById('quiz-container').classList.add('hidden');
  document.getElementById('quiz-difficulty').classList.remove('hidden');
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

    // Reset quiz to difficulty selector
    document.getElementById('quiz-difficulty').classList.remove('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
  });

  tabTts.addEventListener('click', () => {
    tabTts.classList.add('active');
    tabQuiz.classList.remove('active');
    panelTts.classList.remove('hidden');
    panelQuiz.classList.add('hidden');

    // Reset TTS to difficulty selector
    document.getElementById('tts-difficulty').classList.remove('hidden');
    document.getElementById('tts-content').classList.add('hidden');
  });
}

// ===========================
// CROSSWORD (TTS)
// ===========================
const ttsConfigs = {
  easy: {
    grid: [
      ['S','T','R','A','W','B','E','R','R','Y'],
      [null,null,null,null,null,'E',null,null,null,null],
      [null,null,null,'S','E','R','A','T',null,null],
      [null,null,null,null,null,'I',null,null,null,null],
    ],
    cellNumbers: { '0,0':1, '0,5':2, '2,3':3 },
    words: {
      '1A': { cells: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]] },
      '2D': { cells: [[0,5],[1,5],[2,5],[3,5]] },
      '3A': { cells: [[2,3],[2,4],[2,5],[2,6],[2,7]] },
    },
    clues: {
      across: [
        { number: 1, key: '1A', text: 'Buah beri merah yang bijinya di luar permukaan kulit (10 huruf)' },
        { number: 3, key: '3A', text: 'Nutrisi yang paling tinggi kandungannya pada Raspberry (5 huruf)' },
      ],
      down: [
        { number: 2, key: '2D', text: 'Kelompok buah kecil berwarna cerah kaya nutrisi (4 huruf)' },
      ],
    },
  },
  medium: {
    grid: [
      ['S','T','R','A','W','B','E','R','R','Y'],
      [null,null,null,'C',null,'L',null,null,null,null],
      [null,null,null,'A',null,'U',null,null,null,null],
      [null,null,null,'I','S','E','R','A','T',null],
      [null,null,null,null,null,'B',null,null,null,null],
      ['C','R','A','N','B','E','R','R','Y',null],
      [null,null,null,null,null,'R',null,null,null,null],
      [null,null,null,null,null,'R',null,null,null,null],
      [null,null,null,null,null,'Y',null,null,null,null],
    ],
    cellNumbers: { '0,0':1, '0,3':2, '0,5':3, '3,4':4, '5,0':5 },
    words: {
      '1A': { cells: [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]] },
      '4A': { cells: [[3,4],[3,5],[3,6],[3,7],[3,8]] },
      '5A': { cells: [[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8]] },
      '2D': { cells: [[0,3],[1,3],[2,3],[3,3]] },
      '3D': { cells: [[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5]] },
    },
    clues: {
      across: [
        { number: 1, key: '1A', text: 'Buah beri merah yang bijinya terletak di luar permukaan kulit (10 huruf)' },
        { number: 4, key: '4A', text: 'Nutrisi yang paling tinggi kandungannya pada Raspberry (5 huruf)' },
        { number: 5, key: '5A', text: 'Buah beri yang terkenal menjaga kesehatan saluran kemih (9 huruf)' },
      ],
      down: [
        { number: 2, key: '2D', text: 'Buah beri dari Amazon yang populer dijadikan smoothie bowl (4 huruf)' },
        { number: 3, key: '3D', text: 'Buah beri biru yang dijuluki \'raja antioksidan\' (9 huruf)' },
      ],
    },
  },
  hard: {
    grid: [
      [null,null,'S','T','R','A','W','B','E','R','R','Y'],
      [null,null,null,null,null,null,null,'L',null,null,null,null],
      [null,null,null,null,null,null,null,'U',null,null,null,null],
      [null,null,'R','A','S','P','B','E','R','R','Y',null],
      [null,null,null,null,null,null,null,'B',null,null,null,null],
      [null,null,null,null,null,null,'S','E','R','A','T',null],
      [null,'C','R','A','N','B','E','R','R','Y',null,null],
      [null,null,null,'C',null,null,null,'R',null,null,null,null],
      ['S','E','G','A','R',null,null,'Y',null,null,null,null],
      [null,null,null,'I',null,null,null,null,null,null,null,null],
    ],
    cellNumbers: { '0,2':1, '0,7':2, '3,2':3, '5,6':4, '6,1':5, '6,3':6, '8,0':7 },
    words: {
      '1A': { cells: [[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11]] },
      '3A': { cells: [[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10]] },
      '4A': { cells: [[5,6],[5,7],[5,8],[5,9],[5,10]] },
      '5A': { cells: [[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9]] },
      '7A': { cells: [[8,0],[8,1],[8,2],[8,3],[8,4]] },
      '2D': { cells: [[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7]] },
      '6D': { cells: [[6,3],[7,3],[8,3],[9,3]] },
    },
    clues: {
      across: [
        { number: 1, key: '1A', text: 'Buah beri merah yang bijinya terletak di luar permukaan kulit (10 huruf)' },
        { number: 3, key: '3A', text: 'Buah beri dengan kandungan serat tertinggi di antara semua buah beri (9 huruf)' },
        { number: 4, key: '4A', text: 'Nutrisi yang paling tinggi pada Raspberry (5 huruf)' },
        { number: 5, key: '5A', text: 'Buah beri yang terkenal menjaga kesehatan saluran kemih (9 huruf)' },
        { number: 7, key: '7A', text: 'Buah beri yang baru dipetik terasa ___ dan menyegarkan (5 huruf)' },
      ],
      down: [
        { number: 2, key: '2D', text: 'Buah beri biru yang dijuluki \'raja antioksidan\' (9 huruf)' },
        { number: 6, key: '6D', text: 'Buah beri dari Amazon yang populer dijadikan smoothie bowl (4 huruf)' },
      ],
    },
  },
};

let ttsGrid = null;
let ttsWords = null;
let ttsInputMap = {};
let ttsSelectedCell = null;
let ttsSelectedWord = null;

function initCrossword() {
  document.querySelectorAll('.diff-btn[data-game="tts"]').forEach(btn => {
    btn.addEventListener('click', () => {
      startCrossword(btn.dataset.diff);
    });
  });

  document.getElementById('tts-check').addEventListener('click', checkCrossword);
  document.getElementById('tts-reset').addEventListener('click', resetCrossword);
}

function startCrossword(difficulty) {
  const config = ttsConfigs[difficulty];
  ttsGrid = config.grid;
  ttsWords = config.words;
  ttsInputMap = {};
  ttsSelectedCell = null;
  ttsSelectedWord = null;

  document.getElementById('tts-difficulty').classList.add('hidden');
  document.getElementById('tts-content').classList.remove('hidden');

  buildCrosswordGrid(config);
  buildCrosswordClues(config);

  lucide.createIcons();
}

function buildCrosswordGrid(config) {
  const gridEl = document.getElementById('tts-grid');
  gridEl.innerHTML = '';

  const grid = config.grid;
  const cellNumbers = config.cellNumbers;
  const words = config.words;

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
          clearTtsHighlights();
          ttsSelectedCell = { r, c };

          const wordKey = findTtsWord(r, c);
          if (wordKey) {
            ttsSelectedWord = wordKey;
            highlightTtsWord(wordKey);
            highlightTtsClue(wordKey);
          }

          cellEl.classList.add('selected');
        });

        input.addEventListener('input', (e) => {
          const val = e.target.value.toUpperCase();
          e.target.value = val;
          if (val) moveToNextTts(r, c);
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && !e.target.value) {
            e.preventDefault();
            moveToPrevTts(r, c);
          }
          if (e.key === 'ArrowRight') { e.preventDefault(); moveDirectionTts(r, c, 0, 1); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); moveDirectionTts(r, c, 0, -1); }
          if (e.key === 'ArrowDown') { e.preventDefault(); moveDirectionTts(r, c, 1, 0); }
          if (e.key === 'ArrowUp') { e.preventDefault(); moveDirectionTts(r, c, -1, 0); }
        });

        cellEl.appendChild(input);
        ttsInputMap[key] = input;
      }

      rowEl.appendChild(cellEl);
    });

    gridEl.appendChild(rowEl);
  });
}

function buildCrosswordClues(config) {
  const cluesEl = document.getElementById('tts-clues');
  cluesEl.innerHTML = '';

  // Across clues
  const acrossDiv = document.createElement('div');
  acrossDiv.innerHTML = '<h4 class="text-sm font-semibold uppercase tracking-wider text-red-400 mb-3">Mendatar</h4>';
  const acrossList = document.createElement('div');
  acrossList.className = 'space-y-2';

  config.clues.across.forEach(clue => {
    const clueEl = document.createElement('div');
    clueEl.className = 'tts-clue flex gap-3 text-sm';
    clueEl.dataset.clue = clue.key;
    clueEl.innerHTML = `<span class="font-bold text-white w-5 flex-shrink-0">${clue.number}.</span><span class="text-neutral-400">${clue.text}</span>`;
    clueEl.addEventListener('click', () => {
      onTtsClueClick(clue.key);
    });
    acrossList.appendChild(clueEl);
  });

  acrossDiv.appendChild(acrossList);
  cluesEl.appendChild(acrossDiv);

  // Down clues
  const downDiv = document.createElement('div');
  downDiv.innerHTML = '<h4 class="text-sm font-semibold uppercase tracking-wider text-red-400 mb-3">Menurun</h4>';
  const downList = document.createElement('div');
  downList.className = 'space-y-2';

  config.clues.down.forEach(clue => {
    const clueEl = document.createElement('div');
    clueEl.className = 'tts-clue flex gap-3 text-sm';
    clueEl.dataset.clue = clue.key;
    clueEl.innerHTML = `<span class="font-bold text-white w-5 flex-shrink-0">${clue.number}.</span><span class="text-neutral-400">${clue.text}</span>`;
    clueEl.addEventListener('click', () => {
      onTtsClueClick(clue.key);
    });
    downList.appendChild(clueEl);
  });

  downDiv.appendChild(downList);
  cluesEl.appendChild(downDiv);
}

function onTtsClueClick(key) {
  if (ttsWords[key]) {
    clearTtsHighlights();
    ttsSelectedWord = key;
    highlightTtsWord(key);
    highlightTtsClue(key);

    // Focus first empty cell, or first cell if all filled
    const cells = ttsWords[key].cells;
    let targetCell = cells[0];
    for (const [cr, cc] of cells) {
      const inp = ttsInputMap[`${cr},${cc}`];
      if (inp && !inp.value) {
        targetCell = [cr, cc];
        break;
      }
    }
    const targetInput = ttsInputMap[`${targetCell[0]},${targetCell[1]}`];
    if (targetInput) targetInput.focus();
  }
}

function findTtsWord(r, c) {
  if (ttsSelectedWord && ttsWords[ttsSelectedWord]) {
    const inCurrent = ttsWords[ttsSelectedWord].cells.some(([wr, wc]) => wr === r && wc === c);
    if (inCurrent) return ttsSelectedWord;
  }
  for (const [key, w] of Object.entries(ttsWords)) {
    if (w.cells.some(([wr, wc]) => wr === r && wc === c)) return key;
  }
  return null;
}

function highlightTtsWord(key) {
  ttsWords[key].cells.forEach(([wr, wc]) => {
    const input = ttsInputMap[`${wr},${wc}`];
    if (input) input.parentElement.classList.add('highlighted');
  });
}

function highlightTtsClue(key) {
  document.querySelectorAll('.tts-clue').forEach(c => c.classList.remove('active'));
  const clueEl = document.querySelector(`.tts-clue[data-clue="${key}"]`);
  if (clueEl) clueEl.classList.add('active');
}

function clearTtsHighlights() {
  document.querySelectorAll('.tts-cell').forEach(c => {
    c.classList.remove('selected', 'highlighted');
  });
  document.querySelectorAll('.tts-clue').forEach(c => c.classList.remove('active'));
}

function moveToNextTts(r, c) {
  if (!ttsSelectedWord) return;
  const cells = ttsWords[ttsSelectedWord].cells;
  const idx = cells.findIndex(([wr, wc]) => wr === r && wc === c);
  if (idx >= 0 && idx < cells.length - 1) {
    const [nr, nc] = cells[idx + 1];
    const next = ttsInputMap[`${nr},${nc}`];
    if (next) next.focus();
  }
}

function moveToPrevTts(r, c) {
  if (!ttsSelectedWord) return;
  const cells = ttsWords[ttsSelectedWord].cells;
  const idx = cells.findIndex(([wr, wc]) => wr === r && wc === c);
  if (idx > 0) {
    const [pr, pc] = cells[idx - 1];
    const prev = ttsInputMap[`${pr},${pc}`];
    if (prev) { prev.focus(); prev.value = ''; }
  }
}

function moveDirectionTts(r, c, dr, dc) {
  const nr = r + dr;
  const nc = c + dc;
  const next = ttsInputMap[`${nr},${nc}`];
  if (next) next.focus();
}

function checkCrossword() {
  let allCorrect = true;
  let allFilled = true;

  for (const [key, input] of Object.entries(ttsInputMap)) {
    const [r, c] = key.split(',').map(Number);
    const answer = ttsGrid[r][c];
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
}

function resetCrossword() {
  for (const input of Object.values(ttsInputMap)) {
    input.value = '';
    input.parentElement.classList.remove('correct', 'wrong', 'selected', 'highlighted');
  }
  document.querySelectorAll('.tts-clue').forEach(c => c.classList.remove('active'));
  document.getElementById('tts-feedback').classList.add('hidden');
  ttsSelectedCell = null;
  ttsSelectedWord = null;
}
