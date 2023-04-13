import * as utils from './../../../lib/utils'

export function addBgImagesToPropertyButtons()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '14356' && utils.BE_ATTRIBUTES.page === 'results')
        {
            import('./styles/add-bg-images-to-property-buttons.scss');     
        }
    });
}