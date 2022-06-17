function componentHeader(el){
    const headerEl = document.createElement("div")
    headerEl.setAttribute("class", "header-container")
    headerEl.innerHTML = `
    
        <div class="header-container-logo">
            <a href="./" > <img src="./img-desafio-modulo-4/img_logo.png" alt="" class="header-container-logo__logo">
            </a>
        </div>
        <div class="header-container__menu-burguer">
            <div class="header-container__menu-burguer__rayaContainer">
                <div class="header-container__menu-burguer__rayaContainer--raya"></div>
                <div class="header-container__menu-burguer__rayaContainer--raya"></div>
                <div class="header-container__menu-burguer__rayaContainer--raya"></div>
            </div>
        </div>

    

        <nav class="header-container__menuNav">
            <div class="header-container__menuNav__closeContainer">
                <span class="header-container__menuNav__closeContainer--close">X</span>
            </div>
            <div class="header-container__menuNav__linksContainer">
                <a href="./" class="header-container__menuNav__linksContainer--link-nav">Home</a>
                <a href="./portfolio.html" class="header-container__menuNav__linksContainer--link-nav">Portfolio</a>
                <a href="./services.html" class="header-container__menuNav__linksContainer--link-nav">Servicios</a>
                <a href="./contact.html" class="header-container__menuNav__linksContainer--link-nav">Contacto</a>
            </div>
        </nav>
    `
    el.appendChild(headerEl);
    showMenu();
    hidenMenu();

}

function showMenu(){
   const menuBurguerEl = document.querySelector(".header-container__menu-burguer") 
   const menuNavEl = document.querySelector(".header-container__menuNav")
   menuBurguerEl.addEventListener("click", () =>(menuNavEl.style.display = "flex"))
}
function hidenMenu (){
    const xEl = document.querySelector(".header-container__menuNav__closeContainer--close")
    const menuNavEl = document.querySelector(".header-container__menuNav")
    xEl.addEventListener("click", ()=> (menuNavEl.style.display = "none"))
}