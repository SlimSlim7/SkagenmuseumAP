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
      <path d="M7.35156 10.2656C6.68852 10.2656 6.05264 10.0022 5.5838 9.53339C5.11495 9.06455 4.85156 8.42867 4.85156 7.76562C4.85156 7.10258 5.11495 6.4667 5.5838 5.99786C6.05264 5.52902 6.68852 5.26562 7.35156 5.26562C8.0146 5.26562 8.65049 5.52902 9.11933 5.99786C9.58817 6.4667 9.85156 7.10258 9.85156 7.76562C9.85156 8.09393 9.7869 8.41902 9.66126 8.72233C9.53562 9.02565 9.35148 9.30125 9.11933 9.53339C8.88718 9.76554 8.61159 9.94969 8.30827 10.0753C8.00496 10.201 7.67987 10.2656 7.35156 10.2656ZM7.35156 0.765625C5.49505 0.765625 3.71457 1.50312 2.40181 2.81588C1.08906 4.12863 0.351563 5.90911 0.351562 7.76562C0.351563 13.0156 7.35156 20.7656 7.35156 20.7656C7.35156 20.7656 14.3516 13.0156 14.3516 7.76562C14.3516 5.90911 13.6141 4.12863 12.3013 2.81588C10.9886 1.50312 9.20808 0.765625 7.35156 0.765625Z" fill="#ECA619"/>
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