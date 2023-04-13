import * as utils from './../../../../lib/utils';

export async function getBrandId()
{
    await utils.populateBeAttributes();
    
    let brandId = utils.BE_ATTRIBUTES.brandId ? parseInt(utils.BE_ATTRIBUTES.brandId) : parseInt(utils.CURRENT_SCRIPT.getAttribute('brand'));
 
    //When coming throught from group_index2.html or index.html, brandId is 0, even once a property is selected. This seeks to solve that. 
    //Example URL: https://booking.amrcollection.com/premium/group_index.html?id_gruppo=9437&dc_gruppo=1151&lingua_int=eng&id_stile=18303&adulti1=2&bambini1=0&tot_camere=1&gg=9&mm=11&aa=2022&ggf=12&mmf=11&aaf=2022&notti_1=3 

    //Also, on some pages (like the results page), the BE loads the CM scripts asynchronously, and so doesn't invlude the brand attribute
    let propCode = '';
    if((isNaN(brandId) || brandId === 0) && utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode)
    {
        //St. James Club Morgan Bay
        if(utils.BE_ATTRIBUTES.propId === '25396')
        {
            brandId = 163;
        }
        else
        {
            const propCodeToBrandId = { SU: 1, NO: 2, SE: 3, DR: 4, ZO: 5, BR: 6 };
            
            propCode = utils.BE_ATTRIBUTES.cmWidgetValues.propertyCode.substring(0, 2);
            brandId = propCodeToBrandId[propCode];
        }
    }

    return brandId;
}