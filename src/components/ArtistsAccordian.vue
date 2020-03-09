<template>
  <div id="component-ArtistsAccordian" class="component">
    <div
      :ref="artist.id"
      :id="artist.id"
      class="artists-accordian-artist"
      v-for="artist in artists"
      :key="artist.id"
      @click="flex(artist.id)"
    >
      <h3 class="artists-accordian-artist-name">{{ artist.name }}</h3>
    </div>

    <audio ref="splash">
      <source src="@/assets/audio/splash.wav" />
    </audio>
  </div>
</template>

<style lang="scss">
@import "@/variables.scss";

#component-ArtistsAccordian {
  display: flex;
  height: 100%;

  .artists-accordian-artist {
    &#aries {
      flex: 8;
      background: url("../assets/images/theGuy-background.jpeg") no-repeat
        center / cover;
    }

    &#locoman {
      background: url("../assets/images/locoman-background.jpg") no-repeat
        center / cover;
    }

    &#monster {
      background: url("../assets/images/monster-background.jpg") no-repeat
        center / cover;
    }

    flex: 1;
    width: 32px;
    padding: 8px;
    height: 100%;
    background: linear-gradient(to right, $black, rgba($black, 0.85));
    transition: flex 200ms ease-out;

    .artists-accordian-artist-name {
      writing-mode: vertical-rl;
      text-orientation: upright;
      text-shadow: 0 1px 2px $black, 0 1px 4px $black, -1px 0 4px $sharkBlue;
      cursor: pointer;
    }
  }
}
</style>

<script>
export default {
  name: "component-ArtistAccordian",
  data: () => ({
    artists: [
      {
        id: "aries",
        name: "Aries"
      },
      {
        id: "pg",
        name: "PG"
      },
      {
        id: "locoman",
        name: "LoCoMan"
      },
      {
        id: "bigMonsta",
        name: "Big MoNSTa"
      },
      {
        id: "dino",
        name: "Dino"
      }
    ]
  }),
  methods: {
    flex(artist) {
      const splash = this.$refs.splash;
      splash.play();
      setTimeout(() => {
        splash.pause();
        splash.currentTime = 0;
      }, 200);      

      const refs = this.$refs;

      for (let ref in refs) {
        if (ref !== "splash") {
          refs[ref][0].style.flex = 1;
        }
      }

      refs[artist][0].style.flex = 8;
    }
  }
};
</script>