<script context="module">
  import query from '$/util/query';
  import { pageContentQuery } from '$/util/query';

  export async function load(requestParams) {
    return await query(`
      {
        entry (section: "homepage") {
          title
          ... on homepage_homepage_Entry {
            heading
            text
            ${pageContentQuery}
          }
        }
      }
    `, requestParams);
  }
</script>

<script>
  import Hero from '$/components/Hero.svelte';
  import Blocks from '$/components/Blocks.svelte';

  export let data;
  const entry = data.entry;
  // console.log(data.entry);
</script>


<Hero
  heading={entry.heading}
  text={entry.text}
/>

<!-- Blocks -->
<Blocks blocks={entry.pageContent} />
