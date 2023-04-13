import * as utils from './../../../lib/utils';

export function changeFirstNameLabelToName()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            import('./styles/change-first-name-label-to-name.scss');     
        }
    });
}