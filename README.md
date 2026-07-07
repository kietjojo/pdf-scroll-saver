# PDF Scroll Saver - Chrome Extension

A Google Chrome extension that automatically remembers and restores your exact reading position (scroll position, page number, zoom level, and rotation) when opening PDF files in Chrome.

## Key Features
* **Auto Scroll Saving**: Automatically remembers your exact reading position (down to the pixel) when you close a tab or the browser.
* **Online & Local PDF Support**: Works with online PDF links (`http://` / `https://`) and local PDF files (`file:///`).
* **Zoom & Rotation Retention**: Restores your preferred zoom level and page rotation.
* **Fingerprint-based Tracking**: Identifies PDFs by their content hash (fingerprint), allowing you to rename or move the file without losing your reading progress.

## Tech Stack
* **Manifest V3**: Built using the latest Chrome Extension API standards for improved security and performance.
* **PDF.js (by Mozilla)**: Integrated Mozilla's HTML5 PDF rendering engine to bypass Chrome's sandboxed default PDF viewer and allow DOM-level scroll event tracking.
* **Service Workers**: Handles background tab updates and redirection logic efficiently.
* **HTML5 LocalStorage**: Saves reading history locally on your device for 100% privacy (no remote data collection).

## Local Development Installation (Unpacked)
1. Download the repository files to your computer.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** in the top-left corner and select the directory containing this project.
5. **Important**: To read local PDF files on your computer, click **Details** on the PDF Scroll Saver card and toggle on **Allow access to file URLs**.
