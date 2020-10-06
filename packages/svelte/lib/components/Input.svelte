<script>
  export let inputType = "text";
</script>

<style>
  @import "@dsengineer/css/src/input.css";
</style>

<input type={inputType} class={`${$$props.class || ''} dse-input`} />
