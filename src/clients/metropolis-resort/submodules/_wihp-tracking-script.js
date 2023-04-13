import * as utils from './../../../lib/utils'

export function wihpTrackingScript()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            let url = 'https://secure-hotel-tracker.com/tics/log.php?act=conversion&idbe=3&date_format=YYYY-MM-DD&idwihp=186559'
    
            const obj = 
            {
                ref: utils.BE_ATTRIBUTES.cmValues.cmCode,
                amount: utils.BE_ATTRIBUTES.cmValues.cmTotalNoTaxes,
                currency: utils.BE_ATTRIBUTES.cmValues.cmCurrency,
                checkin: utils.BE_ATTRIBUTES.cmValues.cmStartDateNumbers,
                checkout: utils.BE_ATTRIBUTES.cmValues.cmEndDateNumbers
            }
            
            for (const [key, value] of Object.entries(obj)) 
            {
                url += `&${key}=${value}`
            }
            
            utils.loadScript(url)     
        }
    })
}