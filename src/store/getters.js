export default {
    time:(state) => {
        return new Date().getTime() + state.timeNum * 60 * 1000;
      }
}