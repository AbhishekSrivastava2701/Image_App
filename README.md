# Image Background App

## Overview

The **Image Background App** is a web application that allows users to upload a PNG image, select or upload a background, and download the final image with the chosen background. The application uses Node.js for the server-side and plain HTML, CSS, and JavaScript for the frontend.

## Features

- **Upload PNG Image:** Users can upload a PNG image to be used with a background.
- **Background Selection:** Choose from predefined background images or upload a custom background.
- **Canvas Display:** Preview the uploaded image with the selected background.
- **Image Download:** Download the final image with the applied background.

## Project Structure

image-app/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── images/
│       ├── background1.png
│       ├── background2.png
│       └── (additional background images)
│
├── server.js
├── package.json
├── .gitignore
└── README.md

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/image-app.git
   cd image-app

## Npm should be installed before the command given below.   
## Install Dependencies 
``npm init -y 

## Start the server
``npm start

## Acknowledgements
1.Express for the server framework.
2.Multer for handling file uploads.
3.HTML5 Canvas for image manipulation on the frontend.
