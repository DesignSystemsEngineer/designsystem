<script>
  export let navItems = [];
  export let currentPage;
  $: selectedIndex = navItems.findIndex((navItem) => {
    return navItem.href === currentPage;
  });
</script>

<style>
  @import "@dsengineer/css/lib/nav.css";
</style>

<input type="checkbox" id="menuCheckbox" class="dse-nav__checkbox" />
<nav class="dse-nav">
  <label class="dse-nav__label" for="menuCheckbox">
    <header id="nav-expander" class="dse-nav__hamburger">
      <svg
        class="dse-nav__hamburger-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        enable-background="new 0 0 18 18"
        width="18"
        height="18">
        <rect x="1" y="3" width="16" height="2" />
        <rect x="1" y="8" width="16" height="2" />
        <rect x="1" y="13" width="16" height="2" />
      </svg>
      <span>Menu</span>
    </header>
  </label>
  <ul class="dse-nav__list">
    {#each navItems as { label, href }, i}
      <li class="dse-nav__item">
        <a
          class="dse-nav__link"
          class:dse-nav__link--Selected={i === selectedIndex}
          {href}>{label}</a>
      </li>
    {/each}
  </ul>
</nav>
