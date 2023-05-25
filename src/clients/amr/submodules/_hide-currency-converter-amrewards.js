import  * as utils from './../../../lib/utils'

export async function hideCurrencyConverterAmrewards()
{
    await utils.populateBeAttributes();
    
    if(['13474','13475','13476','13477','13478','13479'].includes(utils.BE_ATTRIBUTES.styleId))
    {
        import('./styles/hide-currency-converter-amrewards.scss');
    }
}