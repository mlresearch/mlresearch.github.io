var copyBtn   = $("#copy-btn"),
input     = $("#copy-me");

function copyToClipboardFF(text) {
  window.prompt ("Copy to clipboard: Ctrl C, Enter", text);
}

function copyToClipboard() {
  var success   = true,
      range     = document.createRange(),
      selection;

  // For IE.
  if (window.clipboardData) {
    window.clipboardData.setData("Text", input.val());        
  } else {
    // Create a temporary element off screen.
    var tmpElem = $('<div>');
    tmpElem.css({
      position: "absolute",
      left:     "-1000px",
      top:      "-1000px",
    });
    // Add the input value to the temp element.
    tmpElem.text(input.val());
    $("body").append(tmpElem);
    // Select temp element.
    range.selectNodeContents(tmpElem.get(0));
    selection = window.getSelection ();
    selection.removeAllRanges ();
    selection.addRange (range);
    // Lets copy.
    try { 
      success = document.execCommand ("copy", false, null);
    }
    catch (e) {
      copyToClipboardFF(input.val());
    }
    if (success) {
      alert ("The text is on the clipboard, try to paste it!");
      // remove temp element.
      tmpElem.remove();
    } else {
      alert ("It didn't work");
      tmpElem.remove();
    }
  }
}

copyBtn.on('click', copyToClipboard);
