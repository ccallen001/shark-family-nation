<template>
  <div id="view-Artists" class="view">
    <h2 class="view-title">Artists</h2>
    <main>
      <ArtistsAccordian />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/variables.scss";

#view-Artists {
}
</style>

<script>
import ArtistsAccordian from "@/components/ArtistsAccordian";

export default {
  name: "view-Artists",
  components: {
    ArtistsAccordian
  }
};
</script>
