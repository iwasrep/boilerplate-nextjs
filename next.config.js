// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  env: {
    APP_NAME: 'Template Padrão Next.JS',
    APP_DESCRIPTION: 'Descrição do Template Padrão feito em Next.JS',
    APP_DEVELOPER: 'iWAS! Web, Apps & Sistemas',
    APP_THEME_COLOR: '#1a1a1a',
    FACEBOOK_DOMAIN_VERIFICATION: 'https://iwas.com.br',
    GOOGLE_ANALYTICS: 'GA-12345678'
  }
})
