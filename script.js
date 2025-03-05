document.addEventListener("DOMContentLoaded", function () {
  const mainTitle = document.getElementById("main-title");
  const slogan = document.getElementById("slogan");
  const cardsContainer = document.getElementById("cards-container");

  // Текст слогану
  const sloganText = "– Твій перший крок у світ криптовалют";
  let index = 0;

  // Спочатку показуємо назву
  setTimeout(() => {
      mainTitle.style.transform = "translateY(0)";
  }, 500);

  // Потім друкуємо слоган
  setTimeout(() => {
      const typingEffect = setInterval(() => {
          slogan.innerHTML += sloganText[index];
          index++;

          if (index === sloganText.length) {
              clearInterval(typingEffect);
              slogan.classList.remove("hidden"); // Робимо слоган видимим
              showCards(); // Після друку слогану, показуємо картки
          }
      }, 50);
  }, 200);
});

// Функція для показу карток
function showCards() {
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.style.opacity = 1; // Робимо контейнер карток видимим
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }, index * 300); // Затримка для кожної картки
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.info-section');
  let sectionsVisible = false;

  // Функція для появи карток
  function revealCards() {
      const scrollPosition = window.scrollY + window.innerHeight; // Поточна позиція прокручування

      if (!sectionsVisible) {
          sections.forEach((section) => {
              const sectionPosition = section.offsetTop; // Позиція секції на сторінці

              // Якщо сторінка прокручена достатньо, щоб показати секцію
              if (scrollPosition > sectionPosition) {
                  section.classList.add('show');  // Додаємо клас для показу
              }
          });
          sectionsVisible = true; // Картки показано, далі не робимо цього
      }
  }

  // Функція для появи тексту (не одразу, а через прокручування)
  function revealText() {
      const scrollPosition = window.scrollY + window.innerHeight; // Поточна позиція прокручування

      sections.forEach((section) => {
          const sectionPosition = section.offsetTop;

          // Якщо прокрутили до тексту, і він ще не показаний
          if (scrollPosition > sectionPosition) {
              setTimeout(() => {
                  section.classList.add('show');  // Додаємо клас для анімації
              }, 500);  // Затримка на 1.5 секунди після появи карток
          }
      });
  }

  // Запускаємо функцію при прокручуванні
  window.addEventListener('scroll', function () {
      revealCards();  // Спочатку картки з'являються
      revealText();   // Потім текст
  });

  // Викликаємо функцію одразу для перевірки, якщо вже прокручено
  revealCards();
  revealText();
});



document.addEventListener("DOMContentLoaded", function () {
    // Копіювання реферального коду
    const copyRefBtn = document.getElementById("copyRefBtn");
    if (copyRefBtn) {
        copyRefBtn.addEventListener("click", function () {
            const refCode = "123ABC";  // Замініть на свій реферальний код
            navigator.clipboard.writeText(refCode).then(() => {
                document.getElementById("copyMessage").textContent = "Код скопійовано!";
                setTimeout(() => document.getElementById("copyMessage").textContent = "", 2000);
            });
        });
    }

    // FAQ відкриття відповідей
    document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", function () {
            let answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });

    // Підвантаження цін криптовалют (імітація)
    function updatePrices() {
        const priceWidget = document.getElementById("price-widget");
        if (priceWidget) {
            priceWidget.innerHTML = `
                <p>BTC: $${(50000 + Math.random() * 1000).toFixed(2)}</p>
                <p>ETH: $${(3000 + Math.random() * 100).toFixed(2)}</p>
                <p>XRP: $${(1 + Math.random() * 0.1).toFixed(2)}</p>
            `;
        }
    }
    updatePrices();
    setInterval(updatePrices, 5000);
});





document.addEventListener("DOMContentLoaded", function () {
    // Плавна поява секції FAQ при прокручуванні
    const faqSection = document.querySelector(".faq");

    function revealSection() {
        const sectionTop = faqSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 50) {
            faqSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealSection);
    revealSection(); // Викликаємо одразу при завантаженні

    // Відкриття/закриття FAQ-відповідей
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            if (answer.classList.contains("visible")) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }

            answer.classList.toggle("visible");
        });
    });
});