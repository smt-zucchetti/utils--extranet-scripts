import * as utils from './../../../lib/utils';

export function hidePrintConfirmationButton()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            import('./styles/hide-print-confirmation-button.scss');
        }
    });
}