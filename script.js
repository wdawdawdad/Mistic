document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
  });

  // Snow effect
  const snowContainer = document.querySelector(".snow-container");

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "💜";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s"; 
    snowflake.style.fontSize = (Math.random() * 10 + 10) + "px"; 

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 7000);
  }

  setInterval(createSnowflake, 150);
});
