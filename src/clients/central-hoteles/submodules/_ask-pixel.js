import * as utils from './../../../lib/utils'

export function askPixel()
{
    window.AskPixelObject = {
        options: {
            currency: 'USD'
        }
    };
    
    utils.loadScript('https://pixel.asksuite.com/asktag.js');
}