<script>
  import { Heading, GridItem, FormField } from "../";
</script>

<style global>
  @import "@dsengineer/css/lib/grid.css";
  @import "@dsengineer/css/lib/subscribe_form.css";
</style>

<form class="dse-subscribe-form dse-grid">
  <Heading class="dse-subscribe-form__heading dse-grid__5col" size="XXXL">
    Get a heads-up when Design Systems Engineer launches!
  </Heading>
  <Heading class="dse-subscribe-form__heading dse-grid__5col" size="S">
    COMING EARLY 2021
  </Heading>
  <GridItem colSpan="6" />
  <FormField
    class="dse-grid__2col"
    isTop={true}
    label="Your first name"
    name="name"
    inputType="text"
    isFullWidth={true} />
  <FormField
    class="dse-grid__2col"
    isTop={true}
    label="Your email address"
    name="name"
    inputType="email"
    isFullWidth={true} />
  <!-- <label class="dse-form-field dse-form-field--top dse-grid__2col">
    <span class="dse-input-label dse-form-field__label">Your email address</span>
    <input type="email" name="email" required class="dse-textinput dse-textinput--full-width" />
  </label> -->
  <div class="dse-grid__1col">
    <input
      type="submit"
      name="submit"
      value="Subscribe"
      class="dse-button dse-button--cta"
    />
  </div>
</form>
