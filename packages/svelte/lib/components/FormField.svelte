<script>
  import { TextInput, InputLabel } from "../index";
  export let label = "";
  export let isTop = false;
  export let isDisabled = false;
  export let isFullWidth = false;
  export let inputType;
  export let name = "";
</script>

<style>
  @import "@dsengineer/css/lib/form_field.css";
</style>

<label
  class="dse-form-field {$$props.class || ''}"
  class:dse-form-field--top={isTop}
  class:dse-form-field--disabled={isDisabled}>
  <InputLabel
    class="dse-form-field__label{isDisabled ? ' dse-input-label--disabled' : ''}">
    {label}
  </InputLabel>
  <TextInput {name} {isDisabled} {inputType} {isFullWidth} />
</label>
