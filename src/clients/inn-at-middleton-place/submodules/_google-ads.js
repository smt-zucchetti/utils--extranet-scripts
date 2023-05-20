import * as utils from './../../../lib/utils'

export function googleAds()
{
    //Global site tag (gtag.js) - Google Ads: 1058332009
    utils.loadScript('https://www.googletagmanager.com/gtag/js?id=AW-1058332009');
    window.dataLayer = window.dataLayer || [];
    function gtag()
    {
        dataLayer.push(arguments);
    } 
    gtag('js', new Date());
    gtag('config', 'AW-1058332009');
    
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            gtag('event', 'conversion', 
            {
                send_to: 'AW-1058332009/2A-7CKO94wEQ6brT-AM', 
                value: utils.BE_ATTRIBUTES.cmWidgetValues.total, 
                currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency, 
                transaction_id: utils.BE_ATTRIBUTES.cmWidgetValues.code 
            });
        }
    });
}