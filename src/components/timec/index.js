import mytimec from './timec';

const timec = {
  install:function (Vue) {
    Vue.component('timec', mytimec)
  }
};

export default timec;
