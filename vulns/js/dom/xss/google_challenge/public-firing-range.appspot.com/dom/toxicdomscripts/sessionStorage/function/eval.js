if (!sessionStorage.getItem('badValue')) {
  sessionStorage.setItem('badValue', Math.random());
}

var payload = sessionStorage.getItem('badValue'); // Using sync trigger.

setTimeout(function() {
  trigger(sessionStorage.getItem('badValue'));
  // Clean up the sessionStorage to avoid side-effects on subsequent tests.
  sessionStorage.clear();
}, 10);
// Sync trigger.
eval(payload);

// Async trigger.
function trigger(payload) {
  eval(payload);
};