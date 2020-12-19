<script>
  import { Link, Page } from "../../lib/";
  export let content;
</script>

<Page>
  <Link {...$$props} on:click>{content}</Link>
</Page>
