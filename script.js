let page = document.querySelector('.page');
page.classList.add('dark-theme');
let themebutton = document.querySelector('.theme-button');
themebutton.onclick = function () {  
console.log('Кнопка нажата!');      
page.classList.toggle('dark-theme');
page.classList.remove('light-theme');
}