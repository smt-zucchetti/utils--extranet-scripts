export function moveWebsiteLinkToHeader()
{
    console.log('moveWebsiteLinkToHeader')
    const home = document.querySelector("#default-footer .right-col .footer-link:nth-child(2)")
    const header = document.querySelector("#header .container")
    header.insertAdjacentHTML("afterbegin", home.innerHTML)
}