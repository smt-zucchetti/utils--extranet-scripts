import * as utils from './../../../lib/utils';

export function roomImagesPlayAndPauseButton()
{
    utils.populateBeAttributes().then(() => 
    {
        if(utils.BE_ATTRIBUTES.page === 'results')
        {
            import('./styles/room-images-play-and-pause-button.scss');
        }
    });
}