import * as utils from './../../../lib/utils';

export function tripTeaseScriptElPaso()
{
    utils.populateBeAttributes().then(() =>
    {
        if(utils.BE_ATTRIBUTES.cmValues.cmPropertyId === '15815')
        {
            utils.loadScript('https://onboard.triptease.io/bootstrap.js?integrationId=01DGQ8HHCCEXP80VRP401PPSHB');   
        }
    });
}