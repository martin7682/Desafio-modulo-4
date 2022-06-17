function getServices(){
    return fetch("https://cdn.contentful.com/spaces/doed8edaes52/environments/master/entries?access_token=AcsVW54mb_CQQsfUjyT2v7ZI5NHCBdC_dZmtaOk4HMI&content_type=apxMod4")
    .then(resp => {return resp.json()})
    .then((data)=>{
        console.log(data) 
        const fieldsCollections = data.items.map((item)=>{
            const idImagen = item.fields.imagen.sys.id;
            const imagen = buscarImagen(idImagen, data);
            linkImg = imagen.fields.file.url;
            
            
            return{
                title:item.fields.titulo,
                description: item.fields.descripcion,
                image: linkImg
            }
        })
        return fieldsCollections  
    })
   
}


function addServices(params = {}){
    const template = document.querySelector("#services__content--template");
    const container = document.querySelector(".services__content--template");

    template.content.querySelector(".services__card--title").textContent = params.title
    template.content.querySelector(".services__card--text").textContent = params.description
    template.content.querySelector(".services__card--img").src = params.image
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}


function buscarImagen (id, data){
    const imagen = data.includes.Asset.find((asset)=>{
        return asset.sys.id == id;
    })
    return imagen;
}




function mainServices(){
    getServices().then((services)=>{  
        console.log(services)   
        for (const i of services){    
            addServices(i)
        }
    })
}