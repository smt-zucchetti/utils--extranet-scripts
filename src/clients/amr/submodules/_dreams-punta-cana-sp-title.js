import * as utils from './../../../lib/utils'

export function dreamsPuntaCanaSPTitle()
{
    utils.populateBeAttributes().then(() => 
    {
        const beType = utils.BE_ATTRIBUTES.beType,
        propId = utils.BE_ATTRIBUTES.propId,
        styleId = utils.BE_ATTRIBUTES.styleId;
        
        if(beType === 2 && propId === '21681' && styleId === '16609')
        {
            const propNameEl = document.querySelector('form#thefrm > h2');
            
            if(propNameEl)
            {
                propNameEl.innerHTML = 'Dreams Macao Beach Punta Cana Spa and Gift Shop';
            }
            else
            {
                console.log('prop name element not found');
            }
        }
    })
}