// script.js

window.onload = function() {
    const rightSection = document.querySelector('.right-section');
    
    // Fade-in effect for the right section
    rightSection.style.opacity = 0;
    setTimeout(() => {
        rightSection.style.transition = "opacity 2s";
        rightSection.style.opacity = 1;
    }, 500);
};



// script.js

document.getElementById('mysteriesButton').addEventListener('click', function() {
    // Create a new iframe element
    const iframe = document.createElement('iframe');
    
    // Set iframe attributes (you can adjust the size as needed)
    iframe.width = "100%";
    iframe.height = "400px";
    iframe.frameBorder = "0";
    iframe.style.borderRadius = "10px";
    iframe.style.marginTop = "20px";
    
    // Write the poem content inside the iframe
    const poemContent = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Poem of Happiness</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f8e1f4;
                    color: #6E0148;
                    text-align: center;
                    padding: 20px;
                }
                h1 {
                    font-size: 28px;
                }
                p {
                    font-size: 20px;
                    margin: 20px 0;
                    font-style: italic;
                }
            </style>
        </head>
        <body>
            <h1>💖 Why Isali is Important 💛</h1>
            <p>"To me, you are the light that brightens my days, and the warmth that fills my heart. 💖 You make life beautiful by just being in it. Your presence brings happiness, and I am forever grateful for you." 💫</p>
            <p>Poem by: Your Loving Partner 💛</p>
        </body>
        </html>
    `;

    // Write the poem content into the iframe
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(poemContent);
    iframeDocument.close();

    // Append the iframe to the body of the page or a specific container
    document.body.appendChild(iframe);
});
