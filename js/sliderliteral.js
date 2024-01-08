
    document.addEventListener("DOMContentLoaded", function () {
      const slides = [
        {
          image: '../img/home_img/img_7.jpg',
          heading: 'Carnes, Pescado<br>y Vegan Foods',
          text: '1 Carnes animales y veganas surtidas: res, cerdo, aves, pescado y embutidos',
        },
        {
          image: '../img/home_img/img_8.jpg',
          heading: 'Carnes, Pescado<br>y Vegan Foods',
          text: '2 Carnes animales y veganas surtidas: res, cerdo, aves, pescado y embutidos',
        },
        {
          image: '../img/home_img/img_9.jpg',
          heading: 'Carnes, Pescado<br>y Vegan Foods',
          text: '3 Carnes animales y veganas surtidas: res, cerdo, aves, pescado y embutidos',
        },
        {
          image: '../img/home_img/home_3_bg.jpg',
          heading: 'Carnes, Pescado<br>y Vegan Foods',
          text: '4 Carnes animales y veganas surtidas: res, cerdo, aves, pescado y embutidos',
        },
      ];

      const slider = document.querySelector(".slider");

      function createSlide({ image, heading, text, isActive }) {
        const activeClass = isActive ? 'active' : '';
        return `
          <div class="slide ${activeClass}" style="background-image: url('${image}');">
            <div class="main">
              <div class="heading--para">
                <h1>${heading}</h1>

                <p>${text}</p>
              </div>
              <button class="btn">product</button>
            </div>
          </div>
        `;
      }

      function renderSlides() {
        const slidesHtml = slides.map((slide, index) => createSlide({ ...slide, isActive: index === 0 })).join('');
        slider.innerHTML = slidesHtml;
      }

      renderSlides();

      setInterval(function () {
        const firstSlide = slides.shift();
        slides.push(firstSlide);
        renderSlides();
      }, 5000); // Change slide every 5 seconds (adjust as needed)
    });
 