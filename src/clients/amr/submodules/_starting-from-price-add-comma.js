import * as utils from './../../../lib/utils';
import * as common from './common_code/main';


export function startingFromPriceAddComma()
{
    utils.populateBeAttributes().then(() =>
    {
        const page = utils.BE_ATTRIBUTES.page,
        curr = utils.BE_ATTRIBUTES.cmWidgetValues.currency,
        sfPrices = document.querySelectorAll('#box-risultati .section_classicamere .campo .price.buona_tariffa');
        
        common.getBrandId().then(brandId =>
        {
            const brand = brandId ? common.getBrandNameFromBrandId(brandId) : null;
    
            if(['Sunscape', 'Secrets', 'Breathless', 'Dreams', 'Zoetry', 'Now'].includes(brand) && page === 'results' && curr === 'MXN')
            {
                sfPrices.forEach(sfPrice =>
                {
                    const unFmtdprice = sfPrice.innerText;
                    const fmtdPrice = unFmtdprice.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,");
                    sfPrice.innerText = fmtdPrice;
                });   
            }
        });
    });
}