<template>
  <div id="view-Home" class="view">
    <div id="bubble-background"></div>
    <h2 class="view-title">Home</h2>
    <main>
      <div class="img-container">
        <img src="@/assets/images/shark-logo.png" />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
#view-Home {
  position: relative;

  #bubble-background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/bubbles.gif");
    opacity: 0.2;
  }

  .view-title,
  main {
    position: relative;
    z-index: 1;
  }

  main {
    display: flex;

    .img-container {
      @keyframes comeIn {
        to {
          transform: rotate(1080deg) scale(1);
        }
      }

      display: inline-block;
      margin: auto;
      transform: rotate(0) scale(0);
      animation: comeIn 4000ms linear forwards;
    }

    img {
      @keyframes bob {
        50% {
          top: -32px;
        }
      }

      position: relative;
      top: -128px;
      animation: bob 5000ms ease infinite;
      animation-delay: 4000ms;
    }
  }
}
</style>

<script>
export default {
  name: "view-Home"
};
</script>
