<script>
  import iconData from "../iconData";
  export let iconId = Object.keys(iconData)[0];
</script>

<style global>
  @import "@dsengineer/css/lib/icon.css";
</style>

<svg
  viewBox="0 0 16 16"
  class="dse-icon {$$props.class || ''}"
  contenteditable="true"
  bind:innerHTML={iconData[iconId].data} />
