import { props } from './data/props';
import * as utils from './../../../lib/utils';

export function changeEmailAddressInFooter()
{
    utils.populateBeAttributes().then(() =>
    {
        const propObj = props[parseInt(utils.BE_ATTRIBUTES.propId)]
        
        if(propObj.codeName !== 'westmark-sitka')
        {
            const emailEl = document.querySelector('#default-footer .right-col .footer-link:last-of-type > a')
            const email = propObj.brand === 'westmark' ? 'info@westmarkhotels.com' : 'aklodges@princesscruises.com'
            if(emailEl)
            {
                emailEl.href = `mailto:${email}?subject=Request - ${propObj.name} Hotel & Conference Center`;
                emailEl.childNodes[1].nodeValue = email;
            }
        }
    })
}