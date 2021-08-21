import { createApp } from './vendor/vue.esm-browser.js';

const vm = createApp({
  data() {
    return {
      mathSign: null,
      firstArg: null,
      secondArg: null,
    };
  },
  computed: {
    mathResult() {
      if (this.firstArg === '' || this.secondArg === '' || this.mathSign === null) {
        return null;
      }
      if (this.secondArg === '0' && this.mathSign === 'divide') {
        return null;
      }
      switch (this.mathSign) {
        case 'sum':
          return (this.firstArg + this.secondArg).toFixed(4).replace(/\.?0*$/, '');
        case 'subtract':
          return (this.firstArg - this.secondArg).toFixed(4).replace(/\.?0*$/, '');
        case 'multiply':
          return (this.firstArg * this.secondArg).toFixed(4).replace(/\.?0*$/, '');
        case 'divide':
          return (this.firstArg / this.secondArg).toFixed(4).replace(/\.?0*$/, '');
        default:
          return null;
      }
    },
  },
}).mount('#app');
