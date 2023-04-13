import * as utils from './../../../lib/utils';

export function addPerNightText()
{
    if(document.body.id && document.body.id === 'pag_pacchetti')
    {
        return;
    }

    utils.populateBeAttributes().then(() =>
    {
        utils.waitForElement('.section_classicamere .campo', false, 5000).then(() =>
        {
            import('./styles/add-per-night-text.scss');
            
            const ratePriceEls = document.querySelectorAll('.section_classicamere .campo .tariffa');
            ratePriceEls.forEach(el =>
            {
                const innerEl = document.createElement('div');
                innerEl.classList.add('tariffa--per-night-text');
                innerEl.textContent += utils.BE_ATTRIBUTES.lang === 'esp' ? 'Por Noche' : 'Per Night';
                el.appendChild(innerEl); 
            });  
            
            const rateContentEls = document.querySelectorAll('.room-rate-price-value-content');
            rateContentEls.forEach(el =>
            {
                const innerEl = document.createElement('div');
                innerEl.classList.add('room-rate-price-value-content--per-night-text');
                innerEl.textContent += utils.BE_ATTRIBUTES.lang === 'esp' ? 'Por Noche' : 'Per Night';
                el.appendChild(innerEl); 
            });
        }); 
    });
}