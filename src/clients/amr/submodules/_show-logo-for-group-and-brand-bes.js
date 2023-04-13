import * as utils from './../../../lib/utils';

export function showLogoForGroupAndBrandBes()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.groupId && !utils.BE_ATTRIBUTES.propId)
        {
            import('./styles/show-logo-for-group-and-brand-bes.scss'); 
        }
    });
}