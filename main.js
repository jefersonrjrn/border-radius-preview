

function borderChange() {
  var box = document.querySelector('#box');
  var border = document.querySelector('input').value;

  document.getElementById('box').style.borderRadius = border + "px";
}

