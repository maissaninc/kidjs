export async function prompt(text) {
  closeAllPrompts();

  return new Promise(function(resolve, reject) {

    // Prompt dialog
    let el = document.createElement('div');
    el.className = 'kidjs-prompt';
    el.style.background = '#fff';
    el.style.borderRadius = '6px';
    el.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.2)';
    el.style.boxSizing = 'border-box';
    el.style.padding = '20px';
    el.style.position = 'fixed';
    el.style.bottom = '40px';
    el.style.left = '50%';
    el.style.right = '20px';
    el.style.transform = 'translateX(-50%)';
    el.style.width = 'calc(100% - 40px)';
    el.style.maxWidth = '600px';

    // Prompt label
    if (text) {
      let label = document.createElement('label');
      label.style.display = 'block';
      label.style.fontFamily = 'sans-serif';
      label.style.fontSize = '16px';
      label.style.marginBottom = '10px';
      label.innerText = text;
      el.appendChild(label);
    }

    // Prompt input
    let group = document.createElement('div');
    group.style.display = 'flex';
    let input = document.createElement('input');
    input.style.border = '1px solid #efefef';
    input.style.borderRadius = '7px 0 0 7px';
    input.style.fontFamily = 'sans-serif';
    input.style.fontSize = '16px';
    input.style.flexGrow = 1;
    input.style.outline = 'none';
    input.style.paddingLeft = '10px';
    input.style.paddingRight = '10px';

    // OK buton
    let button = document.createElement('button');
    button.style.background = '#000';
    button.style.border = '1px solid #000';
    button.style.borderRadius = '0 7px 7px 0';
    button.style.color = '#fff';
    button.style.cursor = 'pointer';
    button.style.outline = 'none';
    button.style.paddingLeft = '20px';
    button.style.paddingRight = '20px';
    button.style.height = '40px';
    button.innerText = 'OK';
    group.appendChild(input);
    group.appendChild(button);
    el.appendChild(group);
    document.body.appendChild(el);
    input.focus();

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

    // Keyboard shortcuts
    el.addEventListener('keyup', function(e) {
      if (e.key == 'Enter') {
        document.body.removeChild(el);
        resolve(input.value);
      }
      if (e.key == 'Escape') {
        document.body.removeChild(el);
        reject();
      }
    });
  });
}

export function closeAllPrompts() {
  let els = document.querySelectorAll('.kidjs-prompt');
  for (let i = 0; i < els.length; i = i + 1) {
    document.body.removeChild(els[i]);
  }
}