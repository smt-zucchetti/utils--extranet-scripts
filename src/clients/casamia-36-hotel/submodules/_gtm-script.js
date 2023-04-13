import * as utils from './../../../lib/utils'

export function gtmScript()
{
    utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=UA-224656137-1').then(() => 
    {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-224656137-1');
    });
}

