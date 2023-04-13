import * as utils from './../../../lib/utils'

export function needToKnowText()
{
    const selector = '.scheda_tabs li:nth-child(3) a'
    utils.getElementBySelector(selector).then(() =>
    {
        const link = document.querySelector(selector)
        if(link)
        {
            link.innerText = 'Need to Know'
        } 
    })
}