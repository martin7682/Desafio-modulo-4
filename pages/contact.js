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
}

main()