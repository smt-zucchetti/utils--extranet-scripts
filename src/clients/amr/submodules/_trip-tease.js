import { tripTeaseData } from './data/trip-tease-data';
import * as utils from './../../../lib/utils';

export function tripTease()
{
    utils.populateBeAttributes().then(() => 
    {
        const propId = utils.BE_ATTRIBUTES.propId; //used as string here

        if(Object.keys(tripTeaseData).includes(propId))
        {
            let apiKey = tripTeaseData[propId];
            
            if(utils.BE_ATTRIBUTES.page === 'results')
            {
                let pfWidgEl = document.createElement('div');
                pfWidgEl.classList.add('price-fighter-widget');
                
                let pfWidgObj = 
                {
                    'data-pf-hotelkey': apiKey,
                    'data-pf-direct-price': utils.BE_ATTRIBUTES.cmWidgetValues.bestPrice,
                    'data-pf-currency': utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                    'data-pf-room-rate': utils.BE_ATTRIBUTES.cmWidgetValues.rateName,
                    'data-pf-checkin': utils.BE_ATTRIBUTES.cmWidgetValues.startDateNumbers,
                    'data-pf-checkout': utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers,
                    'data-pf-adults': utils.BE_ATTRIBUTES.cmWidgetValues.adults,
                    'data-pf-children': utils.BE_ATTRIBUTES.cmWidgetValues.children,
                    'data-pf-language': utils.BE_ATTRIBUTES.cmWidgetValues.language
                };
                
                for(const [key, value] of Object.entries(pfWidgObj)) 
                {
                   pfWidgEl.setAttribute(key, value);
                }
                
                utils.getElementBySelector('#form_selezione_prodotto_camera').then(() =>
                {
                    document.body.appendChild(pfWidgEl);
                });
            }
         
            let pfScript = document.createElement('script');
            pfScript.setAttribute('src', `https://paperboy.triptease.net/7LgmPOoy5.js?hotelkey=${apiKey}`);
            
            document.body.appendChild(pfScript);
            
            if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                let cmTotal = utils.BE_ATTRIBUTES.cmWidgetValues.total;
                let cmCode = utils.BE_ATTRIBUTES.cmWidgetValues.code;
               
                let pfScript2 = document.createElement('script');
                pfScript2.setAttribute('src', `https://widget.triptease.net/confirm.js?hotelkey=${apiKey}&bookingValue=${cmTotal}&bookingCurrency=USD&bookingReference=${cmCode}`);
                
                document.body.appendChild(pfScript2);
            }
        }
    });
}