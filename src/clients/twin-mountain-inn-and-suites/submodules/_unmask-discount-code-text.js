export function unmaskDiscountCodeText()
{
    const discInput = document.getElementById('qr_generic');
    discInput.setAttribute('type', 'text');
}