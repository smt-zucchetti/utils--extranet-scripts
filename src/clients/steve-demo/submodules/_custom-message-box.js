export function customMessageBox()
{
    const textBox = document.createElement("div");
    textBox.classList.add("container", "custom-message-box");
    
    const textBoxContent = document.createElement("div");
    textBoxContent.textContent = "Add text for guests, here.";
    textBoxContent.classList.add("custom-message-box--content");
    textBox.prepend(textBoxContent);
        
    const wrapper = document.getElementById("wrapper");
    wrapper.prepend(textBox);
    
    import("./styles/custom-message-box.scss");
}