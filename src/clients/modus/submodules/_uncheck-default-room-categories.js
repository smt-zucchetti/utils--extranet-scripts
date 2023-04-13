import * as utils from './../../../lib/utils'

export function uncheckDefaultRoomCategories(paramObj)
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.page === 'results' && ['17781', '17784'].includes(utils.BE_ATTRIBUTES.propId))
        {
            const selector = utils.BE_ATTRIBUTES.propId === '17781' ? '.list_room_cat:nth-of-type(1) > a' : '.list_room_cat:nth-of-type(3) > a';
        
            utils.waitForElement(selector, false, 5000).then(el =>
            {
                el.click();
            });
        }
        
        
    });
}

