class VividTabs {
  constructor({tabSeletor, contentTabSelector, primalOpenTab, textsTabs}) {
    this.tabs = document.querySelectorAll(tabSeletor);
    this.contentTab = document.querySelector(contentTabSelector);
    this.primalOpenTab = primalOpenTab-1;
    this.textsTabs = textsTabs;

    /* initialization of the project */
    this.init();
  }
  init = () => {
    this.addActionOnTabs();

    /* showing the first tab */
    this.showFirstTab();
  }
  showFirstTab() {
    this.tabs[this.primalOpenTab].classList.add('active');
    this.contentTab.innerHTML = this.textsTabs[this.primalOpenTab];
  }
  addActionOnTabs = () => {
    /* add listener on tabs */
    for (let index = 0; index < this.tabs.length; index++) {
      const currentTab = this.tabs[index];
      
      /* handler show current tab */
      currentTab.addEventListener('click', () => {
        this.tabs.forEach(tab => {
          tab.classList.remove('active');
        });

        this.tabs[index].classList.add('active');

        this.contentTab.innerHTML = this.textsTabs[index];
      });
    }
  }
}

new VividTabs({
  tabSeletor: ".tabs__item", /* the tabs class */
  contentTabSelector: ".tabs__content", /* block where the content of the current tab will be displayed  */
  primalOpenTab: 1, /* primal open tab when loading a page (tab numbering from 1) */
  textsTabs: [ /* text of all tabs in order  */
    `CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.`,
    `DOM — это не зависящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ 
    к содержимому HTML-,XHTML- и XML-документов, а также изменять содержимое, структуру и оформление таких документов.`,
    `jQuery — библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML. Библиотека jQuery помогает легко
    получать доступ к любому элементу DOM, обращаться к атрибутам и содержимому элементов DOM, манипулировать ими.
    Также библиотека jQuery предоставляет удобный API для работы с AJAX.
    Сейчас разработка jQuery ведётся командой jQuery во главе с Джоном Резигом.`,
    `JavaScript — прототипно-ориентированный сценарный язык программирования. Является реализацией языка ECMAScript.
    JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.
    Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.`
  ] 
});