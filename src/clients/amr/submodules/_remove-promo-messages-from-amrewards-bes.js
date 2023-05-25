import * as utils from './../../../lib/utils';

export async function removePromoMessagesFromAMRewardsBEs()
{
    await utils.populateBeAttributes();
    
    const styleId = utils.BE_ATTRIBUTES.styleId;
    if(['13474', '13475', '13476', '13477', '13478', '13479'].includes(styleId))
    {
        import('./styles/remove-promo-messages-from-amrewards-bes.scss');
    }
}