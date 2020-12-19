<script>
  export let inputType = "text";
  export let isRequired = true;
  export let isDisabled = false;
  export let isFullWidth = false;
  export let name = "";
</script>

<style global>
  @import "@dsengineer/css/lib/text_input.css";
</style>

<input
  type={inputType}
  class="dse-textinput {$$props.class || ''}"
  class:dse-textinput--full-width={isFullWidth}
  required={isRequired}
  disabled={isDisabled}
  {name} />
