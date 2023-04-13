import * as sp from './../../../lib/serviceProviders'
import * as utils from './../../../lib/utils'

export function all()
{
    const dataObj = 
    {
        17781: {
            title: 'Hotel Hive',
            color: '#f7cf0f'
        },
        17782: {
            title: 'One Washington Circle',
            color: '#0f3577'
        },    
        21353: {
            title: 'Pod Philly',
            color: '#8fc3ea'
        },
        17783: {
            title: 'The River Inn',
            color: '#8a1538'
        },
        17784: {
            title: 'The Windsor Suites',
            color: '#1b3643'
        }
    }
    
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.beType === utils.BE_TYPE.SP)
        {
            sp.makeHeadersVisible()
            sp.hideLowerSPForm()
            sp.selectBirthdate()
            sp.checkIHaveReadNote()
            sp.SPCheckCovidText()
            sp.CCDetailsPaneSPWhiteBg() 
            sp.addPropertyTitle(dataObj[utils.BE_ATTRIBUTES.propId].title)
            sp.addAccentColor(dataObj[utils.BE_ATTRIBUTES.propId].color)
        }
    })
}