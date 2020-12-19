<script>
  export let size = "M";
</script>

<style global>
  @import "@dsengineer/css/lib/typography.css";
</style>

{#if size == 'XXXL'}
  <h1 class="dse-heading-XXXL {$$props.class || ''}">
    <slot />
  </h1>
{:else if size == 'XXL'}
  <h1 class="dse-heading-XXL {$$props.class || ''}">
    <slot />
  </h1>
{:else if size == 'XL'}
  <h1 class="dse-heading-XL {$$props.class || ''}">
    <slot />
  </h1>
{:else if size == 'L'}
  <h2 class="dse-heading-L {$$props.class || ''}">
    <slot />
  </h2>
{:else if size == 'S'}
  <h4 class="dse-heading-S {$$props.class || ''}">
    <slot />
  </h4>
{:else if size == 'XS'}
  <h5 class="dse-heading-XS {$$props.class || ''}">
    <slot />
  </h5>
{:else if size == 'XXS'}
  <h6 class="dse-heading-XXS {$$props.class || ''}">
    <slot />
  </h6>
{:else}
  <h3 class="dse-heading-M {$$props.class || ''}">
    <slot />
  </h3>
{/if}
