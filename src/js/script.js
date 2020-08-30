document.addEventListener('DOMContentLoaded', () => {
    const hidden = document.querySelector('.logo__hidden'),
          title = document.querySelector('.logo__title'),
          prodText = document.querySelector('.logo__hidden-text');

        title.addEventListener('mouseover', (e) => {

            hidden.classList.add('logo__hidden--transform');
            prodText.classList.add('logo__hidden--color');

        });







})