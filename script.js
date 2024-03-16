let tabLinks = document.querySelector(".tab-links");
let tabContents = document.querySelector(".tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  Event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add('active-tab')
}
