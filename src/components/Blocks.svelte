<script>
  import Card from '$/components/Card.svelte';
  import GridList from '$/components/GridList.svelte';

  export let blocks;
</script>

<div class="blocks">
  {#each blocks as block}
    <div class="block block--{block.typeHandle} outer flex flex-col">
      {#if block.typeHandle === 'cards'}
        <div class="inner grid gap-gap grid-cols-1 md:grid-cols-3">
          {#each block.cards as card, idx}
            <Card
              heading={card.heading}
              text={card.text}
              idx={idx}
            />
          {/each}
        </div>
      {/if}

      {#if block.typeHandle === 'gridList'}
        <div class="inner space-y-m">
          <GridList
            heading={block.heading}
            items={block.items}
          />
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .block {}

  .block + .block {
    @apply mt-section-vertical;
  }

  .block:last-child {
    @apply pb-section-vertical;
  }

  .block--cards {
    @apply -mt-section-overlap;
  }

  .block--gridList:first-child {
    @apply mt-section-vertical;
  }
</style>

