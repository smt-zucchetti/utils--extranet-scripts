import * as utils from './../../../lib/utils'

export function amrCookiePolicy()
{
    utils.loadScriptAsync('https://consent.cookiebot.com/uc.js?cbid=c327d4bd-a57b-4407-9ca7-f9ce3f38a1e7').then(() =>
    {
        if(Cookiebot.regulations.gdprApplies)
        {
            const dmns = ['booking.amrcollection.com','booking.nowresorts.com'];
            let renew = false;
            
            dmns.forEach(dmn => 
            {
                if(window.location.href.includes(dmn) && !document.referrer.includes(dmn))
                {
                    renew = true;
                }
            })
            if(renew)
            {
                Cookiebot.renew();
            }   
        }
    })
}

