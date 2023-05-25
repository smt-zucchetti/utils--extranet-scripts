import * as utils from './../../../lib/utils';

export async function roomUpgradeBoxStyle()
{
    await utils.populateBeAttributes();
    
    if(utils.BE_ATTRIBUTES.propId === '18179')
    {
        import('./styles/room-upgrade-box-style.scss');             
    }
}