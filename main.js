const topright = document.querySelector('#topright');
const topleft = document.querySelector('#topleft');
const botright = document.querySelector('#botright');
const botleft = document.querySelector('#botleft');

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


