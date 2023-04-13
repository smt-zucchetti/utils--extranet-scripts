import  * as utils from './../../../lib/utils'

export function hideCurrencyConverterAmrewards()
{
    utils.populateBeAttributes().then(() =>
    {
        if([13474,13475,13476,13477,13478,13479].includes(parseInt(utils.BE_ATTRIBUTES.styleId)))
        {
            import('./styles/hide-currency-converter-amrewards.scss');
        }
    })
}