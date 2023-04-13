import * as utils from './../../../lib/utils'

export function hidePrintButtonThankYouPage()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page') 
        {
            import('./styles/hide-print-button-thank-you-page.scss');
        }
    })
}