if (!localStorage.getItem('badValue')) {
  localStorage.setItem('badValue', Math.random());
}

var payload = localStorage.getItem('badValue'); // Using sync trigger.

setTimeout(function() {
  trigger(localStorage.getItem('badValue')); // Using the async trigger.

  // Clean up the localStorage to avoid causing side-effect on subsequent tests.
  localStorage.clear();
}, 10);
// Sync trigger.
document.write(payload);

// Async trigger.
function trigger(payload) {
  document.write(payload);
}