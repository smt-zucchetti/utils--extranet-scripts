import * as utils from './../../../lib/utils';

export function changeUnlockDealVerbiage()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            import('./styles/change-unlock-deal-verbiage.scss');
        }
    });
}