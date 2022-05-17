/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import TabBar from '../packages/tab-bar/index.js';

const components = [Button, TabBar];

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.3',
  install,
  Button,
  TabBar
};
