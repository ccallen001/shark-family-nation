<template>
  <div id="view-DailyPositiveMessage" class="view">
    <h2 class="view-title">Daily Positive Message</h2>
    <main>
      <p id="positive-message">{{ positiveMessage }}</p>
    </main>
  </div>
</template>

<style lang="scss">
@import '@/variables.scss';

#view-DailyPositiveMessage {
  main {
    display: flex;

    #positive-message {
      display: inline-block;
      margin: auto;
      padding: 16px;
      font-size: 24px;
      text-align: center;
      text-shadow: 0 1px 2px $black, 0 1px 8px $black;
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
    // const resp = await fetch("http://quotes.rest/qod");
    // const json = await resp.json();

    // this.positiveMessage = json?.contents?.quotes[0]?.quote;

    this.positiveMessage = 'Believe in yo damn self.';
  }
};
</script>
