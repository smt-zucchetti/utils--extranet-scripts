import * as utils from './../../../lib/utils'

export function getCmVariables()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'first_page')
        {
            /*const el = document.createElement('div')
            el.innerHTML = "@@LANGUAGE@@"
            document.body.appendChild(el) 
            
            console.log('in summary page z')*/
        }
    })
}