import * as utils from './../../../lib/utils'

export function removeAppleWalletButton()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page' && utils.BE_ATTRIBUTES.propId === '18509' /*tesoro-ixtapa*/)
        {
            import('./styles/remove-apple-wallet-button.scss');
        }
    })
}