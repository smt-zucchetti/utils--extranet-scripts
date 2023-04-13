import * as utils from './../../../lib/utils' 

export function gtmThankYouPage()
{
    utils.populateBeAttributes().then(() =>
    {
        const obj = 
        {
            transactionId: utils.BE_ATTRIBUTES.cmValues.cmCode,
            transactionAffiliation: utils.BE_ATTRIBUTES.cmValues.cmPropertyName,
            transactionTotal: utils.BE_ATTRIBUTES.cmValues.cmTotal,
            transactionTax: utils.BE_ATTRIBUTES.cmValues.cmTotalTaxes,
            //transactionShipping: '[shipping variable]',
            transactionProducts: 
            utils.BE_ATTRIBUTES.cmValues.cmRoomCod.split(' - ').map((roomCod, idx) =>
            {
                return {
                    sku: roomCod,
                    name: utils.BE_ATTRIBUTES.cmValues.cmRoomName.split(' - ')[idx],
                    category: utils.BE_ATTRIBUTES.cmValues.cmRoomType.split(' - ')[idx],
                    price: utils.BE_ATTRIBUTES.cmValues.cmPriceNight,
                    quantity: utils.BE_ATTRIBUTES.cmValues.cmRooms
                }
            })
        }
        
        window.dataLayer = window.dataLayer || []
        dataLayer.push(obj);
        
        console.log('gtm object included:', obj)
    })
}