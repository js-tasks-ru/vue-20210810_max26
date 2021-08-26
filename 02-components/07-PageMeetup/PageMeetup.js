import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
    },
  },

  data() {
    return {
      meetupItem: null,
      showError: false,
      errorText: '',
    };
  },

  computed: {
    showLoad() {
      return this.meetupItem === null && this.showError === false;
    },
  },

  watch: {
    meetupId() {
      this.getMeetup();
    },
  },

  mounted() {
    this.getMeetup();
  },

  methods: {
    getMeetup() {
      this.meetupItem = null;
      this.showError = false;
      fetchMeetupById(this.meetupId)
        .then((result) => {
          this.meetupItem = result;
        })
        .catch((error) => {
          this.errorText = error.message;
          this.showError = true;
        });
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view :meetup='meetupItem' v-if='meetupItem'></meetup-view>

      <ui-container v-if='showLoad'>
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if='showError'>
        <ui-alert>{{ errorText }}</ui-alert>
      </ui-container>
    </div>`,
});
