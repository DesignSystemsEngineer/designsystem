<script>
  export let inputType = "text";
</script>

<style>
  @import "@dsengineer/css/lib/input.css";
</style>

<input type={inputType} class="dse-input {$$props.class || ''}" />
