<script>
  import { InputLabel } from "../index";
  export let forId = false;
</script>

<style>
  @import "@dsengineer/css/lib/input_label.css";
</style>

{#if forId}
  <label
    class="dse-input-label {$$props.class || ''}"
    for={forId}><slot /></label>
{:else}
  <span class="dse-input-label {$$props.class || ''}"><slot /></span>
{/if}
