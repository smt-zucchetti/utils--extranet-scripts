import * as utils from './../../../lib/utils'

export function askPixel()
{
    utils.loadScriptAsync('https://pixel.asksuite.com/asktag.js').then(() =>
    {
        window.AskPixelObject = 
        {
            options: 
            {
                currency: 'USD'
            }
        }    
    })
}