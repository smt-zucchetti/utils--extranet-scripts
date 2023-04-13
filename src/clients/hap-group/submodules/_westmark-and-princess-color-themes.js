import { importStyleVars } from './shared/import-style-vars';

export function westmarkAndPrincessColorThemes()
{
    importStyleVars().then(() =>
    {
        import('./styles/westmark-and-princess-color-themes/main.scss');        
    })

}

