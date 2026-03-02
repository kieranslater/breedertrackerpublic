(function () {
  const config = window.SITE_CONFIG || {};
  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = value;
    });
  };
  setText('[data-app-name]', config.appName || 'DogSeasons');
  setText('[data-site-title]', config.siteTitle || config.appName || 'DogSeasons');
  setText('[data-app-store-name]', config.appStoreName || config.appName || 'DogSeasons');
  setText('[data-tagline]', config.tagline || 'Breeding records, litter tracking and stud management for serious dog breeders.');
  setText('[data-support-email]', config.supportEmail || 'support@example.com');
  setText('[data-company-name]', config.companyOrDeveloperName || 'The developer');
  setText('[data-privacy-effective-date]', config.privacyEffectiveDate || '2 March 2026');

  document.querySelectorAll('[data-support-email-link]').forEach((el) => {
    const email = config.supportEmail || 'support@example.com';
    el.href = 'mailto:' + email;
    el.textContent = email;
  });
  document.querySelectorAll('[data-ios-link]').forEach((el) => {
    el.href = config.iosAppStoreUrl || '#';
  });
  document.querySelectorAll('[data-mac-link]').forEach((el) => {
    el.href = config.macAppStoreUrl || '#';
  });
  document.querySelectorAll('[data-telemetry-section]').forEach((el) => {
    el.hidden = !config.telemetryDeckEnabled;
  });
  document.querySelectorAll('[data-subscription-section]').forEach((el) => {
    el.hidden = !config.subscriptionNoticeEnabled;
  });
  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
