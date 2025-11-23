// Quiz data: replace or edit these 20 questions as needed.
// Each item: {q: 'question text', choices: ['a','b','c','d'], answer: indexOfCorrectChoice}
const QUESTIONS = [
  { q: "1. ما ناتج الكود؟\nconsole.log(\"Hello\" + \" World\");", choices: ["A) HelloWorld", "B) Hello World", "C) \"Hello World\"", "D) Error"], answer: 1 },
  { q: "2. ما ناتج الكود؟\nlet x = 5;\nlet y = 3;\nconsole.log(x + y);", choices: ["A) 53", "B) 8", "C) 15", "D) Error"], answer: 1 },
  { q: "3. ما ناتج الكود؟\nlet a = 7;\nlet b = 2;\nconsole.log(a % b);", choices: ["A) 1", "B) 2", "C) 0", "D) 3"], answer: 0 },
  { q: "4. ما ناتج الكود؟\nconsole.log(Math.max(4, 9, 1));", choices: ["A) 1", "B) 4", "C) 9", "D) Error"], answer: 2 },
  { q: "5. ما ناتج الكود؟\nlet name = \"Ali\";\nconsole.log(name);", choices: ["A) Ali", "B) \"Ali\"", "C) name", "D) Error"], answer: 0 },
  { q: "6. ما ناتج الكود؟\nlet x = 10;\nif (x > 5) {\n  console.log(\"Big\");\n} else {\n  console.log(\"Small\");\n}", choices: ["A) Big", "B) Small", "C) Error", "D) Nothing"], answer: 0 },
  { q: "7. ما ناتج الكود؟\nlet x = 4;\nconsole.log(Math.round(4.6));", choices: ["A) 4", "B) 5", "C) 4.6", "D) Error"], answer: 1 },
  { q: "8. ما ناتج الكود؟\nfor(let i = 0; i < 3; i++) {\n  console.log(i);\n}", choices: ["A) 0 1 2", "B) 1 2 3", "C) 0 1 2 3", "D) 1 2"], answer: 0 },
  { q: "9. ما ناتج الكود؟\nlet x = 8;\nif(x % 2 === 0){\n  console.log(\"Even\");\n} else {\n  console.log(\"Odd\");\n}", choices: ["A) Even", "B) Odd", "C) Error", "D) Nothing"], answer: 0 },
  { q: "10. ما ناتج الكود؟\nlet x = 3;\nlet y = 7;\nconsole.log(Math.min(x, y));", choices: ["A) 3", "B) 7", "C) 10", "D) Error"], answer: 0 },
  { q: "11. ما ناتج الكود؟\nconsole.log(Math.floor(5.9));", choices: ["A) 5", "B) 6", "C) 5.9", "D) Error"], answer: 0 },
  { q: "12. ما ناتج الكود؟\nfunction add(a, b){\n  return a + b;\n}\nconsole.log(add(2, 5));", choices: ["A) 7", "B) 25", "C) 2+5", "D) Error"], answer: 0 },
  { q: "13. ما ناتج الكود؟\nlet x = \"5\";\nlet y = 3;\nconsole.log(x + y);", choices: ["A) 8", "B) 53", "C) \"8\"", "D) Error"], answer: 1 },
  { q: "14. ما ناتج الكود؟\nlet num = 10;\nif(num < 10){\n  console.log(\"Small\");\n}else if(num === 10){\n  console.log(\"Exact\");\n}else{\n  console.log(\"Big\");\n}", choices: ["A) Small", "B) Exact", "C) Big", "D) Error"], answer: 1 },
  { q: "15. ما ناتج الكود؟\nfor(let i = 1; i <= 5; i++){\n  console.log(i * 2);\n}", choices: ["A) 2 4 6 8 10", "B) 1 2 3 4 5", "C) 2 4 6 8", "D) 0 2 4 6 8 10"], answer: 0 },
  { q: "16. ما ناتج الكود؟\nfunction max(a, b){\n  return Math.max(a, b);\n}\nconsole.log(max(4, 9));", choices: ["A) 4", "B) 9", "C) 49", "D) Error"], answer: 1 },
  { q: "17. ما ناتج الكود؟\nlet x = Math.random();\nif(x < 1){\n  console.log(\"Less than 1\");\n}", choices: ["A) Less than 1", "B) 1", "C) Error", "D) Nothing"], answer: 0 },
  { q: "18. ما ناتج الكود؟\nlet a = 5;\nlet b = 2;\nconsole.log(a % b + a);", choices: ["A) 2", "B) 7", "C) 6", "D) 5"], answer: 2 },
  { q: "19. ما ناتج الكود؟\nfunction round(num){\n  return Math.round(num);\n}\nconsole.log(round(4.3));", choices: ["A) 4", "B) 5", "C) 4.3", "D) Error"], answer: 0 },
  { q: "20. ما ناتج الكود؟\nlet x = 6;\nif(x % 2 === 0 && x > 5){\n  console.log(\"Yes\");\n}else{\n  console.log(\"No\");\n}", choices: ["A) Yes", "B) No", "C) Error", "D) Nothing"], answer: 0 }
];

const MAX_POINTS = QUESTIONS.length; // 20
const pointsPer = 1; // 1 point per correct answer; total equals number correct (scale later to 20)

const startBtn = document.getElementById('startBtn');
const sampleBtn = document.getElementById('sampleBtn');
const nameInput = document.getElementById('nameInput');
const quizSection = document.getElementById('quiz');
const introSection = document.getElementById('intro');
const questionsContainer = document.getElementById('questionsContainer');
const playerNameEl = document.getElementById('playerName');
const qCountEl = document.getElementById('qCount');
const submitBtn = document.getElementById('submitBtn');
const resultSection = document.getElementById('result');
const scoreText = document.getElementById('scoreText');
const ratingText = document.getElementById('ratingText');
const certCanvas = document.getElementById('certCanvas');
const downloadBtn = document.getElementById('downloadBtn');
const copyBtn = document.getElementById('copyBtn');
const retryBtn = document.getElementById('retryBtn');

let questions = []; // will hold the questions used
let answers = []; // user selected indices (null if unanswered)

// Load default sample by default into memory for quick start
sampleBtn.addEventListener('click', () => {
  questions = JSON.parse(JSON.stringify(QUESTIONS));
  alert('Sample questions loaded. Enter your name then Start Quiz.');
});

startBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (!name) {
    alert('Please enter your name before starting.');
    return;
  }
  if (questions.length === 0) {
    // if user hasn't loaded sample, load default QUESTIONS
    questions = JSON.parse(JSON.stringify(QUESTIONS));
  }
  startQuiz(name);
});

function startQuiz(name) {
  introSection.classList.add('hidden');
  resultSection.classList.add('hidden');
  quizSection.classList.remove('hidden');
  playerNameEl.textContent = name;
  answers = Array(questions.length).fill(null);
  renderQuestions();
  updateCount();
  // auto-calc when all answered
  checkAutoSubmit();
}

function renderQuestions() {
  questionsContainer.innerHTML = '';
  questions.forEach((qObj, idx) => {
    const card = document.createElement('div');
    card.className = 'qcard';
    card.dataset.index = idx;
    // removed per-question media placeholder; single home image is in intro
    card.innerHTML = `
      <div class="qhead">
        <div class="qtitle">Q${idx + 1}. ${qObj.q}</div>
        <div class="qmeta">1 point</div>
      </div>
      <div class="options"></div>
    `;
    const opts = card.querySelector('.options');
    qObj.choices.forEach((choice, cidx) => {
      const id = `q${idx}_c${cidx}`;
      const opt = document.createElement('label');
      opt.className = 'option';
      // apply variant classes to distribute colors visually across options
      opt.classList.add(`variant-${cidx % 4}`);
      opt.innerHTML = `<input type="radio" name="q${idx}" id="${id}" value="${cidx}" /> <span>${choice}</span>`;
      opt.addEventListener('click', (e) => {
        const input = opt.querySelector('input');
        input.checked = true;
        answers[idx] = parseInt(input.value, 10);
        updateCount();
        checkAutoSubmit();
      });
      opts.appendChild(opt);
    });
    questionsContainer.appendChild(card);
  });
}

function updateCount() {
  const answered = answers.filter(a => a !== null).length;
  qCountEl.textContent = `${answered} / ${questions.length}`;
}

function checkAutoSubmit() {
  if (answers.every(a => a !== null)) {
    // all answered - auto compute after slight pause to allow UI change
    setTimeout(() => computeResults(), 350);
  }
}

submitBtn.addEventListener('click', () => {
  if (!answers.every(a => a !== null)) {
    if (!confirm('Some questions are unanswered. Submit anyway?')) return;
  }
  computeResults();
});

function computeResults() {
  // count correct
  let correct = 0;
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].answer) correct++;
  }
  const wrong = questions.length - correct;
  const scorePts = correct; // scale: correct equals points out of 20
  const rating = ratingFromScore(scorePts);
  showResult({ name: playerNameEl.textContent, correct, wrong, score: scorePts, rating });
}

function ratingFromScore(score) {
  // Score is 0..20
  if (score === 20) return { text: "Professional ", medal: "gold" };
  if (score >= 17) return { text: "Excellent ", medal: "silver" };
  if (score >= 12) return { text: "Very Good ", medal: "bronze" };
  if (score >= 10) return { text: "Good", medal: null };
  return { text: "Needs more review", medal: null };
}

function showResult({ name, correct, wrong, score, rating }) {
  quizSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
  scoreText.textContent = `${name}, you scored ${score} / ${MAX_POINTS} — Correct: ${correct}, Wrong: ${wrong}`;
  ratingText.textContent = rating.text;
  renderCertificate({ name, score, rating });
}

// Certificate rendering on canvas
function renderCertificate({ name, score, rating }) {
  const canvas = certCanvas;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // background
  ctx.clearRect(0, 0, w, h);
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#fdfcff');
  grad.addColorStop(1, '#f3ecff');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // framed panel
  ctx.fillStyle = 'white';
  roundRect(ctx, 24, 24, w - 48, h - 48, 16, true, false);
  // heading
  ctx.fillStyle = '#3b165f';
  ctx.font = '28px system-ui, Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Certificate of Achievement', w / 2, 90);

  // subtitle
  ctx.fillStyle = '#6b5f7a';
  ctx.font = '14px system-ui, Arial';
  ctx.fillText('This certifies that', w / 2, 120);

  // name
  ctx.fillStyle = '#2b1055';
  ctx.font = '700 26px system-ui, Arial';
  ctx.fillText(name, w / 2, 160);

  // body text
  ctx.fillStyle = '#6b5f7a';
  ctx.font = '15px system-ui, Arial';
  ctx.fillText(`has completed the JavaScript Basics Quiz with a score of`, w / 2, 200);

  ctx.fillStyle = '#2b1055';
  ctx.font = '700 22px system-ui, Arial';
  ctx.fillText(`${score} / ${MAX_POINTS}`, w / 2, 235);

  // rating badge
  ctx.fillStyle = '#7f3fb2';
  ctx.font = '18px system-ui, Arial';
  ctx.fillText(`${rating.text}`, w / 2, 275);

  // draw medal image if applicable
  if (rating.medal) {
    const img = new Image();
    img.onload = () => {
      // draw medal to right area
      const size = 120;
      ctx.drawImage(img, w - size - 48, 64, size, size);
      // signature line
      drawSignature();
    };
    img.onerror = () => {
      drawSignature();
    };
    img.src = `${rating.medal}.png`;
  } else {
    drawSignature();
  }

  function drawSignature() {
    ctx.strokeStyle = '#e6e0f7';
    ctx.beginPath();
    ctx.moveTo(80, h - 100);
    ctx.lineTo(260, h - 100);
    ctx.stroke();

    ctx.fillStyle = '#6b5f7a';
    ctx.font = '13px system-ui, Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Instructor', 80, h - 80);

    ctx.textAlign = 'right';
    ctx.fillText(new Date().toLocaleDateString(), w - 80, h - 80);
  }
}

// helper: rounded rect
function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  if (typeof r === 'number') r = { tl: r, tr: r, br: r, bl: r };
  ctx.beginPath();
  ctx.moveTo(x + r.tl, y);
  ctx.lineTo(x + w - r.tr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r.tr);
  ctx.lineTo(x + w, y + h - r.br);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r.br, y + h);
  ctx.lineTo(x + r.bl, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r.bl);
  ctx.lineTo(x, y + r.tl);
  ctx.quadraticCurveTo(x, y, x + r.tl, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

// download certificate
downloadBtn.addEventListener('click', () => {
  certCanvas.toBlob(function (blob) {
    const a = document.createElement('a');
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = 'certificate.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, 'image/png');
});

// copy to clipboard (image)
copyBtn.addEventListener('click', async () => {
  if (!navigator.clipboard) {
    alert('Clipboard API not available.');
    return;
  }
  certCanvas.toBlob(async (blob) => {
    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      alert('Certificate image copied to clipboard. Paste it into an editor or chat.');
    } catch (e) {
      alert('Copy failed: ' + (e && e.message ? e.message : e));
    }
  }, 'image/png');
});

// retry
retryBtn.addEventListener('click', () => {
  // reset to intro
  resultSection.classList.add('hidden');
  quizSection.classList.add('hidden');
  introSection.classList.remove('hidden');
  nameInput.value = '';
  questions = [];
  answers = [];
  questionsContainer.innerHTML = '';
  playerNameEl.textContent = '';
});

// Allow keyboard navigation and answer selection via label clicks already implemented.
// Accessibility: allow press Enter on start
nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') startBtn.click();
});