import * as utils from './../../../lib/utils';

export async function ghaAdWords()
{
    await utils.populateBeAttributes();
    
    if(utils.BE_ATTRIBUTES.cmWidgetValues.propId === '22383')
    {
        return;
    }
    
    function gtag()
    {
        dataLayer.push(arguments);
    }
    
    if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        await utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=AW-970589960');

        window.dataLayer = window.dataLayer || [];
        
        gtag('js', new Date());

        gtag('config', 'AW-970589960');

        gtag('event', 'conversion', 
        {
          'send_to': 'AW-970589960/9u1JCLCgtAkQiI7ozgM',
          'value': utils.BE_ATTRIBUTES.cmWidgetValues.valore,
          'currency': 'USD',
          'transaction_id': utils.BE_ATTRIBUTES.cmWidgetValues.codice
        });
    }
    
    
    

}