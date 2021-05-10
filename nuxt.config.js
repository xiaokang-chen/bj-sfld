export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'bj-sfld',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpg' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'ant-design-vue/dist/antd.css'
    ],
    // 可以随处直接使用定义过的变量或函数
    styleResources: {
        stylus: ['./assets/color.styl'],
    },
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/antd-ui',
        '@/plugins/vue-awesome-swiper.js'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: ['@nuxtjs/style-resources'],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}