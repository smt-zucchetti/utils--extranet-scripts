import * as utils from './../../../lib/utils';

export function googleTagManager()
{
    utils.loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=UA-60127459-1').then(() => 
    {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-60127459-1');
    });
}