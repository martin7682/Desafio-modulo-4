function componentContact(el){
    const contactEl = document.createElement("div")
    contactEl.setAttribute("class", "contact-container")
    contactEl.innerHTML = `
    
        
        <h2 class="titulo-section-four">Escribime</h2>

        <div class="div-form-section-four">
            <form class="form" action="">
                
                <label class="input-label" for="iname">NOMBRE</label>
                <input class="input-name" id="iname" type="text" name="name">

                <label class="input-label" for="iemail">EMAIL</label>
                <input class="input-email" id="iemail" type="email" name="email">

                <label class="input-label" for="imensaje">Mensaje</label>
                <textarea class="input-textarea" name="mensaje" id="imensaje" cols="30" rows="10"></textarea>

                <input class="input-submit" style="background-color: #2c2c2c;" type="submit" value="Enviar">
            
                </form>
                
                <div class="form__message-sended">
                    Su mensaje ha sido enviado, gracias!!
                </div>
        </div>
    `
    el.appendChild(contactEl);
    postData()
}

function postData(){
    const formEl = document.querySelector("form");
    const messageEl=document.querySelector(".form__message-sended")
    formEl.addEventListener("submit", e => {
        e.preventDefault();
        
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                to: "romero7682@gmail.com",
                message: `Nuevo correo de ${value.name}, el mail es ${value.email} y el mensaje es el sigueinte: ${value.mensaje}`,
            })
        });
      
        messageEl.style.display="inherit"
        formEl.reset();
    })
}
