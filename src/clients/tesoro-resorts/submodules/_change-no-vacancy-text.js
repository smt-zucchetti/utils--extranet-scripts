import * as utils from './../../../lib/utils' 

export function changeNoVacancyText()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            utils.waitForElement('#messaggio_no_soluzioni > h2', false, 5000).then(el => 
            {
                if(el && utils.BE_ATTRIBUTES.lang === 'esp')
                {
                    el.textContent = 'LO SENTIMOS, NO TENEMOS DISPONIBILIDAD EN LAS FECHAS SELECCIONADAS, POR FAVOR SELECCIONE NUEVAS FECHAS'
                }
                else if(el && utils.BE_ATTRIBUTES.lang === 'usa')
                {
                    el.textContent = 'Sorry, we do not have availability on the selected dates, please select new dates'
                }
            })
        }
    })
}