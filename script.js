function calculateBudget(){
let days=document.getElementById("days").value;
let type=document.getElementById("type").value;

let cost;

if(type==="family") cost=4000;
else if(type==="solo") cost=2500;
else cost=3500;

let total=days*cost;

document.getElementById("result").innerHTML=
"Estimated Budget: ₹"+total;
}

<script>
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const img = card.querySelector('img');

  img.addEventListener('load', () => {
    if (img.naturalWidth > img.naturalHeight) {
      card.classList.add('landscape');
    } else {
      card.classList.add('portrait');
    }
  });
});
</script>