import splitbee from '@splitbee/web'

if (process.env.NODE_ENV !== 'development') {
  splitbee.init({
    token: process.env.NUXT_ENV_SPLITBEE_TOKEN
  })
}
