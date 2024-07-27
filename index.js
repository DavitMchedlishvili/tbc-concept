const sliderCardsContainer = document.getElementById("slider-card-container");

const sliderCards = [
  {
    imgSrc: "assets/sliderCards/MPDevelopment.png",
    logoSrc: "assets/logos/MPIcon.jpg",
    category: "ინვესტიციები",
    title: "MP დეველოპმენტი - აშშ და ევროს ობლიგაციები",
  },
  {
    imgSrc: "assets/sliderCards/Iveria.jpg",
    logoSrc: "assets/logos/iveriabeachlogo.png",
    category: "ჯაზ ფესტივალის შეთავაზებები",
    title: "IVERIA BEACH - დაიბრუნეთ 30%",
  },
  {
    imgSrc: "assets/sliderCards/TegetaGarage.png",
    logoSrc: "assets/logos/TegetaIcon.png",
    category: "ავტო თეგეტა მოტორსი",
    title: "თეგეტა მოტორსი - 50% ფასდაკლება",
  },
  {
    imgSrc: "assets/sliderCards/TegetaOffice.png",
    logoSrc: "assets/logos/TegetaIcon.png",
    category: "ავტო ჯაზ ფესტივალის შეთავაზებები",
    title: "თეგეტა მოტორსი - ბათუმმი",
  },
  {
    imgSrc: "assets/sliderCards/LeMeredian.png",
    logoSrc: "assets/logos/LeMeredianIcon.png",
    category: "დასვენება ვიზა ჯაზ ფესტივალის შეთავაზებები",
    title: "Le Meridien Batumi - 15%-იანი ფასდაკლება",
  },
  {
    imgSrc: "assets/sliderCards/Collosoeum.png",
    logoSrc: "assets/logos/CollosoeumIcon.png",
    category: "დასვენება ვიზა ჯაზ ფესტივალის შეთავაზებები",
    title: "Colosseum Marina Hotel - 15%-იანი ფასდაკლება",
  },
];

function createCard(card) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const cardImgDiv = document.createElement("div");
  cardImgDiv.className = "card-img-div";

  const cardImg = document.createElement("img");
  cardImg.className = "card-img";
  cardImg.src = card.imgSrc;

  const companyLogoDiv = document.createElement("div");
  companyLogoDiv.className = "company-logo-div";

  const companyLogo = document.createElement("img");
  companyLogo.className = "company-logo";
  companyLogo.src = card.logoSrc;

  companyLogoDiv.appendChild(companyLogo);
  cardImgDiv.appendChild(cardImg);
  cardImgDiv.appendChild(companyLogoDiv);

  const cardTextWrap = document.createElement("div");
  cardTextWrap.className = "card-text-wrap";

  const cardText = document.createElement("div");
  cardText.className = "card-text";

  const cardTextTop = document.createElement("div");
  cardTextTop.className = "card-text-top";

  const categoryP = document.createElement("p");
  categoryP.textContent = card.category;

  cardTextTop.appendChild(categoryP);

  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.textContent = card.title;

  cardText.appendChild(cardTextTop);
  cardText.appendChild(cardTitle);
  cardTextWrap.appendChild(cardText);

  cardDiv.appendChild(cardImgDiv);
  cardDiv.appendChild(cardTextWrap);

  return cardDiv;
}

function renderCards(cardsData) {
  cardsData.forEach((cardData) => {
    const cardElement = createCard(cardData);
    sliderCardsContainer.appendChild(cardElement);
  });
}

renderCards(sliderCards);







/////// last slider


const awards = [
    {
        imgSrc: "assets/awardCards/global-finance.png",
        title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2024 ",
        category: "The Global Finance",
      },
    
    
      {
        imgSrc: "assets/awardCards/euromoney.png",
        title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2023",
        category: "Euromeny",
      },
    
      {
        imgSrc: "assets/awardCards/global-finance.png",
        title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2022",
        category: "The Global Finance",
      },
      {
        imgSrc: "assets/awardCards/the-banker.png",
        title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2021",
        category: "The Banker & PWM",
        
      }
]




const awardsSlider = document.getElementById('awards-slider-container');



function createAwardCards(awards){
    awards.forEach((award =>{
        const awardCard = document.createElement('div');
        awardCard.className='award-card';
    
    
        const img = document.createElement('img')
        img.src= award.imgSrc;
        img.alt= award.title;
        img.className="award-img";
        awardCard.appendChild(img);
    
    
        const title = document.createElement("h3");
        title.textContent = award.title;
        title.className="award-title";
        awardCard.appendChild(title);
    
    
        const category = document.createElement('p');
        category.textContent = award.category;
        category.className="award-category";
        awardCard.appendChild(category);

        awardsSlider.appendChild(awardCard)
    }))
}


createAwardCards(awards);











////////////////////////////////////////////////////////////// Slider

const initSlider = (containerId, scrollbarId, thumbId) => {




    const container = document.getElementById(containerId);
    const slideButtons = document.querySelectorAll(`.${containerId}-button`);
   
    const sliderScrollbar = document.getElementById(scrollbarId);
    const scrollBarThumb = document.getElementById(thumbId);
    const cards = document.querySelectorAll(".card, .award-card");
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    const cardWidth = cards.length > 0 ? cards[0].offsetWidth : 0;

scrollBarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollBarThumb.offsetLeft;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollBarThumb.style.left = `${boundedPosition}px`;
      container.scrollLeft = scrollPosition;
    };


    const handleMouseup = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseup);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseup);
  });

 

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      
      const direction = button.id === "left-slide" ? -1 : 1;
      const scrollAmount = cardWidth * direction;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      button.classList.add("active");
    });
  });

  
  let isDragging = false;
  let startX;
  let scrollLeft;

  cards.forEach(card => {
    card.addEventListener('mousedown', (e) => {
      isDragging = true;
      
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      e.preventDefault();
    });

    card.addEventListener('mouseleave', () => {
      isDragging = false;
    });

    card.addEventListener('mouseup', () => {
      isDragging = false;
    });

    card.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
     
      

    });
  });

  const updateScrollThumbPosition = () => {
    const scrollPosition = container.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollBarThumb.offsetWidth);

    scrollBarThumb.style.left = `${thumbPosition}px`;
  };

  container.addEventListener("scroll", updateScrollThumbPosition);
};

window.addEventListener("load", () => {
 initSlider('slider-card-container', 'offers-scrollBar', 'offers-scrollThumb');
 initSlider('awards-slider-container', 'awards-scrollBar', 'awards-scrollThumb');
 initSlider('products-slider-container', 'products-scrollBar', 'products-scrollThumb');
});


