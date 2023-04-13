export function hideCalPricesWhenDiscountCode()
{
    console.log('start here');
    console.log(window.location.search.substr(1), window.location.search.substr(1).includes('codice_cli'));
    if(window.location.search.substr(1).includes('codice_cli'))
    {
        console.log('in here');
        import('./styles/hide-cal-prices-when-discount-code.scss');    
    }
}