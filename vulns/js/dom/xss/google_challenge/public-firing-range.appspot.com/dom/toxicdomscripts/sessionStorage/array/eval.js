if (!sessionStorage['badValue']) {
  sessionStorage['badValue'] = Math.random();
}

var payload = sessionStorage['badValue'];

setTimeout(function() {
  trigger(sessionStorage['badValue']); // Using the async trigger.

  // Clean up the localStorage to avoid causing side-effect on subsequent tests.
  sessionStorage.clear();
}, 10);
// Sync trigger.
eval(payload);

// Async trigger.
function trigger(payload) {
  eval(payload);
};