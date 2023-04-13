import * as utils from './../../../lib/utils'

export function googleAdsConversionTagGlobal()
{
    //Global site tag (gtag.js) - Google Ads: 1058332009
    utils.loadScript('https://www.googletagmanager.com/gtag/js?id=AW-1058332009')
    window.dataLayer = window.dataLayer || [] 
    function gtag()
    {
        dataLayer.push(arguments)
    } 
    gtag('js', new Date())
    gtag('config', 'AW-1058332009')
}