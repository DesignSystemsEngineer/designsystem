<script>
  import Grid from "../../lib/components/Grid.svelte";
  import GridItem from "../../lib/components/GridItem.svelte";
  import Page from "../../lib/components/Page.svelte";
</script>

<style>
  :global(.gridItem) {
    border: 1px solid rgba(20, 20, 20, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<Page>
  <Grid class="parent">
    <GridItem class="gridItem" colSpan="2">Item 1</GridItem>
    <GridItem class="gridItem" colSpan="2">Item 2</GridItem>
    <GridItem class="gridItem" colSpan="2">Item 3</GridItem>
    <GridItem class="gridItem" colSpan="1">Item 1</GridItem>
    <GridItem class="gridItem" colSpan="5">Item 2</GridItem>
    <GridItem class="gridItem" colSpan="4">Item 1</GridItem>
    <GridItem class="gridItem" colSpan="2">Item 2</GridItem>
  </Grid>
</Page>
