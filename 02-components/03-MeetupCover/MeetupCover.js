import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
  },

  computed: {
    checkImage() {
      return this.image ? { '--bg-url': `url('${this.image}')` } : null;
    },
  },

  template: `
    <div class="meetup-cover" :style="checkImage">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
