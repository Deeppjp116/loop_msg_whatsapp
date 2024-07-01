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
