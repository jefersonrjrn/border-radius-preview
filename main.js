const topright = document.getElementById('topright');
const topleft = document.querySelector('#topleft');
const botright = document.querySelector('#botright');
const botleft = document.querySelector('#botleft');

const values = [topright.value, topleft.value, botright.value, botleft.value];

topright.addEventListener("input", (event) => {
  let border = topright.value;

  document.getElementById('box').style.borderTopRightRadius = border + "px";
});

topleft.addEventListener("input", (event) => {
  let border = topleft.value;

  document.getElementById('box').style.borderTopLeftRadius = border + "px";
});

botright.addEventListener("input", (event) => {
  let border = botright.value;

  document.getElementById('box').style.borderBottomRightRadius = border + "px";
});

botleft.addEventListener("input", (event) => {
  let border = botleft.value;

  document.getElementById('box').style.borderBottomLeftRadius = border + "px";
});

function copyText() {
  const values = [topright.value, topleft.value, botright.value, botleft.value];
  var textArea = document.createElement("textarea");
  var text = `border-top-left-radius: ${topleft.value}px; 
    border-top-right-radius: ${topright.value}px; 
    border-bottom-left-radius: ${botleft.value}px; 
    border-bottom-right-radius: ${botright.value}px;`
  
  document.body.appendChild(textArea);
  textArea.value = text;
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

