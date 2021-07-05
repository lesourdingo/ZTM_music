import _ from 'lodash';

export default {
  install(app) {
    const baseComponents = require.context('../components/base', false, /[A-Za-a0-9-_,\s]+\.vue$/i);
    baseComponents.keys().forEach((filename) => {
      const componentConfig = baseComponents(filename);
      const componentName = _.upperFirst(
        _.camelCase(filename.replace(/^\.\//, '').replace(/\.w+$/, '')),
      );
        //* export default
      app.component(`Base${componentName}`, componentConfig.default || componentConfig);
    });
  },
};
