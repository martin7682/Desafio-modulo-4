function getPortfolio(){
    return fetch("https://cdn.contentful.com/spaces/doed8edaes52/environments/master/entries?access_token=AcsVW54mb_CQQsfUjyT2v7ZI5NHCBdC_dZmtaOk4HMI&content_type=apxMod4MyPortfolio")
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

function addPortfolio(params = {}){
    const template = document.querySelector("#portfolio__content--template");
    const container = document.querySelector(".portfolio__content--template");

    template.content.querySelector(".portfolio__card--title").textContent = params.title
    template.content.querySelector(".portfolio__card--text").textContent = params.description
    template.content.querySelector(".portfolio__card--img").src = params.image
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}




function buscarImagen (id, data){
    const imagen = data.includes.Asset.find((asset)=>{
        return asset.sys.id == id;
    })
    return imagen;
}

function mainPortfolio(){
    getPortfolio().then((portfolio)=>{  
        console.log(portfolio)   
        for (const i of portfolio){    
            addPortfolio(i)
        }
    })
}