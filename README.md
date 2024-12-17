
# Image Generator

Type your text and tap on "Generate Image," and it will generate an image based on your input.

## Steps to Set Up the Project

### 1. Clone the Repository

To clone the project, follow these steps:

- Open your **command prompt** or **terminal**.
- Run the following command to clone the repository:
  ```bash
  git clone https://github.com/1ochaku/Image-Generator.git
  ```

### 2. Navigate to the Project Folder

Move into the project directory:

```bash
cd Image-Generator
```

### 3. Get Your API Token from Hugging Face

1. Go to [Hugging Face](https://huggingface.co/) and log in or create an account if you don’t have one.
2. Once logged in, navigate to your **Settings**.
3. In the **Access Tokens** section, generate a new token. This token will be required to interact with Hugging Face's API. Don't forget to select **'Make calls to serverless Inference API'**.

### 4. Create a `config.js` File

Create a `config.js` file in the root directory of the project and add the following code:

```javascript
export default {
  HUGGINGFACE_API_TOKEN: "your-api-token-here",
};
```

Replace `'your-api-token-here'` with the token you generated in Step 3.

### 5. Host the Website

To host the website, you can:

- Use **Live Server** (a Visual Studio Code extension).

---

## Usage

1. Type your desired text in the input field.
2. Click the "Generate Image" button.
3. The generated image will appear on the screen.

You can also download the generated image by clicking the "Download Image" button.
