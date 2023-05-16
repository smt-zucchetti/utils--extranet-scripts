import * as utils from './../../../lib/utils';

export function ixtapaMemberDealsUnlockListingStyle()
{
    utils.populateBeAttributes().then(() =>
    {
        const blockTypes = document.querySelectorAll('.blocco_tipo');
        blockTypes.forEach(blockType => 
        {
            if(blockType.querySelector('.select_room.unlock'))
            {
                //add class
                blockType.classList.add('is-unlock');
                //import style
                import('./styles/ixtapa-member-deals-unlock-listing-style.scss');
                
                //change text
                blockType.querySelector('.select_room.unlock').textContent = utils.BE_ATTRIBUTES.lang === 'esp' ? 'Seleccionar' : 'Select';
            }
        });
    });
}