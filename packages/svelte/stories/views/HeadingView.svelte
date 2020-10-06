<script>
  import Heading from "../../lib/components/Heading.svelte";
  export let size = "M";
  export let label = "Heading 1";
</script>

<Heading {size}>{label}</Heading>
