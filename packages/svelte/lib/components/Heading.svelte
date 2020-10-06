<script>
  export let size = "M";
</script>

<style>
  @import "@dsengineer/css/src/typography.css";
</style>

{#if size == 'XXXL'}
  <h1 class="dse-heading-XXXL">
    <slot />
  </h1>
{:else if size == 'XXL'}
  <h1 class="dse-heading-XXL">
    <slot />
  </h1>
{:else if size == 'XL'}
  <h1 class="dse-heading-XL">
    <slot />
  </h1>
{:else if size == 'L'}
  <h2 class="dse-heading-L">
    <slot />
  </h2>
{:else if size == 'S'}
  <h4 class="dse-heading-S">
    <slot />
  </h4>
{:else if size == 'XS'}
  <h5 class="dse-heading-XS">
    <slot />
  </h5>
{:else if size == 'XXS'}
  <h6 class="dse-heading-XXS">
    <slot />
  </h6>
{:else}
  <h3 class="dse-heading-M">
    <slot />
  </h3>
{/if}
