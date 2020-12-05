<script>
  import Button from "../../lib/components/Button.svelte";
  export let label = "Button";
</script>

<Button {...$$props}>{label}</Button>
