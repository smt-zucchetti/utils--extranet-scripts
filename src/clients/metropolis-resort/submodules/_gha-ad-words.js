import * as utils from './../../../lib/utils'

export function ghaAdWords()
{
    await utils.populateBeAttributes();
    
    function gtag()
    {
        dataLayer.push(arguments)
    }
    
    //Global Site Tag (gtag.js) - GHA/ADWORDS
    await utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-XDGCN95298');
    
    window.dataLayer = window.dataLayer || []
    gtag('js', new Date())
    gtag('config', 'G-XDGCN95298')
    
    if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
    {
        gtag('event', 'purchase', 
        {
            send_to: [ 'AW-769782074/Bf7DCODR5qwBELrih-8C', 'HA-75' ],
            transaction_id: utils.BE_ATTRIBUTES.cmValues.cmCode,
            value: utils.BE_ATTRIBUTES.cmValues.cmTotalNoTaxes,
            currency: utils.BE_ATTRIBUTES.cmValues.cmCurrency,
            items: 
            [{
                id: '186559',
                start_date: utils.BE_ATTRIBUTES.cmValues.cmStartDateNumbers,
                end_date: utils.BE_ATTRIBUTES.cmValues.cmEndDateNumbers
            }]
        })
    }  
}