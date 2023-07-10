import * as utils from './../../../lib/utils';

export async function changeFooterHref()
{
    await utils.getElementBySelector('#hp .animsition-link');
    let homeEl = document.querySelector('#hp .animsition-link')
    
    await utils.populateBeAttributes(); 
    if(utils.BE_ATTRIBUTES.beType === utils.BE_TYPE.Premium)
    {
        homeEl.setAttribute('href', 'https://www.joondalupresort.com.au');        
    }      
}

