import * as utils from './../../../lib/utils'

export function limitMobileRoomCounter()
{
    utils.waitForElement('#add-room', false, 5000).then(el =>
    {
        el.addEventListener('click', () =>
        {
            const ctr = document.getElementById('tot_camere_mobile')
            ctr.value = ctr.value > 2 ? 2 : ctr.value
        })
    })
}