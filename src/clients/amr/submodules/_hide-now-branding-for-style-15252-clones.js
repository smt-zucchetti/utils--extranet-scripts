import * as utils from './../../../lib/utils';

export function hideNowBrandingForStyle15252Clones()
{
    utils.populateBeAttributes().then(() => 
    {
        const styleId = utils.BE_ATTRIBUTES.styleId,
        propId = utils.BE_ATTRIBUTES.propId;
        
        if(styleId === '18224' && ['11353', '10343'].includes(propId))
        {
            let msg = propId === '11353' ? 'Dreams Onyx Punta Cana' : propId === '10343' ? 'Dreams Jade Riviera Cancun' : null;
            
            import('./styles/hide-now-branding-for-style-15252-clones.scss');
        }
    })
}