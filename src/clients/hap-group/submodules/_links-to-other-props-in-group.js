import { props } from './data/props';
import * as utils from './../../../lib/utils';
import { importStyleVars } from './shared/import-style-vars';

export function linksToOtherPropsInGroup()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.page === 'first_page')
        {
            const propObj = props[parseInt(utils.BE_ATTRIBUTES.propId)];
            const el = document.getElementById('vantaggi');
    
            if(propObj.codeName === 'westmark-sitka')
            {
                return;
            }
    
            if(el)
            {
                const span = document.createElement('span');
                span.innerHTML = propObj.brand === 'westmark' ? 'Other Westmark Hotels: ' : 'Other Princess Lodges: ';
                span.classList.add('inserted-anchor');
                el.insertBefore(span, document.querySelector('.img_premium_main'));
            }
            
            for (const propObjInLoop of Object.values(props))
            {
                if(
                    propObjInLoop.codeName !== propObj.codeName && 
                    propObjInLoop.brand === propObj.brand && 
                    propObjInLoop.codeName !== 'westmark-sitka'
                )
                {
                    const anc = document.createElement('a');
                    anc.innerHTML = propObjInLoop.nameAbbrev;
                    anc.setAttribute('href', propObjInLoop.href);
                    anc.setAttribute('target', '_blank');
                    anc.classList.add('inserted-anchor');
                    el.insertBefore(anc, document.querySelector('.img_premium_main'));
                }
            }
    
            importStyleVars().then(() =>
            {
                import('./styles/links-to-other-props-in-group.scss');
            })   
        }
    })
}