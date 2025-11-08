// Year, form, product modals
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const msg = document.getElementById('msg');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    msg.textContent = '필수 항목을 모두 입력해 주세요.';
    msg.style.color = 'tomato';
    return;
  }
  msg.textContent = '제출 완료! (데모: 실제 전송은 되지 않습니다)';
  msg.style.color = 'seagreen';
  form.reset();
});

// Modal logic
const openers = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

openers.forEach(el => {
  el.addEventListener('click', () => {
    const id = el.getAttribute('data-modal');
    const modal = document.getElementById(id);
    if (modal) modal.setAttribute('aria-hidden', 'false');
  });
});

closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').setAttribute('aria-hidden', 'true');
  });
});

modals.forEach(m => {
  m.addEventListener('click', (e) => {
    if (e.target === m) m.setAttribute('aria-hidden', 'true');
  });
});
