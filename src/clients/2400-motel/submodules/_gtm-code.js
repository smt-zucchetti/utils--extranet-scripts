import * as utils from './../../../lib/utils'

export function gtmCode()
{
    utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=UA-169828708-1').then(() =>
    {
        window.dataLayer = window.dataLayer || []
        function gtag(){dataLayer.push(arguments)}
        
        gtag('js', new Date())
        gtag('config', 'UA-169828708-1')
    
        
        utils.populateBeAttributes().then(() =>
        {
            if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                const obj = 
                {
                    transaction_id: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                    value: utils.BE_ATTRIBUTES.cmWidgetValues.total,
                    tax: utils.BE_ATTRIBUTES.cmWidgetValues.totalTaxes,
                    currency: 'CAD'
                }
                
                gtag('event', 'purchase', obj)
            }
        })
    })
    
}
