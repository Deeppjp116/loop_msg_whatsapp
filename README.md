# Chrome Media Pause/Resume Extension

This Chrome extension stops audio and video when the Chrome window is inactive and resumes playback when the Chrome window becomes active again. This works across all URLs, not just specific ones like YouTube and other media platforms.

## Features

- Pauses all audio and video when the Chrome window is inactive.
- Resumes playback when the Chrome window becomes active.
- Works on all websites.

## Installation

1. **Clone or download this repository:**

    ```sh
    git clone https://github.com/your-username/chrome-media-pause-resume.git
    cd chrome-media-pause-resume
    ```

2. **Load the extension in Chrome:**

    1. Open Chrome and go to `chrome://extensions/`
    2. Enable "Developer mode" by toggling the switch on the top right.
    3. Click "Load unpacked" and select the folder containing the extension files.

## Usage

Once the extension is loaded, it will automatically handle pausing and resuming media based on the window's activity status. You don't need to perform any manual actions for the extension to work.

### Injecting the Script via Chrome Console (for testing)

If you want to inject the script directly via the Chrome console for testing, follow these steps:

1. **Open the Chrome Developer Tools:**

    - Right-click on the webpage and select "Inspect" or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).

2. **Go to the Console tab.**

3. **Copy and paste the following script into the console and press Enter:**

    ```javascript
    // JavaScript code to pause/resume media based on window activity
    (function() {
        var videos = document.querySelectorAll('video');
        var audios = document.querySelectorAll('audio');

        function pauseMedia() {
            videos.forEach(video => video.pause());
            audios.forEach(audio => audio.pause());
        }

        function playMedia() {
            videos.forEach(video => video.play());
            audios.forEach(audio => audio.play());
        }

        window.addEventListener('blur', pauseMedia);
        window.addEventListener('focus', playMedia);
    })();
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
