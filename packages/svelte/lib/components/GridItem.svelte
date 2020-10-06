<script>
  export let colSpan = 2;
</script>

<div class={`${$$props.class} dse-grid__${colSpan}col`}>
  <slot />
</div>
