import * as utils from './../../../lib/utils'

utils.getElementBySelector('#hp .animsition-link').then(() =>
{
    let homeEl = document.querySelector('#hp .animsition-link')
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.beType === utils.BE_TYPE.Premium)
        {
            homeEl.setAttribute('href', 'https://www.joondalupresort.com.au')        
        }  
    })
})

