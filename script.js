// Sayfa yüklendiğinde tema uygula
function setThemeByTimeOrPreference() {
  const userPref = localStorage.getItem('theme');

  if (userPref === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    return;
  } else if (userPref === 'light') {
    document.body.setAttribute('data-theme', 'light');
    return;
  }

  const hour = new Date().getHours();
  const theme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

window.addEventListener('DOMContentLoaded', setThemeByTimeOrPreference);

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});
  
 function filterSelection(category) {
  var items = document.getElementsByClassName('filter-item');
  for (var i = 0; i < items.length; i++) {
    if (category === 'all' || items[i].classList.contains(category)) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}
filterSelection('all'); // Sayfa ilk açıldığında hepsini göster

// AOS animasyonları başlat
  AOS.init({
    duration: 800, // animasyon süresi (ms)
    once: true     // sadece ilk kaydırmada animasyon
  });
  

function showMoreGallery() {
  const hidden = document.getElementById("gallery-hidden");
  const button = document.querySelector(".gallery-button-container button");

  if (hidden.style.display === "none") {
    hidden.style.display = "block";
    // Buton yazısını değiştir (TR + EN)
    button.innerHTML = "🔽 Fotoğrafları Gizle / Hide Photos";
  } else {
    hidden.style.display = "none";
    // Eski haline döndür (TR + EN)
    button.innerHTML = "🖼️ Tüm Fotoğrafları Göster / Show All Photos";
  }
}

// Menü Aç/Kapat
function toggleMenu() {
  const mobileNav = document.getElementById("mobileNav");
  const hamburgerBtn = document.getElementById("hamburgerBtn");

  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
    hamburgerBtn.style.display = "inline-flex"; // geri göster
  } else {
    mobileNav.classList.add("active");
    hamburgerBtn.style.display = "none"; // gizle
  }
}

// Sayfa yüklendiğinde: tercihi ya da saate göre tema uygula
document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
  } else {
    // Otomatik saate göre
    const hour = new Date().getHours();
    const autoTheme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
    document.body.setAttribute('data-theme', autoTheme);
  }

  // Tercih edilen dili kontrol et (bu kalsın)
  const selectedLang = localStorage.getItem('selectedLang');
  if (selectedLang) {
    console.log('Kayıtlı dil:', selectedLang);
  }
});

// Tema değiştirme butonu
function toggleDarkMode() {
  const current = document.body.getAttribute('data-theme');
  const next = (current === 'dark') ? 'light' : 'dark';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

function selectLanguage(lang) {
  localStorage.setItem('selectedLang', lang);
  location.reload();
}

function resetThemePreference() {
  localStorage.removeItem('theme');
  alert("Tema tercihiniz sıfırlandı. Sayfa yeniden yüklendiğinde saat dilimine göre ayarlanacaktır.");
  location.reload(); // sayfayı yeniden yükle
}

//cyberpunk teması

function getLang() {
  const langAttr = document.documentElement.lang || "en";
  if (langAttr.startsWith("tr")) return "tr";
  return "en";
}

//terminal
const terminalText = document.getElementById("terminal-text");

const now = new Date();
const formattedTime = now.toLocaleString('tr-TR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});

const terminalLines = {
  tr: `
🖥️ [SİSTEM] Başlatılıyor...
🌐 [BAĞLANTI] /caglarcagan.com adresine bağlanılıyor...
✅ [BAĞLANTI] Durum: ERİŞİM ONAYLANDI
⏰ [ZAMAN] ${formattedTime}
👤 [KULLANICI] Hoş geldin, kullanıcı! Sistem seni tanıyor. 🔐
`,
  en: `
🖥️ [SYSTEM] Initializing...
🌐 [CONNECTION] Connecting to /caglarcagan.com...
✅ [CONNECTION] Status: ACCESS GRANTED
⏰ [TIME] ${formattedTime}
👤 [USER] Welcome, user! System recognizes you. 🔐
`,
};

let charIndex = 0;
let currentLine = "";

function getLang() {
return localStorage.getItem('selectedLang') || 'tr';
}

function typeLine() {
if (charIndex < currentLine.length) {
terminalText.textContent += currentLine.charAt(charIndex);
charIndex++;
setTimeout(typeLine, 40);
}
}

function replayTerminal() {
terminalText.textContent = "";
charIndex = 0;
currentLine = terminalLines[getLang()];
typeLine();
}

function continuePage() {
  const box = document.querySelector(".terminal-box");
  box.style.opacity = "0";
  setTimeout(() => {
    box.style.display = "none";
  }, 400); // yumuşak geçiş süresi
}

// Sayfa yüklendiğinde terminal başlasın:
document.addEventListener('DOMContentLoaded', () => {
currentLine = terminalLines[getLang()];
terminalText.textContent = "";
charIndex = 0;
typeLine();
});

// 🔊 Menü tıklama sesi
const menuLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const audio = new Audio('sounds/click-menu.mp3');
    audio.volume = 0.4;
    audio.play();
  });
});

// 🔤 Dil Seçimi ve Ses Efekti
function selectLanguage(lang) {
  const audio = new Audio('sounds/click-lang.mp3');
  audio.volume = 0.4;
  audio.play();

  // Ses bittikten sonra yönlendir
  audio.onended = function () {
    localStorage.setItem('selectedLang', lang);
    if (lang === 'tr') {
      window.location.href = 'index-tr.html';
    } else if (lang === 'en') {
      window.location.href = 'index-en.html';
    } else {
      alert('Seçilen dil bilinmiyor: ' + lang);
    }
  };
}

function showComingSoon() {
  const alertBox = document.getElementById("coming-soon-alert");
  alertBox.style.display = "block";
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 4000); // 4 saniye sonra kapanır
}

// Ses oynatma
document.querySelectorAll('.play-sound').forEach(button => {
  button.addEventListener('click', () => {
    const audioSrc = button.getAttribute('data-audio');
    const audio = new Audio(audioSrc);
    audio.play();
  });
});

// Cevap kontrolü
document.querySelectorAll('.answer-button').forEach(button => {
  button.addEventListener('click', () => {
    const isCorrect = button.getAttribute('data-answer') === 'true';
    const resultDiv = button.closest('.mini-test-box').querySelector('.test-result');
    resultDiv.textContent = isCorrect ? 'Doğru cevap! / Correct!' : '❌ Yanlış cevap! / Wrong! Tekrar dinle!';
    resultDiv.style.color = isCorrect ? '#0f0' : '#f00';
  });
});

//duyduğunu yaz
function checkTextAnswer(button, correctAnswer) {
  const box = button.closest(".mini-test-box");
  const input = box.querySelector(".test-input");
  const feedback = box.querySelector(".test-feedback");
  const userAnswer = input.value.trim().toLowerCase();

  if (userAnswer === correctAnswer.toLowerCase()) {
    feedback.textContent = "✅ Doğru cevap! / Correct!";
    feedback.style.color = "#00ff90";
  } else {
    feedback.textContent = "❌ Yanlış cevap! Tekrar dinle / Wrong! try again";
    feedback.style.color = "#ff4444";
  }
}

function checkLogicAnswer() {
  const userAnswer = document.getElementById("logic-answer").value.trim();
  const feedback = document.getElementById("logic-feedback");

  if (userAnswer === "80") {
    feedback.innerHTML = `
      ✅ Doğru! Her sayı 2 katına çıkıyor. <br>
      ✅ Correct! Each number doubles. <br>
    `;
    feedback.style.color = "#00ff90";
  } else {
    feedback.innerHTML = `
      ❌ Yanlış cevap. Tekrar deneyin! <br>
      ❌ Wrong answer. Try again! <br>
    `;
    feedback.style.color = "#ff4444";
  }
}

//terminal dil seçimi
function changeLang(lang) {
  localStorage.setItem('selectedLang', lang);
  replayTerminal();
}

window.onload = function () {
  const selectedLang = localStorage.getItem('selectedLang') || 'tr';
  document.querySelector('.language-select').value = selectedLang;
  replayTerminal();
};

//zeka soru gizli kod
function checkLogicAnswer2() {
  const userAnswer = document.getElementById("logic-answer2").value.trim();
  const feedback = document.getElementById("logic-feedback2");
  if (userAnswer === "24") {
    feedback.textContent = "✔️ Doğru! / Correct ; C(3)+A(1)+T(20)=24";
    feedback.style.color = "#00ff90";
  } else {
    feedback.textContent = "❌ Yanlış cevap. / Wrong";
    feedback.style.color = "#ff4444";
  }
}

function checkLogicAnswer1() {
  const userAnswer = document.getElementById("logic-answer-1").value.trim();
  const feedback = document.getElementById("logic-feedback-1");
  if (userAnswer === "12") {
    feedback.innerHTML = `
    ✅ Doğru! 3 gün × 2 havuç = 6, 6 gün × 2 havuç = 12. <br> 
    ✅ Correct! 3 days × 2 carrots = 6, 6 days × 2 carrots = 12. <br> 
    `;
    feedback.style.color = "#00ff90"; // yeşil
  } else {
    feedback.innerHTML = `
    ❌ Yanlış cevap. Tekrar deneyin! <br> 
    ❌ Wrong answer. Try again! <br> 
    `;
    feedback.style.color = "#ff4444";
  }
}

//doğa ses testi
const optionBtns = document.querySelectorAll(".sound-test .option");
optionBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const feedback = btn.closest(".sound-test").querySelector(".feedback");
    if(btn.dataset.answer === "rain") { // doğru cevabı buraya yaz
      feedback.innerHTML = "✅ Doğru! <br>✅ Correct!";
    } else {
      feedback.innerHTML = "❌ Yanlış. Tekrar dene.<br> ❌ Wrong. Try again!";
    }
    feedback.style.display = "block";
  });
});

// s ve ş testi
// Mini test / Fonem testi
document.querySelectorAll(".sound-test .option").forEach(btn => {
  btn.addEventListener("click", () => {
    const feedback = btn.closest(".sound-test").querySelector(".feedback");
    const testAudio = btn.closest(".sound-test").querySelector(".test-sound");
    const correctAnswer = testAudio.dataset.correct; // doğru cevabı buraya ekle

    if(btn.dataset.answer === correctAnswer) {
      feedback.innerHTML = "✅ Doğru! <br>✅ Correct!";
    } else {
      feedback.innerHTML = "❌ Yanlış. Tekrar dene.<br>❌ Wrong. Try again!";
    }
    feedback.style.display = "block";
  });
});

// Test sesine doğru cevabı ekleme örneği
document.querySelectorAll(".test-sound").forEach(btn => {
  btn.addEventListener("click", () => {
    const audio = new Audio(btn.dataset.audio);
    audio.play();

    // Ses dosyasına göre doğru cevabı belirle
    if(btn.dataset.audio.includes("s-test")) {
      btn.dataset.correct = "s";
    } else if(btn.dataset.audio.includes("ş-test")) {
      btn.dataset.correct = "ş";
    }
  });
});

//insan ve hayvan soru
function showAnswer(type) {
  const box = document.getElementById("hearing-answer");
  if (type === "correct") {
  box.innerHTML = 
    "✔️ <strong>Doğru!</strong> Yunuslar yaklaşık <strong>150 kHz</strong>’e kadar duyabilir.<br>" +
    "✔️ <strong>Correct!</strong> Dolphins can hear up to about <strong>150 kHz</strong>.";
  box.style.color = "#00ffaa";
  box.style.textShadow = "0 0 8px #00ffaa";
} else {
  box.innerHTML = 
    "❌ <strong>Yanlış!</strong> İnsanların işitme aralığı yaklaşık <strong>20 Hz – 20 kHz</strong> arasındadır.<br>" +
    "❌ <strong>Wrong!</strong> The human hearing range is about <strong>20 Hz – 20 kHz</strong>.";
  box.style.color = "#ff7a7a";
  box.style.textShadow = "0 0 8px #ff7a7a";
}
  box.style.display = "block";
}

function showAnswerDog(type) {
  const box = document.getElementById("dog-answer");
  if (type === "correct") {
  box.innerHTML = 
    "✔️ <strong>Doğru!</strong> Köpeklerde yaklaşık <strong>220 milyon</strong> koku reseptörü vardır. İnsanlarda ise yalnızca <strong>~5 milyon</strong>.<br>" +
    "✔️ <strong>Correct!</strong> Dogs have about <strong>220 million</strong> scent receptors, while humans have only <strong>~5 million</strong>.";
  box.style.color = "#ffaa00";
  box.style.textShadow = "0 0 8px #ffaa00";
} else {
  box.innerHTML = 
    "❌ <strong>Yanlış!</strong> İnsanların koku alma hücreleri sınırlıdır, köpekler çok daha güçlüdür.<br>" +
    "❌ <strong>Wrong!</strong> Human olfactory cells are limited, dogs are much stronger.";
  box.style.color = "#ff7a7a";
  box.style.textShadow = "0 0 8px #ff7a7a";
}
  box.style.display = "block";
}

function showAnswerOwl(type) {
  const box = document.getElementById("owl-answer");
  if (type === "correct") {
  box.innerHTML = 
    "✔️ <strong>Doğru!</strong> Baykuşların gözlerinde çok fazla <strong>rod hücresi</strong> vardır, bu sayede gece görüşleri olağanüstüdür.<br>" +
    "✔️ <strong>Correct!</strong> Owls have a very high number of <strong>rod cells</strong> in their eyes, giving them extraordinary night vision.";
  box.style.color = "#00aaff";
  box.style.textShadow = "0 0 8px #00aaff";
} else {
  box.innerHTML = 
    "❌ <strong>Yanlış!</strong> İnsan gözleri düşük ışıkta sınırlı görür. Baykuşlar karanlıkta çok daha üstündür.<br>" +
    "❌ <strong>Wrong!</strong> Human eyes see poorly in low light, while owls are far superior in the dark.";
  box.style.color = "#ff7a7a";
  box.style.textShadow = "0 0 8px #ff7a7a";
}
  box.style.display = "block";
}

//puzzle
const puzzle = document.getElementById("puzzle");
const successMessage = document.getElementById("successMessage");

let pieces = [];
let order = [];

// 4x4 => 16 parça
for (let i = 0; i < 16; i++) {
    order.push(i);
}

shuffle(order);

order.forEach(i => {
    const div = document.createElement("div");
    div.classList.add("piece");

    const x = (i % 4) * 33.333;
    const y = Math.floor(i / 4) * 33.333;

    div.style.backgroundPosition = `${x}% ${y}%`;
    div.draggable = true;
    div.dataset.index = i;

    puzzle.appendChild(div);

    pieces.push(div);
});

let dragged;

pieces.forEach(piece => {
    piece.addEventListener("dragstart", e => {
        dragged = e.target;
    });

    piece.addEventListener("dragover", e => {
        e.preventDefault();
    });

    piece.addEventListener("drop", e => {
        const draggedIndex = [...puzzle.children].indexOf(dragged);
        const droppedIndex = [...puzzle.children].indexOf(e.target);

        if (dragged !== e.target) {
            puzzle.insertBefore(dragged, puzzle.children[droppedIndex]);
            puzzle.insertBefore(e.target, puzzle.children[draggedIndex]);
            checkCompletion();
        }
    });
});

// Mobil dokunma sürükleme
pieces.forEach(piece => {
    piece.addEventListener("touchstart", e => {
        dragged = e.target;
    });

    piece.addEventListener("touchmove", e => {
        const touch = e.touches[0];
        const el = document.elementFromPoint(touch.clientX, touch.clientY);

        if (el && el.classList.contains("piece") && el !== dragged) {
            const draggedIndex = [...puzzle.children].indexOf(dragged);
            const droppedIndex = [...puzzle.children].indexOf(el);

            puzzle.insertBefore(dragged, puzzle.children[droppedIndex]);
            puzzle.insertBefore(el, puzzle.children[draggedIndex]);
        }
    });

    piece.addEventListener("touchend", checkCompletion);
});

// Puzzle tamam mı?
function checkCompletion() {
    const children = [...puzzle.children];
    const correct = children.every((child, index) =>
        child.dataset.index == index
    );

    if (correct) {
        successMessage.style.display = "block";
        successMessage.style.animation = "neonBlink 1s infinite alternate";
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

//Lightbox
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'self',
    captionType: 'attr',
    captionsData: 'title',
    captionPosition: 'bottom',
    captionDelay: 200
});

//Lightbox sertifikalar
window.onload = function () {
  const lightbox = new SimpleLightbox('.cert-lightbox', { 
    captions: true,
    captionsData: 'title',
    captionDelay: 200
  });
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("cyber-loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 600); // Yarim saniye glitch görünsün
  }
});

/* -------------- ProMotion Hz Measurement -------------- */

function measureHz(duration = 600) {
  return new Promise((resolve) => {
    let start = performance.now();
    let frames = 0;
    function frame(now) {
      frames++;
      if (now - start < duration) {
        requestAnimationFrame(frame);
      } else {
        const hz = Math.round(frames / ((now - start) / 1000));
        resolve(hz);
      }
    }
    requestAnimationFrame(frame);
  });
}

(async function() {
  const hz = await measureHz(600);
  const root = document.documentElement;

  let scale = 1;

  /* ⚡ 60 Hz → 1.00
     ⚡ 90 Hz → 0.95
     ⚡ 120 Hz → 0.85  */
  if (hz >= 85 && hz < 110) scale = 0.95;
  if (hz >= 110) scale = 0.85;

  const baseLoader = 1100;
  const baseMenu = 350;
  const baseHover = 220;

  root.style.setProperty('--motion-scale', scale);
  root.style.setProperty('--loader-speed', Math.round(baseLoader * scale) + "ms");
  root.style.setProperty('--menu-speed', Math.round(baseMenu * scale) + "ms");
  root.style.setProperty('--hover-speed', Math.round(baseHover * scale) + "ms");

  /* Konsola yazmak istersen:
     console.log("Detected Refresh Rate:", hz, "Hz → scale:", scale); */
})();

/* === Cyber Mini Patch v1.0 (C15) === */

/* Menü scroll animasyonu küçük gecikme düzeltmesi */
let lastScrollY = 0;
window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  
  if (Math.abs(currentY - lastScrollY) > 1) {
    document.body.classList.toggle("scrolled", currentY > 10);
    lastScrollY = currentY;
  }
});

/* 120 Hz cihazlarda animasyon takılması önleme */
if (window.matchMedia("(min-resolution: 120dpi)").matches) {
  document.documentElement.style.scrollBehavior = "smooth";
}

/* iOS / Safari dokunma optimizasyonu */
window.addEventListener("touchstart", () => {}, {passive: true});
