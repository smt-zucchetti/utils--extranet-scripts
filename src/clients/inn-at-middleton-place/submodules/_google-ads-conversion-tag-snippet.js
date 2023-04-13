import * as utils from './../../../lib/utils'

export function googleAdsConversionTagSnippet()
{
    //Event snippet for Reservations conversion page
    function gtag()
    {
        dataLayer.push(arguments)
    }
    
    gtag('event', 'conversion', 
    {
        send_to: 'AW-1058332009/2A-7CKO94wEQ6brT-AM', 
        value: utils.CURRENT_SCRIPT.getAttribute('cmTotal'), 
        currency: utils.CURRENT_SCRIPT.getAttribute('cmCurrency'), 
        transaction_id: utils.CURRENT_SCRIPT.getAttribute('cmCode') 
    })
}