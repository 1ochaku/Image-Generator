// here we are writing what the webapp should do on getting an input
// as the user types in the browser and clicks the button
// it will tell the webapp to select the contents of the textarea
// and load an image in the image container
import config from './config.js'

document.getElementById("GenerateBtn").addEventListener("click", async function () { 
    let token = config.HUGGINGFACE_API_TOKEN; // Put your API Token
    let input = document.getElementById("textInput").value; // getting the input
    // console.log(input)
    let imageContainer = document.getElementById("imageContainer"); // getting the container where to load image
    // console.log(imageContainer)
    let downloadBtn = document.getElementById("DownloadBtn");
    
    async function generateImage(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        return result;
    }
    try {
        let imageBlob = await generateImage({ inputs: input }); // getting the image
        let imageUrl = URL.createObjectURL(imageBlob); // converting to URL
        imageContainer.innerHTML = `<img src="${imageUrl}" class="mx-auto rounded-lg shadow-lg"/>`; //to write in the html page
        
        // add a download Btn
        const downloadBtn = document.createElement('button');
        downloadBtn.textContent = "Download Image";
        downloadBtn.classList.add('mx-auto', 'bg-blue-500', 'rounded-lg', 'px-6', 'py-2','mt-5','flex','items-center','justify-center','mb-5');

        downloadBtn.addEventListener("click", async function () {
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'generated-image.png';
            link.click();
        })
        imageContainer.appendChild(downloadBtn);
    } catch (error) {
        console.error("Error generating image: ", error);
    }
})