import * as utils from './../../../lib/utils'

export function changePropertyClosedText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            utils.waitForElement('.seleziona_camera.messaggio_chiusura > h2').then(el =>
            {
                if(!el.textContent)
                {
                    return;   
                }
                
                if(el.textContent.toUpperCase().includes('THE PROPERTY IS CLOSED'))
                {
                    el.textContent = el.textContent.replace('is closed', 'is not available')
                }
                else if(el.textContent.toUpperCase().includes('EL HOTEL ESTÁ CERRADO DESDE'))
                {
                    el.textContent = el.textContent.replace('está cerrado desde', 'no se encuentra disponible desde')
                }
            })
        }
    })
}