<script>
  export let heading = '';
  export let text = '';
</script>

<div class="outer bg-orange">
  <div class="inner fluid-[paddingTop_paddingBottom,200px,400px]">
    <h1 class="heading">{heading}</h1>
    <p class="text">{text}</p>
  </div>
</div>

<style>
  .heading {
    @apply type-h-1;
    @apply text-white;
  }

  .text {
    @apply type-body-2;
    @apply text-white;
    @apply mt-32;
  }
</style>
