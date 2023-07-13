import * as utils from './../../../lib/utils';

export async function wihpCodeNew()
{
    await utils.populateBeAttributes(); 
    
    const propIdToWihpId = 
    {
        '17781': '198179',
        '17783': '198180',
        '17784': '198178'
    };
    const wihpId = propIdToWihpId[utils.BE_ATTRIBUTES.propId];
        
    utils.wihpCodeNew(wihpId, '436195525', 'vz3pCPyf_fIBEMWh_88B');   
            
        
}

