import * as utils from './../../../lib/utils'

utils.loadScript('https://www.googletagmanager.com/gtag/js?id=UA-215800552-1')

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-215800552-1');