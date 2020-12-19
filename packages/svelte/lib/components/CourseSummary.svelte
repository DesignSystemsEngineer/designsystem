<script>
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

  export let title;
  export let videoCount;
  export let duration;
  export let description;
  export let courseUrl;
  export let downloadUrl;
  export let codeUrl;
  export let watchUrl;
  export let imageUrl;

  export let isLarge = false;
</script>

<style global>
  @import "@dsengineer/css/lib/course_summary.css";
  @import "@dsengineer/css/lib/typography.css";
</style>

<div
  class="dse-course-summary {$$props.class || ''}"
  class:dse-course-summary--large={isLarge}>
  <img src={imageUrl} class="dse-course-summary__image" alt={title} />
  <div>
    <h2 class="dse-course-summary__title">
      <a
        href={courseUrl}
        class="dse-course-summary__titleLink dse-heading-L">{title}</a>
    </h2>
    <div class="dse-course-summary__details">
      <Button
        class="dse-course-summary__downloadButton"
        href={downloadUrl}
        iconId="download">
        Download
      </Button>
      <span class="dse-course-summary__detail">
        <Icon iconId="video" class="dse-icon--course-summary-detail" />
        <span>{videoCount} video lessons</span>
      </span>
      <Button href={codeUrl} iconId="github">Code</Button>
      <span class="dse-course-summary__detail">
        <Icon iconId="clock" class="dse-icon--course-summary-detail" />
        <span>{duration} of learning material</span>
      </span>
    </div>
    <Button href={watchUrl} iconId="play" isCTA={true} isLarge={true}>
      Start Watching
    </Button>
    <div class="dse-course-summary__description">
      <slot>
        {@html description}
      </slot>
    </div>
  </div>
</div>
