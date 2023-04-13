import * as utils from './../../../lib/utils';

export function removePromoMessagesFromAMRewardsBEs()
{
    utils.populateBeAttributes().then(() =>
    {
        const styleId = parseInt(utils.BE_ATTRIBUTES.styleId);
        if([13474, 13475, 13476, 13477, 13478, 13479].includes(styleId))
        {
            import('./styles/remove-promo-messages-from-amrewards-bes.scss');
        }
    })
}