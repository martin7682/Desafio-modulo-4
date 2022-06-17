function componentFooter(el){
    const footerEl = document.createElement("div")
    footerEl.setAttribute("class", "footer-container")
    footerEl.innerHTML = `
    
        <img class="footer-logo-container__img" src="./img-desafio-modulo-4/img_logo.png" alt="">
        <div class="footer-redes-container">
            <a  class="footer-redes-container__icono" href="">
                <img class="footer-redes-container__icono-img" src="./img-desafio-modulo-4/instagram.png" alt="">
                <h6 class="footer-redes-container__icono--nombre">Instagram</h6>
            </a>
            <a  class="footer-redes-container__icono" href="">
                <img class="footer-redes-container__icono-img" src="./img-desafio-modulo-4/linkedin.png" alt="">
                <h6 class="footer-redes-container__icono--nombre">Linkedin</h6>
            </a>
            <a  class="footer-redes-container__icono" href="">
                <img class="footer-redes-container__icono-img" src="./img-desafio-modulo-4/github.png" alt="">
                <h6 class="footer-redes-container__icono--nombre">Github</h6>
            </a>
        </div>
    `
    el.appendChild(footerEl);
    
}