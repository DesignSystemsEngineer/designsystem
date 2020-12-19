<script>
  import Icon from "./Icon.svelte";
  export let isDisabled = false;
  export let isLarge = false;
  export let isCTA = false;
  export let iconId = false;
  export let href = false;
</script>

<style>
  @import "@dsengineer/css/lib/button.css";
</style>

{#if href}
  <a
    class="dse-button {$$props.class || ''}"
    class:dse-button--cta={isCTA}
    class:dse-button--large={isLarge}
    class:dse-button--disabled={isDisabled}
    {href}
    on:click>
    {#if iconId}
      <Icon {iconId} class="dse-button__icon" />
    {/if}
    <span><slot /></span>
  </a>
{:else}
  <button
    class="dse-button {$$props.class || ''}"
    class:dse-button--cta={isCTA}
    class:dse-button--large={isLarge}
    disabled={isDisabled}
    on:click>
    {#if iconId}
      <Icon {iconId} class="dse-button__icon" />
    {/if}
    <span><slot /></span>
  </button>
{/if}
