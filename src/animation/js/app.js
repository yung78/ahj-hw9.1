// Collapse
(() => {
  const button = document.querySelector('.collapse_btn');
  const textField = document.querySelector('.collapse_text');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    textField.classList.toggle('collapse_active');
    button.classList.toggle('btn_active');
  });
})();
