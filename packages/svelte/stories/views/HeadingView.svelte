<script>
  import Heading from "../../lib/components/Heading.svelte";
  import Page from "../../lib/components/Page.svelte";
  export let size = "M";
  export let label = "Heading 1";
</script>

<Page>
  <Heading {size}>{label}</Heading>
</Page>
