<script>
  import Icon from "./Icon.svelte";
  export let iconId;
  export let href = "#";
  export let target = "_self";
</script>

<style>
  @import "@dsengineer/css/lib/link.css";
</style>

<a
  class="dse-link {$$props.class || ''}"
  class:dse-link--icon={iconId}
  {href}
  on:click
  {target}>
  {#if iconId}
    <Icon {iconId} class="dse-link__icon" />
  {/if}
  <span><slot /></span>
</a>
