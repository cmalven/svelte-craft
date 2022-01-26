<script>
  export let heading = '';
  export let items = [];
</script>

<h2 class="type-sub-1 text-orange text-center">{heading}</h2>
<ul class="grid md:grid-cols-2 lg:grid-cols-3 mt-48">
  {#each items as item}
    <li class="text-blue text-center p-32 type-body-2 font-bold border-solid border-b border-b-rule">{item.text}</li>
  {/each}
</ul>

