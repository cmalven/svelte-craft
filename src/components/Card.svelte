<script>
  export let heading = '';
  export let text = '';
  export let idx = 0;

  const cardColors = [
    'text-orange',
    'text-blue',
    'text-gray',
  ];
</script>

<div class="c-card">
  <h2 class="type-h-2 {cardColors[idx % 3]}">{heading}</h2>
  <p class="type-body-1 mt-24">{text}</p>
</div>
