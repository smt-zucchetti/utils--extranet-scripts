import * as utils from './../../../lib/utils'

export function gtmCode()
{
    utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=UA-218766190-1').then(() =>
    {
        utils.populateBeAttributes().then(() => 
        {
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            
            gtag('js', new Date())
            gtag('config', 'UA-218766190-1')
        
            if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                const obj = 
                {
                    transaction_id: utils.BE_ATTRIBUTES.cmValues.cmCode,
                    value: utils.BE_ATTRIBUTES.cmValues.cmTotal,
                    tax: utils.BE_ATTRIBUTES.cmValues.cmTotalTaxes,
                    currency: 'USD'
                }
                
                gtag('event', 'purchase', obj)
            }
        })
    })
    
}

