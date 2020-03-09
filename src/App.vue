<template>
  <div id="App">
    <div class="AppHeaderTopNav-container">
      <AppHeader />
      <TopNav />
    </div>
    <router-view />

    <iframe
      v-if="musicShouldPlay"
      ref="iframe"
      id="iframe"
      height="100"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308674522&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ></iframe>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Trade+Winds&display=swap");
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
  font-family: Trade Winds;

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

  #iframe {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%) translateY(-100%);
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
