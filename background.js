chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    const url = changeInfo.url;
    if (isPdfUrl(url)) {
      try {
        const parsed = new URL(url);
        // Skip if it is already the extension's viewer page
        if (parsed.protocol === 'chrome-extension:') {
          return;
        }

        const hash = parsed.hash;
        parsed.hash = ''; // Remove hash to get a clean URL for encoding
        const basePdfUrl = parsed.toString();

        const viewerUrl = chrome.runtime.getURL('pdfjs/web/viewer.html') + 
          '?file=' + encodeURIComponent(basePdfUrl) + hash;

        chrome.tabs.update(tabId, { url: viewerUrl });
      } catch (e) {
        console.error('Error parsing PDF URL:', e);
      }
    }
  }
});

function isPdfUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'chrome-extension:') {
      return false;
    }
    return parsed.pathname.toLowerCase().endsWith('.pdf');
  } catch (e) {
    return false;
  }
}
