# Lookbook React App

This project is a React-based Lookbook application built with Vite. It displays a series of images and videos, allowing users to navigate through them with smooth slide-in/slide-out transitions. Each look can have product annotations, and the app supports automatic progression using a progress bar.

## Solution Overview

- **Image/Video Slides:** Only the current look is rendered, with slide-in/out animations for transitions.
- **Navigation:** Users can move to the next or previous look using navigation buttons. Automatic navigation is triggered after the progress bar completes.
- **Annotations:** Each look can display product annotations.
- **No Scroll:** The app uses CSS animations for transitions instead of scrolling.

## Live Demo

Access the deployed app here:  
[https://68baadf3d77e3515ce3cc686--lookbookfashion.netlify.app/](https://68baadf3d77e3515ce3cc686--lookbookfashion.netlify.app/)

## How to Build

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

## How to Run & Test

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

3. Use the navigation buttons to move between looks, or wait for the progress bar to automatically advance.

## Technologies Used

- React
- Vite
- CSS for animations

## Customization

- Add new images/videos to the `assets` folder and update `looksData` in `src/components/Lookbook.jsx`.
- Adjust animation timing in the CSS