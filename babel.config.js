module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    [
      '@vue/babel-preset-jsx', 
      {
        injectH: false, // @vue/babel-preset-jsx默认会注入一个h语法糖，会与vue本身冲突，这个配置要设置false，否则项目启动会报错
      }
    ]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
