
export function loadPirschScript()
{
    const script = document.createElement('script');
    script.setAttribute('src', 'https://api.pirsch.io/pirsch.js');
    script.setAttribute('id', 'pirschjs');
    script.setAttribute('data-code', 'UhCa1mandLUodYhlKmBwagR2jGbHONko');

    document.head.appendChild(script);
}