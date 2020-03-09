<template>
  <div id="component-AppHeader" class="component">
    <header>
      <img src="@/assets/images/logo.jpeg" />
      <!-- <img src="@/assets/images/shark-logo.png" /> -->
      <!-- <h1>Shark Nation Family</h1> -->
    </header>
  </div>
</template>

<style lang="scss">
@import "@/variables.scss";

#component-AppHeader {
  header {
    height: $AppHeaderHeight;
    text-align: center;
    text-shadow: 0 1px 1px $black, 0 1px 8px $white;

    img {
      height: 128px;
    }
  }
}
</style>

<script>
export default {
  name: "component-AppHeader"
};
</script>