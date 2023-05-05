import * as utils from './../../../lib/utils';

export function linkToOtherPropInGroup()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.page === 'first_page')
        {
            const propId = utils.BE_ATTRIBUTES.propId;
            
            if(!['23962','23963'].includes(propId))
            {
                return;
            }
            
            const span = document.createElement('span');
            span.classList.add('inserted-anchor');
            span.textContent = 'Visit our sister property ';
            
            document.getElementById('vantaggi').insertBefore(span, document.querySelector('.img_premium_main'));

            const anc = document.createElement('a');
            anc.classList.add('inserted-anchor');
            anc.setAttribute('href', propId === '23962' ? 
                'https://reservations.verticalbooking.com/premium/index.html?id_albergo=23963&dc=6514&lingua_int=usa&id_stile=18694' :
                'https://reservations.verticalbooking.com/premium/index.html?id_albergo=23962&dc=1258&lingua_int=usa&id_stile=18693'
            );
            anc.setAttribute('target', '_blank');
            anc.textContent = propId === '23962' ? '3rd Street Flats' : 'The Atticus Hotel';
            
            document.getElementById('vantaggi').insertBefore(anc, document.querySelector('.img_premium_main'));

            import('./styles/_colors.scss');
            import('./styles/_links-to-other-props-in-group.scss');
            
        }
    });
}