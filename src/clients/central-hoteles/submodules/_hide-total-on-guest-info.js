import * as utils from './../../../lib/utils';

export function hideTotalOnGuestInfo()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'guest_info')
        {
            import('./styles/hide-total-on-guest-info.scss');
        }
    });
}