<script>
  import { TextInput, InputLabel } from "../index";
  export let label = "";
  export let isTop = false;
  export let isDisabled = false;
</script>

<style>
  @import "@dsengineer/css/lib/form_field.css";
</style>

<label
  class="dse-form-field"
  class:dse-form-field--top={isTop}
  class:dse-form-field--disabled={isDisabled}>
  <InputLabel
    class="dse-form-field__label{isDisabled ? ' dse-input-label--disabled' : ''}">
    {label}
  </InputLabel>
  <TextInput name="name" {isDisabled} />
</label>
