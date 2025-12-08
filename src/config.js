// Configuration that uses environment variables
// For local development: values come from .env.local
// For GitHub Actions: values come from repository secrets

const config = {
  form_endpoint: process.env.REACT_APP_FORM_ENDPOINT || '',
  captcha_sitekey: process.env.REACT_APP_CAPTCHA_SITEKEY || ''
};

export default config;