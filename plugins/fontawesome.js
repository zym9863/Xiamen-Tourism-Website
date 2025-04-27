// This plugin adds Font Awesome icons to the application
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import icons
import {
  faHome,
  faMountainSun,
  faUtensils,
  faBus,
  faCircleInfo,
  faUmbrellaBeach,
  faBuilding,
  faLink,
  faAddressBook,
  faEnvelope,
  faPhone,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

import {
  faWeixin,
  faWeibo,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';

import {
  faCopyright
} from '@fortawesome/free-regular-svg-icons';

// Configure Font Awesome
config.autoAddCss = false;

// Add icons to the library
library.add(
  // Solid icons
  faHome,
  faMountainSun,
  faUtensils,
  faBus,
  faCircleInfo,
  faUmbrellaBeach,
  faBuilding,
  faLink,
  faAddressBook,
  faEnvelope,
  faPhone,
  faAngleRight,

  // Brand icons
  faWeixin,
  faWeibo,
  faTiktok,

  // Regular icons
  faCopyright
);

export default defineNuxtPlugin((nuxtApp) => {
  // Register the FontAwesomeIcon component globally
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
