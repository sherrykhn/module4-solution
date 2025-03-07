// Wrap everything in an IIFE to avoid polluting the global scope
(function (window) {
  var helloSpeaker = {}; // Create an object to hold the function
  var speakWord = "Hello";

  // Attach the speak function to the helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose helloSpeaker to the global window object
  window.helloSpeaker = helloSpeaker;

})(window);
