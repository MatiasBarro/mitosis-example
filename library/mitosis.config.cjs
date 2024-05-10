/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */
module.exports = {
    files: 'src/**',
    targets: ['react', 'qwik'],
    dest: 'packages',
    commonOptions: {
        typescript: true,
    },
    options: {
        react: {
            stylesType: 'style-tag',
        },
        svelte: {},
        qwik: {},
    },
}
