// Wrap everything in an IIFE to avoid polluting the global scope
(function (window) {
  var byeSpeaker = {}; // Create an object to hold the function
  var speakWord = "Goodbye";

  // Attach the speak function to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose byeSpeaker to the global window object
  window.byeSpeaker = byeSpeaker;

})(window);
