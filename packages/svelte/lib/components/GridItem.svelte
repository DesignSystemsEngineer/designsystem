<script>
  export let colSpan = 2;
</script>

<style>
  @import "@dsengineer/css/src/grid.css";
</style>

<div class={`${$$props.class} dse-grid__${colSpan}col`}>
  <slot />
</div>
