<template>
  <div id="component-TopNav" class="component">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/artists">Artists</router-link>
      <router-link to="/daily-positive-message">DPM</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
@import "@/variables.scss";

#component-TopNav {
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $TopNavHeight;
    background-color: rgba($white, 0.2);
    text-shadow: 0 1px 1px $black, 0 1px 4px $white;

    a {
      margin: 0 8px;

      &:hover,
      &.router-link-exact-active {
        color: $sharkBlue;
      }
    }
  }
}
</style>

<script>
export default {
  name: "component-TopNav"
};
</script>