<script>
  export let inputType = "text";
</script>

<style>
  @import "@dsengineer/css/lib/text_input.css";
</style>

<input type={inputType} class="dse-textinput {$$props.class || ''}" />
