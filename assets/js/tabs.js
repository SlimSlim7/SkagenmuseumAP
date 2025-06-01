const tabs = document.querySelectorAll(".tab");
const tabContent = document.getElementById("tab-content");

const content = {
  skagen: {
    title: "Skagens Kunstmuseum",
    text: "Vores hovedmuseum der rummer de største værker.",
    address: "Brøndumsvej 4, 9990 Skagen",
    img: "./assets/img/fakeVideoSkagen.png"
  },
  ancher: {
    title: "Anchers Hus",
    text: "Hjem for vores to vigtige kunstnere, Anna og Michael Ancher.",
    address: "Markvej 2, 9990 Skagen",
    img: "./assets/img/anchershus.jpg"
  },
  drachmann: {
    title: "Drachmanns Hus",
    text: "I huset kan du både opleve kunst og hans personlige genstande.",
    address: "Hans Baghs Vej 21, 9990 Skagen",
    img: "./assets/img/drachmann.jpg"
  }
};

function renderContent(key) {
  const data = content[key];
  tabContent.innerHTML = `
    <div class="museer-text">
      <h3>${data.title}</h3>
      <p>${data.text}</p>
      <div class="lokation-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 15 21" fill="none">
          <path d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 12.375 7.5 21 7.5 21C7.5 21 15 12.375 15 7.5C15 3.35786 11.6421 0 7.5 0ZM7.5 10.5C6.11929 10.5 5 9.38071 5 8C5 6.61929 6.11929 5.5 7.5 5.5C8.88071 5.5 10 6.61929 10 8C10 9.38071 8.88071 10.5 7.5 10.5Z" fill="#ECA619"/>
        </svg>
        <p>${data.address}</p>
      </div>
      <button>Læs mere</button>
    </div>
    <img src="${data.img}" alt="${data.title}">
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