const select = document.getElementById('select');
let selected
select.addEventListener('change', (event) => {
  console.log("CHANGE = ", event.target.value);
  selected = document.querySelector("[value='" + event.target.value + "']");
  console.log('SELECTED = ', selected);
});
