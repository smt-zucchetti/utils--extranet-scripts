import * as utils from './../../../lib/utils';
import { props } from './data/props';

export function portentGoogleAnalytics()
{
    utils.populateBeAttributes().then(() => 
    {
        const propObj = props[parseInt(utils.BE_ATTRIBUTES.propId)];
        
        if(propObj.codeName === 'westmark-sitka')
        {
            return;
        }

        const gtmCodeObj = 
        {
            westmark: 'GTM-MTDPSD',
            princess: 'GTM-T53RGZ'
        };
        
        utils.googleTagManager(gtmCodeObj[propObj.brand]);
        
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            utils.populateBeAttributes().then(() => 
            {
                const propObj = props[parseInt(utils.BE_ATTRIBUTES.propId)];
                
                if(propObj.codeName === 'westmark-sitka')
                {
                    return
                }
                
                // const roomCodes = utils.CURRENT_SCRIPT.getAttribute('cmRoomCod').split(' - ').join(',')
                // const roomNames = utils.CURRENT_SCRIPT.getAttribute('cmRoomName').split(' - ').join(',')
                // const qty = (utils.CURRENT_SCRIPT.getAttribute('cmNights') / utils.CURRENT_SCRIPT.getAttribute('cmRooms')) * utils.CURRENT_SCRIPT.getAttribute('cmRooms') 
                
                const roomCodes = utils.BE_ATTRIBUTES.cmWidgetValues.roomCod.split(' - ').join(',');
                const roomNames = utils.BE_ATTRIBUTES.cmWidgetValues.roomName.split(' - ').join(',');
                const qty = (utils.BE_ATTRIBUTES.cmWidgetValues.nights / utils.BE_ATTRIBUTES.cmWidgetValues.rooms) * utils.BE_ATTRIBUTES.cmWidgetValues.rooms; 
            
            
                dataLayer.push({ ecommerce: null })  // Clear the previous ecommerce object.
                dataLayer.push
                (
                    {
                        event: 'Purchase',
                        ecommerce: 
                        {
                            purchase: 
                            {
                                actionField: 
                                {
                                    affiliation: utils.BE_ATTRIBUTES.cmWidgetValues.propertyName,
                                    coupon: utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto,
                                    id: utils.BE_ATTRIBUTES.cmWidgetValues.code, // Transaction ID. Required for purchases and refunds.
                                    revenue: utils.BE_ATTRIBUTES.cmWidgetValues.total, // Total transaction value (incl. tax and shipping)
                                    tax: utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes
                    
                                }
                            },
                            products: 
                            [
                                {
                                    brand: utils.BE_ATTRIBUTES.cmWidgetValues.propertyName,
                                    category: utils.BE_ATTRIBUTES.cmWidgetValues.roomType,
                                    coupon: utils.BE_ATTRIBUTES.cmWidgetValues.codiceSconto, // Optional fields may be omitted or set to empty string.
                                    id: roomCodes,
                                    name: roomNames, // Name or ID is required.
                                    price: utils.BE_ATTRIBUTES.cmWidgetValues.priceNight,
                                    quantity: qty
                                }    
                            ]
                        }
                    }
                )
            })
        }
    })
}