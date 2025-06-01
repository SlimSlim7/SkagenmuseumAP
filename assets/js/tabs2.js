const tabs = document.querySelectorAll(".tab-billet");
const tabContent = document.getElementById("tab-billet-content");

const content = {
  skagen: {
    title: "Skagens Kunstmuseum",
    text: "Vores hovedmuseum der rummer de største værker.",
    address: "Brøndumsvej 4, 9990 Skagen",
    img: "./assets/img/skagenskunstmuseum.webp"
  },
  ancher: {
    title: "Anchers Hus",
    text: "Hjem for vores to vigtige kunstnere, Anna og Michael Ancher.",
    address: "Markvej 2, 9990 Skagen",
    img: "./assets/img/ancherhus.webp"
  },
  drachmann: {
    title: "Drachmanns Hus",
    text: "I huset kan du både opleve kunst og hans personlige genstande.",
    address: "Hans Baghs Vej 21, 9990 Skagen",
    img: "./assets/img/drachmannhus.webp"
  }
};

function renderContent(key) {
    const data = content[key];
  
    tabContent.innerHTML = `
      <div class="huset-indhold-intro">
        <img src="${data.img}" alt="${data.title}">
  
        <div class="huset-tekst">
          <p class="h3-fake">${data.title.toUpperCase()}</p>
          <p>${data.text}</p>
          <hr>
          <p><strong class="strong-huset">10:00 - 17:00</strong></p>
          <p>Tirsdag til søndag</p>
          <hr>
          <p><strong class="strong-huset">LUKKET</strong></p>
          <p>Mandag</p>
          <hr>
          <p><strong>Speciale åbningstider:</strong> i perioden fra den 1 nov. til 21 dec. er der åbnet tirsdag til søndag fra 10 - 16</p>
          <hr>
          <p><strong>Helligdage:</strong> i juleferien holder museet lukket fra d. 22 til 26 dec. samt d. 31</p>
          <hr>
        </div>
      </div>
  
      <div class="divider-wrapper-huset">
        <h3>ENTRE PRIS</h3>
        <div class="entre__divider"></div>
      </div>
  
      <section class="huset-content">
        <div class="huset-indhold">
          <h4>Billet</h4>
          <p>${data.text}</p>
        </div>
  
        <div class="huset-boks-wrapper">
          <div class="huset-box">
            <div class="pris-linje">
              <p>Pris for voksne</p>
              <p>140 kr.</p>
            </div>
            <hr class="huset-streg">
            <div class="pris-linje">
              <p>Pris for ung <span>(under 28 år)</span></p>
              <p>90 kr.</p>
            </div>
            <hr class="huset-streg">
            <div class="pris-linje">
              <p>Børn <span>(under 18 år)</span></p>
              <p>GRATIS</p>
            </div>
          </div>
          <div class="huset-btn-wrapper">
            <button class="huset-btn">Køb billet til kunsten</button>
          </div>
        </div>
      </section>
  
      <div class="huset-divider"></div>
  
      <section class="huset-content">
        <div class="huset-indhold">
          <h4>Kombibillet</h4>
          <p>Vil du se det hele? Godt valg! Køb en kombibillet, som giver adgang til Skagens Museum, Anchers Hus og Drachmann Hus.</p>
        </div>
        <div class="huset-boks-wrapper">
          <div class="huset-box">
            <div class="pris-linje">
              <p>Kombibillet for voksne</p>
              <p>200 kr.</p>
            </div>
            <hr class="huset-streg">
            <div class="pris-linje">
              <p>Kombibillet for børn <span>(under 28 år)</span></p>
              <p>GRATIS</p>
            </div>
          </div>
          <div class="huset-btn-wrapper">
            <button class="huset-btn">Køb billet til kunsten</button>
          </div>
        </div>
      </section>
    `;
  }
  

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderContent(tab.dataset.tab);
  });
});

// Start med første visning
renderContent("skagen");