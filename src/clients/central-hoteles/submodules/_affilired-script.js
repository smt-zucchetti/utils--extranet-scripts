import * as utils from './../../../lib/utils'

export function affiliredScript()
{
    utils.populateBeAttributes().then(() => 
    {
        if(['17417','17418'].includes(utils.BE_ATTRIBUTES.propId))
        {
            (function() {
                var sc = document.createElement('script'); sc.type = 'text/javascript'; sc.async = true;
                sc.src = '//customs.affilired.com/track/?merchant=4879';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);
            })();
            
            if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
            {
                var orderRef = `${utils.BE_ATTRIBUTES.cmWidgetValues.code} ${utils.BE_ATTRIBUTES.cmWidgetValues.propertyName}`;
                var payoutCodes = '';
                var offlineCode = '';
                var uid = utils.BE_ATTRIBUTES.cmWidgetValues.propertyId;
                var htname = '';
                var merchantID = 4879;
                var pixel = 0;
                var orderValue = utils.BE_ATTRIBUTES.cmWidgetValues.total; 
                var checkOutDate = utils.BE_ATTRIBUTES.cmWidgetValues.endDateNumbers; 
                var currencyCode = utils.BE_ATTRIBUTES.cmWidgetValues.currency;
    
                const url = `https://scripts.affilired.com/v2/confirmation.php?merid=4879&uid=${utils.BE_ATTRIBUTES.cmwidgetValues.propertyId}}`
                
                utils.loadScriptAsync(url).then(() =>
                {
                    recV3 (orderValue , orderRef, merchantID, uid , htname, pixel, payoutCodes,offlineCode,checkOutDate,currencyCode)
                });
            }
        }
    })
}