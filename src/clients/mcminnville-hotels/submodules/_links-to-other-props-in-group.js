import { propNames } from './data/props'
import { propLinks } from './data/links-to-other-props-in-group'
import * as utils from './../../../lib/utils'

export function linksToOtherPropsInGroup()
{
    utils.populateBeAttributes().then(() => 
    {
        const propName = propNames[parseInt(utils.BE_ATTRIBUTES.propId)]
        const el = document.getElementById('vantaggi');
        
        if(el && propLinks)
        {
            const span = document.createElement('span')
            span.innerHTML = 'Visit our sister property '
            span.classList.add('inserted-anchor');
            el.insertBefore(span, document.querySelector('.img_premium_main'));
        
            for (const [key, value] of Object.entries(propLinks))
            {
                if(key !== propName)
                {
                    const anc = document.createElement('a');
                    anc.innerHTML = propLinks[key].text;
                    anc.setAttribute('href', propLinks[key].href);
                    anc.setAttribute('target', '_blank');
                    anc.classList.add('inserted-anchor');
                    el.insertBefore(anc, document.querySelector('.img_premium_main'));
                }
            }
            import('./styles/_colors.scss');
            import('./styles/_links-to-other-props-in-group.scss');
        }
    })
}