import * as utils from './../../../lib/utils';

export function prop14356UncheckNextAndHideCheckboxes()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.propId === '14356' && utils.BE_ATTRIBUTES.page === 'results')
        {
            import('./styles/prop-14356-uncheck-next-and-hide-checkboxes.scss');
        }
    });
}