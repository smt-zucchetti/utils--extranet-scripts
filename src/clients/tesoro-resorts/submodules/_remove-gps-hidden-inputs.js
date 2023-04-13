export function removeGpsHiddenInputs()
{
    const forms = document.getElementsByTagName('form');
    Array.from(forms).forEach(form =>
    {
        const gpsInputs = form.querySelectorAll('input[name^="gps_"]');
        if(gpsInputs)
        {
            gpsInputs.forEach(input =>
            {
                form.removeChild(input); 
            });      
        }
    });
}