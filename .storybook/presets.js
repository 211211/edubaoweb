module.exports = [
    {
        name: '@storybook/preset-ant-design',
        options: {
            lessOptions: {
                modifyVars: {
                    '@primary-color': '#0D507A',
                    '@heading-color': '#0D507A',
                    '@font-family': 'Nunito, Helvetica',
                    '@text-color': '#1E3056',
                    '@info-color': '#7ED0FC',
                    '@success-color': '#37D8AB',
                    '@processing-color': '#C8EDFF',
                    '@error-color': '#B5173B',
                    '@highlight-color': '#FF9085',
                    '@warning-color': '#FF9D6F',
                    '@body-background': '#F9FAFF',
                    '@text-color-secondary': '#0D507A',
                    '@border-radius-base': '8px',
                    '@border-color-base': '#0D507A',
                    '@disabled-color': '#DDDDDD',
                    '@disabled-bg': '#B1B1B1',
                    '@disabled-color-dark': '#797979',
                    '@btn-default-color': '#0D507A',
                    '@btn-height-base': '32px',
                    '@btn-height-lg': '40px',
                    '@btn-height-sm': '24px',
                    '@popover-arrow-width': '10px',
                },
            },
        },
    },
]
