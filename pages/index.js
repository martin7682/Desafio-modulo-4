function getWellcome(){
    return fetch("https://cdn.contentful.com/spaces/doed8edaes52/environments/master/entries?access_token=AcsVW54mb_CQQsfUjyT2v7ZI5NHCBdC_dZmtaOk4HMI&content_type=apxMod4Wellcome")
        .then(resp => {return resp.json()})
        .then((data)=>{
        console.log(data) 
        const fieldsCollections = data.items.map((item)=>{
                        
            return{
                title:item.fields.title,
                description: item.fields.description,
            }
        })
        return fieldsCollections  
    })
   
}

function addWellcome(params = {}){
    console.log(params)
    const template = document.querySelector("#wellcome-content-template");
    const container = document.querySelector(".wellcome-content-template");

    template.content.querySelector(".wellcome-card__title").textContent = params.title
    template.content.querySelector(".wellcome-card__description").textContent = params.description

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function mainWellcome(){
    getWellcome().then((wellcome)=>{  
        console.log(wellcome)   
        for (const i of wellcome){    
            addWellcome(i)
        }
    })
}



// SECTION PRESENTATION
function getPresentation(){
    return fetch("https://cdn.contentful.com/spaces/doed8edaes52/environments/master/entries?access_token=AcsVW54mb_CQQsfUjyT2v7ZI5NHCBdC_dZmtaOk4HMI&content_type=apxMod4Presentation")
    .then(resp => {return resp.json()})
    .then((data)=>{
        console.log(data) 
        const fieldsCollections = data.items.map((item)=>{
            const idImagen = item.fields.image.sys.id;
            const imagen = buscarImagen(idImagen, data);
            linkImg = imagen.fields.file.url;
            
            
            return{
                title:item.fields.title,
                description: item.fields.description,
                image: linkImg
            }
        })
        return fieldsCollections  
    })
   
}

function addPresentation(params = {}){
    console.log(params)
    const template = document.querySelector("#presentation-content-template");
    const container = document.querySelector(".presentation-content-template");

    template.content.querySelector(".presentation-card__img").src = params.image
    template.content.querySelector(".presentation-card__title").textContent = params.title
    template.content.querySelector(".presentation-card__description").textContent = params.description

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function mainPresentation(){
    getPresentation().then((presentation)=>{  
        console.log(presentation)   
        for (const i of presentation){   
            addPresentation(i)
        }
    })
}




function addComponents(){
    const headerEl = document.querySelector(".header")
    componentHeader(headerEl)
    const contactEl = document.querySelector(".contact")
    componentContact(contactEl)
    const footerEl = document.querySelector(".footer")
    componentFooter(footerEl)
}


function main(){
    addComponents()
    mainWellcome()
    mainPresentation()
    mainServices()
}

main()