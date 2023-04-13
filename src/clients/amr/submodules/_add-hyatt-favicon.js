export function addHyattFavicon()
{
    const linkTag = document.createElement('link');
    linkTag.setAttribute('rel', 'icon');
    linkTag.setAttribute('type', 'image/png');
    linkTag.setAttribute('href', 'https://verticalbookingusa.com/assets/scripts/extranet/src/clients/amr/submodules/images/favicon.ico');

    document.head.prepend(linkTag);
}