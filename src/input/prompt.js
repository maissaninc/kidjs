export async function prompt(text) {

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
}