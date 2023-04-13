import * as utils from './../../../lib/utils';
import { props } from './data/props';

export function gtm4StandardCodes()
{
    utils.populateBeAttributes().then(() =>
    {
        const brand = props[parseInt(utils.BE_ATTRIBUTES.propId)].brand;
        let gtmCode = null;
        
        if(brand === 'westmark')
        {
            gtmCode = 'GTM-MTDPSD';
        }
        else if(brand === 'princess')
        {
            gtmCode = '	GTM-T53RGZ';
        }
    
        if(!gtmCode)
        {
            utils.gtm4StandardCode(gtmCode);
        }
    });
}