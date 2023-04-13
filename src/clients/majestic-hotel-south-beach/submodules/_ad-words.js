import * as utils from './../../../lib/utils'

export function adWords()
{
    utils.populateBeAttributes().then(() =>
    {
        utils.loadScriptAsync("https://www.googletagmanager.com/gtag/js?id=AW-943735056").then(() =>
        {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "AW-943735056");
        
            if(utils.BE_ATTRIBUTES.page === "thank_you_page")
            {
                const eventObj = {     
                    send_to: "AW-943735056/_-ZaCJLxs6kCEJCCgcID",
                    value: utils.BE_ATTRIBUTES.cmWidgetValues.total, 
                    currency: utils.BE_ATTRIBUTES.cmWidgetValues.currency,
                    transaction_id: utils.BE_ATTRIBUTES.cmWidgetValues.code,
                };
                gtag("event", "conversion", eventObj);
            }
        });
    });
}