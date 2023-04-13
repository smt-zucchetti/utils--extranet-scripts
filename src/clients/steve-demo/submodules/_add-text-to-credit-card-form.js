export function addTextToCreditCardForm()
{
    const li = document.createElement('li');
    li.classList.add('text-to-cc-form');
    li.textContent = 'Credit Card Information: For guarantee (card will not be charged at time of booking)';
    
    const el = document.getElementById('contenitore_secure');
    el.prepend(li);
    
    import('./styles/add-text-to-credit-card-form.scss');
}