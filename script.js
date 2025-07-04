window.onload = () => {
  const profile = document.getElementById("profile");
  const cards = document.querySelectorAll(".card");
  const profileDetails = profile.getBoundingClientRect();
  const centerX = profileDetails.left + profileDetails.width / 2;
  const centerY = profileDetails.top + profileDetails.height / 2;
  cards.forEach((card, index) => {
    card.style.left = centerX + "px";
    card.style.top = centerY + "px";
    card.style.width = '50px';
    card.style.height = '25px';
    setTimeout(() => {
        card.style.left = card.dataset.left;
        card.style.top = card.dataset.top;
        card.style.width = '300px';
        card.style.height = '150px';
        card.style.opacity = 1;
    }, index * 200);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    const baseTransform = 'translate(-50%, -50%)';
    card.addEventListener('mouseenter', () => {
      card.style.transform = `${baseTransform} scale(1.1)`; 
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `${baseTransform} scale(1)`; 
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const header  = document.getElementById('index');   // element to watch
  const sidebar = document.getElementById('sidebar'); // element to show/hide

  // Observe when the header leaves / enters the viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sidebar.classList.remove('show'); // header visible → hide sidebar
      } else {
        sidebar.classList.add('show');    // header gone   → show sidebar
      }
    });
  }, { threshold: 0 }); // 0 = trigger as soon as ANY part appears/disappears

  observer.observe(header);
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const newColor = entry.target.getAttribute('data-bg');
        document.body.style.backgroundColor = newColor;
      }
    });
  }, {
    threshold: 0.5   // section must be at least 50% visible
  });

  sections.forEach(section => observer.observe(section));
});
