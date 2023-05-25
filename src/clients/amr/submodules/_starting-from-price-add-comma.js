import * as utils from './../../../lib/utils';
import * as common from './common_code/main';

export async function startingFromPriceAddComma()
{
    await utils.populateBeAttributes();
    
    const page = utils.BE_ATTRIBUTES.page;
    const curr = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
    const sfPrices = document.querySelectorAll('#box-risultati .section_classicamere .campo .price.buona_tariffa');
    
    const brandId = await common.getBrandId();
    const brand = brandId ? common.getBrandNameFromBrandId(brandId) : null;

    //console.log('brand is here', brand, brandId);

    if(['Sunscape', 'Secrets', 'Breathless', 'Dreams', 'Zoetry', 'Now', 'Impression'].includes(brand) && page === 'results' && curr === 'MXN')
    {
        sfPrices.forEach(sfPrice =>
        {
            const unFmtdprice = sfPrice.innerText;
            const fmtdPrice = unFmtdprice.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,");
            sfPrice.innerText = fmtdPrice;
        });   
    }
}