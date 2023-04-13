import * as utils from './../../../lib/utils'

export function internationalNumber()
{
    utils.waitForElement('footer .right-col .footer-link:first-of-type', false, 5000).then(el =>
    {
        const no = el.cloneNode(true)
        no.firstElementChild.setAttribute('href', 'tel:+1-212-807-0868')
        no.firstElementChild.innerHTML = '<i class="fa fa-phone"></i>International: +1-212-807-0868'
        el.parentNode.insertBefore(no, el.nextSibling)
    })
}