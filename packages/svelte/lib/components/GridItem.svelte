<script>
  export let colSpan = 2;
</script>

<style>
  @import "@dsengineer/css/lib/grid.css";
</style>

<div class={`dse-grid__${colSpan}col ${$$props.class || ''}`}>
  <slot />
</div>
