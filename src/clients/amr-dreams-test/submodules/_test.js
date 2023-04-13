import * as utils from './../../../lib/utils';

export function test()
{
    utils.populateBeAttributes().then(() =>
    {
        const obj =
        {
            total: utils.BE_ATTRIBUTES.cmWidgetValues.total,
            totalIncludedTaxes: utils.BE_ATTRIBUTES.cmWidgetValues.totalIncludedTaxes,
            totalNoTaxes: utils.BE_ATTRIBUTES.cmWidgetValues.totalNoTaxes,
            totalTaxes: utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes,
            priceNight: utils.BE_ATTRIBUTES.cmWidgetValues.priceNight,
            nights: utils.BE_ATTRIBUTES.cmWidgetValues.nights
        }
        
        
        console.log(obj);    
    });
    
}