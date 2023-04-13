import * as utils from './../../../lib/utils';

export function hideAddServicesAndAmenitiesButton()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            import('./styles/hide-add-services-and-amenities-button.scss');     
        }
    });
}