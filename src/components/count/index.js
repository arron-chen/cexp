import MyCount from './count';

const count = {
  install:function (Vue) {
    Vue.component('count', MyCount)
  }
};

export default count;
