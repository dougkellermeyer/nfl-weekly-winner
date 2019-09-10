import Vue from 'vue';
import Vuetify, {
    VCard
} from 'vuetify/lib';
// import { colors } from 'vuetify/lib';

Vue.use(Vuetify, {
    VCard
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
  },
});
