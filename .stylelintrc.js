module.exports = {
   rules: {
       'block-no-empty': true,
       'at-rule-no-unknown': null,
   },
   extends: [
           'stylelint-config-rational-order',
           'stylelint-config-prettier',
       ],
       plugins: ["stylelint-order", "stylelint-scss"]
}
