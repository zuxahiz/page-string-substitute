setTimeout(wait, 6000);

function wait () {
  if (document.readyState == 'complete') {
    loadWindow();
  } else {
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        loadWindow();
      }
    };
  }
}

function loadWindow() {
  var buttons = document.getElementsByTagName('button')
  // window.alert(buttons.length);
  for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", replaceText, false);
  }

  function replaceText() {
    setTimeout(do_replaceText, 1000);
  }
  function do_replaceText() {
    // window.alert("need to replace text");
    var collection = document.getElementsByClassName('com-google-gwtexpui-clippy-client-ClippyCss-label');
    if (collection.length > 3) {
      for (let j=3; j<collection.length; j++) {
        // window.alert(collection[j].innerHTML.toString());
        collection[j].innerHTML = collection[j].innerHTML.replace(/aaa/g, "bbb");
      }
    }
  }  
}