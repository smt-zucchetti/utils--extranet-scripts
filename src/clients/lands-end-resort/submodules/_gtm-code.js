import * as utils from './../../../lib/utils';

export function gtmCode()
{
    function gtag(){dataLayer.push(arguments)};
    
    utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-86LDBJVYR7').then(() =>
    {
        window.dataLayer = window.dataLayer || [];
        gtag('js', new Date());
        gtag('config', 'G-86LDBJVYR7');
    });
        
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            const obj = 
            {
                send_to: 'G-86LDBJVYR7',
                value: utils.CURRENT_SCRIPT.getAttribute('cmTotalNoTaxes'),
                transaction_id: utils.CURRENT_SCRIPT.getAttribute('cmCode')
            };
            
            console.log('purchase event', obj);
            gtag('event', 'purchase', obj);
        }
    });
}