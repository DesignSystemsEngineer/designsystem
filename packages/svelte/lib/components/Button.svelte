<script>
  export let label = "Button";
</script>

<style>
  @import "@dsengineer/css/src/button.css";
</style>

<button class={`${$$props.class || ''} dse-button`}>{label}</button>
