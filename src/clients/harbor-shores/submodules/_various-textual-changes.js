import * as utils from './../../../lib/utils'

export function variousTextualChanges() 
{
    utils.waitForElement('#link-open-sheet .dx', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Property Info'   
        }
    }) 
    
    utils.waitForElement('ul.scheda_tabs li a[href="#scheda_camere"]', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Amenities'   
        }
    })    
    
    utils.waitForElement('ul.scheda_tabs li a[href="#scheda_caratteristiche"]', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Policies'   
        }
    })    
    
    utils.waitForElement('#discount-code-button', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Enter Corporate or Discount Code'   
        }
    })   
    
    utils.waitForElement('#quick_reserve > p.t-center a', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Cancel/Modify Reservation'   
        }
    })   
    
    utils.waitForElement('#tab_carrello ul li:nth-of-type(2) a', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Package and Offers'   
        }
    })   
    
    utils.waitForElement('#pacchetti .filters-button-group button:first-of-type', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'See All Offers'   
        }
    })
    
    utils.waitForElement('#pacchetti .filters-button-group button:last-of-type', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'All Rates'   
        }
    })
    
    utils.waitForElement('#scheda_hotel ul.scheda_tabs li:last-of-type a', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Location'   
        }
    })
    
    utils.waitForElement('#box_numero_ospiti > .riga span', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Choose Number of Guests'   
        }
    })
    
    utils.waitForElement('#button_aggiungi_camera .pulsanti .aggcamera', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Add Another Room'   
        }
    })
    
    utils.waitForElement('#calendar > h2', false, 10000).then((el) =>
    {
        if(el)
        {
            el.innerHTML = 'Select Arrival Date'   
        }
    })
    
    utils.waitForElement('#riepilogo_viaggio > .box_contenuto > .riga > h2', false, 10000).then(el =>
    {
        if(el)
        {
            el.innerHTML = 'Travel Summary'
        }
    })
}