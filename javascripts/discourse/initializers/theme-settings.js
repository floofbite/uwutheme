// app/initializers/theme-settings.js
export function initialize(application) {
    const themeSettings = {
      theme_uploads_prefix: '/path/to/uploads', // Define your prefix path here
    };

    application.register('config:theme-settings', themeSettings, { instantiate: false });
  }

  export default {
    initialize,
  };