import * as utils from './../../../lib/utils'

export function hideNotRefundableText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            import('./styles/hide-not-refundable-text.scss');
        }
    })
}