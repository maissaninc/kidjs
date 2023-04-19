export async function prompt(text) {
  return new Promise(function(resolve, reject) {

    // Create UI for prompt dialog
    let el = document.createElement('div');
    el.style.background = '#fff';
    el.style.padding = '15px';
    el.style.position = 'fixed';
    el.style.bottom = '20px';
    el.style.left = '20px';
    el.style.right = '20px';
    if (text) {
      let label = document.createElement('label');
      label.innerText = text;
      el.appendChild(label);
    }
    let input = document.createElement('input');
    let button = document.createElement('button');
    button.innerText = 'OK';
    el.appendChild(input);
    el.appendChild(button);
    document.body.appendChild(el);

    // Prevent click from propagating
    el.addEventListener('mousedown', function(e) { e.stopPropagation(); });
    el.addEventListener('mouseup', function(e) { e.stopPropagation(); });
    el.addEventListener('touchstart', function(e) { e.stopPropagation(); });
    el.addEventListener('touchend', function(e) { e.stopPropagation(); });

    // Return input
    button.addEventListener('click', function() {
      document.body.removeChild(el);
      resolve(input.value);
    });

    // Cancel input
    el.addEventListener('keyup', function(e) {
      if (e.key == 'Escape') {
        document.body.removeChild(el);
        reject();
      }
    });
  });
}