
var launchModal = function(object) {
    // Declare Variables
    var modal = document.getElementById("modal");
    // Get a copy of the HTML wihin the script modal__template
    var template = document.getElementById("modal__template").innerHTML;
  
    // Add new object here to use as content template
    var message = {
      resuableModal: {
        title: "Reusable Vanilla JavaScript Modal",
        content:
          "Reuse this modal as many times as you want. Simply add a new object to var message and call it with launchModal('nameOfMessage')",
        button1: "Close",
        button2: "Save"
      },
      gettingStarted: {
        title: "Getting Started",
        content:
          "Add the JavaScript, the skeleton CSS and the Pug/HTML to your project. Edit the objects inside message object to suit your needs. Call it with launchModal('nameOfMessage'). Add new Modals by editing the messageb object inside the launchModule function.",
        button1: "Cancel"
      },
      moreDetails: {
        title: "More Details",
        content:
          "The buttons only appear if the correct property exists in the object. Button1 is always the close button. Button2 can be a link button, if the message object contains button2 and button2Link."
      },
      aboutMe: {
        title: "About Me",
        content:
          "I'm a 24 year old web developer from England. I'm moving to London in September and hope to get a job as a JavaScript developer.",
        button2: "Get in Touch",
        button2Link: "https://uk.linkedin.com/in/edd-yerburgh-74aa5768"
      }
    };
    modal.classList.add("show");
    (function() {
      function removeLink() {
        var temp = button2;
        button2Link.parentNode.removeChild(button2Link);
        objEl.getElementsByTagName("footer")[0].appendChild(temp);
      }
      var prevModal = document.getElementById("objEl");
      if (prevModal) {
        prevModal.parentNode.removeChild(prevModal);
      }
  
      // Save message object as data for easy reference
      var data = message[object];
  
      // Create pseudo element and fill it with HTML include in script#modal__template
      var objEl = document.createElement("div");
      objEl.innerHTML = template;
      objEl.setAttribute("id", "objEl");
  
      // Use tag names to access elements because ID selector doesn't work on elements
      // not yet in DOM
      var button1 = objEl.getElementsByClassName("modal__button1")[0];
      var button2 = objEl.getElementsByClassName("modal__button2")[0];
      var button2Link = objEl.getElementsByClassName("modal__button2link")[0];
  
      // Append content to title and main
      objEl
        .getElementsByTagName("h2")[0]
        .appendChild(document.createTextNode(data.title));
      objEl
        .getElementsByTagName("main")[0]
        .appendChild(document.createTextNode(data.content));
  
      // If button1 is specified in data, add text, otherwise remove
      if (data.button1) {
        button1.appendChild(document.createTextNode(data.button1));
      } else {
        button1.parentNode.removeChild(button1);
      }
      // If button2link is specified, add link to button 2. Otherwise remove a tag, but keep button2
      if (data.button2Link) {
        button2Link.setAttribute("href", data.button2Link);
      } else {
        removeLink();
      }
      // If button2 is specified in data, add text, otherwise remove
      if (data.button2) {
        button2.appendChild(document.createTextNode(data.button2));
      } else {
        button2.parentNode.removeChild(button2);
      }
      // Add pseudo element to document
      document.getElementById("modal__dialog").appendChild(objEl);
    })();
  
    // Closes modal when called
    function closeModal() {
      console.log("close");
      modal.classList.remove("show");
    }
  
    // Bind close event to close button and button1
    var closeButtons = modal.getElementsByClassName("modal__close");
    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].onclick = closeModal;
    }
  
    // Close modal if it is clicked. Does not fire if target is modal__dialog or child
    var modalDialog = document.getElementById("modal__dialog");
  
    //I'm using "click" but it works with any event
    modal.addEventListener("click", function(event) {
      var isClickInside = modalDialog.contains(event.target);
  
      if (!isClickInside) {
        //the click was outside the specifiedElement, do something
        closeModal();
      }
    });
  };
  
  // Launch modal on page load
  launchModal("resuableModal");
  
  // Launch modal when buttons are clicked
  document
    .getElementById("getting-started")
    .addEventListener("click", function() {
      launchModal("gettingStarted");
    });
  document.getElementById("more-details").addEventListener("click", function() {
    launchModal("moreDetails");
  });
  document.getElementById("about-me").addEventListener("click", function() {
    launchModal("aboutMe");
  });