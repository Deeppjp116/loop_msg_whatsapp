# Chrome Script Injection

This repository provides a script to automate sending messages in a specific web application. The script prompts the user for a message and the number of times to send it, then automates the process of inputting and sending the message.

## How to Use

Follow the steps below to inject and execute the script in the Chrome console.

### Step 1: Open Developer Tools

1. Open Google Chrome.
2. Navigate to the web application where you want to inject the script.
3. Right-click on the webpage and select `Inspect`, or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac) to open the Developer Tools.

### Step 2: Navigate to the Console Tab

1. In the Developer Tools pane, click on the `Console` tab.
2. You should see a console where you can type and execute JavaScript code.

### Step 3: Paste and Execute the Script

1. Copy the entire script provided below:
    ```javascript
    var message = prompt('Enter your message', '‎');
    var counter = parseInt(prompt('How many Times ?', 10));
    window.InputEvent = window.Event || window.InputEvent;
    var event = new InputEvent('input', { bubbles: true });
    var textbox = document.getElementsByClassName(
      'selectable-text copyable-text x15bjb6t x1n2onr6'
    )[1];
    for (let index = 0; index < counter; index++) {
      textbox.innerHTML = message;
      textbox.dispatchEvent(event);
      document
        .getElementsByClassName(
          'x1c4vz4f x2lah0s xdl72j9 xfect85 x1iy03kw x1lfpgzf'
        )[0]
        .click();
      console.log(index);
    }
    ```
2. Paste the script into the console and press `Enter`.

### Notes

- Ensure that you are on the correct page of the web application where the script needs to be injected.
- The script is designed for a specific web application structure. If the class names or the structure of the web application changes, the script might need to be updated accordingly.

## Disclaimer

This script is provided for educational purposes only. Use it responsibly and ensure that you comply with the terms of service of the web application you are automating. The author is not responsible for any misuse of this script.
