function addComponents(){
    const headerEl = document.querySelector(".header")
    componentHeader(headerEl)
    const footerEl = document.querySelector(".footer")
    componentFooter(footerEl)
}


function main(){
    addComponents()
    mainServices()
}

main()