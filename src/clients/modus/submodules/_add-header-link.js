import * as utils from './../../../lib/utils'

export function addHeaderLink()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.propId === '17784' /* Windsor Suites */)
        {
            const ancEl = document.createElement('a')
            ancEl.innerText = 'Click here to book our premium collection of penthouse-style suites & amenities, The Skyline Level'
            ancEl.setAttribute('href', 'https://reservations.verticalbooking.com/reservations/index.html?id_stile=17356&headvar=ok&lingua_int=usa&id_albergo=17784&dc=8551&tipo_camera=2')
            ancEl.setAttribute('id', 'added-anchor')
            
            let logoPane
            let anchorIntervalId = setInterval(function()
            {
                logoPane = document.getElementById('logo-nome-hotel')
                if(logoPane)
                {
                    clearInterval(anchorIntervalId)
                    logoPane.appendChild(ancEl)
                }
            },200)
            
            import('./styles/add-header-link.scss');
        }
    })
}