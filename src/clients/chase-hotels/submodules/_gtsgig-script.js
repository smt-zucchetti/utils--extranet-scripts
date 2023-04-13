import * as utils from './../../../lib/utils'

export function gtsgigScript()
{
    utils.populateBeAttributes().then(() =>
    {
        const dataObj = {
            15775: 'chasehotelbrea', //Brea
            15776: 'chasehoteltampa', //Tampa
            15813: 'chasehotelnewark', //Newark
            15815: 'chasehotelelpaso' //El Paso
        }

        const hotId = dataObj[parseInt(utils.BE_ATTRIBUTES.cmValues.cmPropertyId)]
        utils.loadScript(`https://widgets.gtsgig.com/boot.js?hotel=${hotId}`)
    })
}