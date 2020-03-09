<template>
  <div id="view-DailyPositiveMessage" class="view">
    <h2 class="view-title">Daily Positive Message</h2>
    <main>
      <p id="positive-message">{{ positiveMessage || 'Loading...' }}</p>
    </main>
  </div>
</template>

<style lang="scss">
@import "@/variables.scss";

#view-DailyPositiveMessage {
  main {
    display: flex;

    #positive-message {
      display: inline-block;
      margin: auto;
      padding: 16px;
      font-size: 20px;
      text-align: center;
      text-shadow: 0 1px 2px $black, 0 2px 4px $white;
      transform: translateY(-100px);
    }
  }
}
</style>

<script>
export default {
  name: "view-DailyPositiveMessage",
  data: () => ({
    positiveMessage: ""
  }),
  async created() {
    const dpm = window.localStorage.getItem(`dpm${new Date().getDate()}`);

    if (dpm) {
      this.positiveMessage = dpm;
    } else {
      try {
        const resp = await fetch("http://quotes.rest/qod");
        const json = await resp.json();
        const quote = json?.contents?.quotes[0]?.quote;

        window.localStorage.setItem(`dpm${new Date().getDate()}`, quote);

        this.positiveMessage = quote;
      } catch {
        this.positiveMessage = "Believe in yo DAMN self!";
      }
    }
  }
};
</script>
