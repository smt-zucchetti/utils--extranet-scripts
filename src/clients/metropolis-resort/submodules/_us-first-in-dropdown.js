import * as utils from './../../../lib/utils'

export function usFirstInDropdown()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.page === 'guest_info')
        {
            utils.getElementBySelector('#nazione').then(() => 
            {
                const sel = document.getElementById('nazione')
                if(sel)
                {
                    sel.selectedIndex = 236
                }
            })      
        }
    })
}