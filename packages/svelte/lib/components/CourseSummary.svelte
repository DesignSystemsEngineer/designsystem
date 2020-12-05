<script>
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

  export let title;
  export let videoCount;
  export let duration;
  export let description;
</script>

<style>
  @import "@dsengineer/css/lib/course_summary.css";
  @import "@dsengineer/css/lib/typography.css";
</style>

<div class="dse-course-summary">
  <h2>
    <a
      href="nothing"
      on:click|stopPropagation|preventDefault={false}
      class="dse-course-summary__title dse-heading-L">{title}</a>
  </h2>
  <div class="dse-course-summary__details">
    <Button iconId="download">Download</Button>
    <span class="dse-course-summary__detail">
      <Icon iconId="video" class="dse-icon--course-summary-detail" />
      <span>{videoCount} video lessons</span>
    </span>
    <Button iconId="github">Code</Button>
    <span class="dse-course-summary__detail">
      <Icon iconId="clock" class="dse-icon--course-summary-detail" />
      <span>{duration} of learning material</span>
    </span>
  </div>
  <Button iconId="play" isCTA={true} isLarge={true}>Start Watching</Button>
  <div class="dse-course-summary__description">
    <slot>
      {@html description}
    </slot>
  </div>
</div>
