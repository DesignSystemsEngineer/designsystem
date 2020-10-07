<script>
  export let label = "Button";
</script>

<style>
  @import "@dsengineer/css/lib/button.css";
</style>

<button class={`${$$props.class || ''} dse-button`}>{label}</button>
