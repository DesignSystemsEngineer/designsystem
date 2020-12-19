<script>
  export let inputType = "text";
  export let isRequired = true;
  export let isDisabled = false;
  export let name = "";
</script>

<style>
  @import "@dsengineer/css/lib/text_input.css";
</style>

<input
  type={inputType}
  class="dse-textinput {$$props.class || ''}"
  required={isRequired}
  disabled={isDisabled}
  {name} />
