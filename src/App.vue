<template>
  <div id="App">
    <div class="AppHeaderTopNav-container">
      <AppHeader />
      <TopNav />
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Anton&display=swap");
@import "@/variables.scss";

#App {
  height: 100%;
  background: linear-gradient(
    to bottom right,
    $black 20%,
    $white 80%,
    $black 20%
  );
  color: $white;
  font-family: Anton, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  // border: 1px solid;
  // * {
  //   border: 1px solid;
  // }

  .AppHeaderTopNav-container {
    background: linear-gradient(
      to right bottom,
      $sharkBlue,
      $black 10% 90%,
      $white
    );
  }

  .view {
    padding-top: 4px;
    box-shadow: inset 0 4px 16px $black;

    .view-title {
      height: $viewTitleHeight;
      line-height: $viewTitleHeight;
      text-align: center;
      text-shadow: 0 1px 1px $black, 0 1px 2px $sharkBlue, 0 1px 6px $white;
    }

    main {
      height: $viewMainHeight;
    }
  }
}
</style>

<script>
import AppHeader from "@/components/AppHeader";
import TopNav from "@/components/TopNav";

export default {
  name: "App",
  components: {
    AppHeader,
    TopNav
  },
  data: () => ({
    musicShouldPlay: false
  }),
  mounted() {
    setTimeout(() => {
      this.musicShouldPlay = true;
    }, 2000);
  }
};
</script>
