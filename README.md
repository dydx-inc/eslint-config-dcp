### Install

```shell script
npm install --save-dev eslint \
  prettier \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  ridenow-ra/eslint-config-dcp \
  ridenow-ra/prettier-config-dcp
```

package.json
```
{
  ...
  "prettier": "@dcp/prettier-config"
  ...
}
```

.eslintrc.js
```
module.exports = {
  ...
  extends: ["@dcp/eslint-config"]
  ...
}
```
