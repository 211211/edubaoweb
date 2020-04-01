const path = require(`path`)

module.exports = {
    // ...,
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
        },
        {
            resolve: `gatsby-plugin-antd`,
            options: {
                style: true
            }
        },
        {
            resolve: `gatsby-plugin-typescript-checker`,
        },
        {
            resolve: `gatsby-plugin-root-import`,
            options: {
                containers: path.join(__dirname, `src/containers`),
                components: path.join(__dirname, `src/components`),
                constants: path.join(__dirname, `src/constants`),
                helpers: path.join(__dirname, `src/helpers`),
                layouts: path.join(__dirname, `src/layouts`),
                themes: path.join(__dirname, `src/themes`),
                utils: path.join(__dirname, `src/utils`),
                hooks: path.join(__dirname, `src/hooks`),
                images: path.join(__dirname, `src/images`),
                interfaces: path.join(__dirname, `src/interfaces`),
                languages: path.join(__dirname, `src/languages`),
                languages: path.join(__dirname, `src/languages`),
                images: path.join(__dirname, `src/images`),
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
        },
        {
            resolve: `gatsby-plugin-react-helmet`,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `EDUBAO`,
                short_name: `EDUBAO`,
                icons: [
                    {
                        src: `images/favicon.ico`,
                        sizes: `64x64 32x32 24x24 16x16`,
                        type: `image/x-icon`
                    },
                    {
                        src: `images/logo192.png`,
                        sizes: `192x192`,
                        type: `image/png`
                    },
                    {
                        src: `images/logo512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    }
                ],
                start_url: `/`,
                display: `standalone`,
                theme_color: `#000000`,
                background_color: `#ffffff`
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Nunito`,
                        subsets: [
                            `cyrillic`,
                            `cyrillic-ext`,
                            `latin-ext`,
                            `vietnamese`
                        ],
                        variants: [`400`, `700`],
                        display: `swap`
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-freshchat`,
            options: {
                token: `e8febeb7-42e2-49e4-83e3-dce87f212ffd`,
                host: `https://wchat.freshchat.com`,
            },
        },
        {
            resolve: `gatsby-plugin-tslint`,
            options: {
                test: /\.ts$|\.tsx$/,
                exclude: /(node_modules|cache|public|storybook-static)/
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                javascriptEnabled: true,
                modifyVars: {
                    // '@primary-color': '#0D507A',
                    // '@heading-color': '#0D507A',
                    // '@font-family': 'Nunito, Helvetica',
                    // '@text-color': '#1E3056',
                    // '@info-color': '#7ED0FC',
                    // '@success-color': '#37D8AB',
                    // '@processing-color': '#C8EDFF',
                    // '@error-color': '#B5173B',
                    // '@highlight-color': '#FF9085',
                    // '@warning-color': '#FF9D6F',
                    // '@body-background': '#F9FAFF',
                    // '@text-color-secondary': '#0D507A',
                    // '@border-radius-base': '8px',
                    // '@border-color-base': '#0D507A',
                    // '@disabled-color': '#DDDDDD',
                    // '@disabled-bg': '#B1B1B1',
                    // '@disabled-color-dark': '#797979',
                    // '@btn-default-color': '#0D507A',
                    // '@btn-height-base': '32px',
                    // '@btn-height-lg': '40px',
                    // '@btn-height-sm': '24px',
                    // '@popover-arrow-width': '10px',
                    'primary-color': '#0D507A',
                    'heading-color': '#0D507A',
                    'font-family': 'Nunito, Helvetica',
                    'text-color': '#1E3056',
                    'info-color': '#7ED0FC',
                    'success-color': '#37D8AB',
                    'processing-color': '#C8EDFF',
                    'error-color': '#B5173B',
                    'highlight-color': '#FF9085',
                    'warning-color': '#FF9D6F',
                    'body-background': '#F9FAFF',
                    'text-color-secondary': '#0D507A',
                    'border-radius-base': '8px',
                    'border-color-base': '#0D507A',
                    'disabled-color': '#DDDDDD',
                    'disabled-bg': '#B1B1B1',
                    'disabled-color-dark': '#797979',
                    'btn-default-color': '#0D507A',
                    'btn-height-base': '32px',
                    'btn-height-lg': '40px',
                    'btn-height-sm': '24px',
                    'popover-arrow-width': '10px',
                },
            }
        }
    ],
}
