import * as utils from './../../../lib/utils'

export function thankYouPageGroupIdIssue()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.page === 'thank_you_page')
        {
            const url = window.location.href
            if(url.includes('id_gruppo'))
            {
                const newUrl = url.replace('&id_gruppo=18164', '')
                window.location.href = newUrl
            }
        }
    })
}