export default {
  devServer: {
    port: 9090,
  },
  output: {
    dir: 'docs',
    publicUrl: '.',
    html: {
      title: 'SpriteJS/next - The next generation of spritejs.'
    },
  },
  // themeFile: 'demos/theme.scss',
  staticFolder: 'dist',
  demoList: '.demoList.json',
  name: 'GLOBE',
  version: 'v1.0',
  homePage: 'https://git.corp.qihoo.net/qiwoo/vis-geo-earth',
  logo: '',
  // 可选主题: active4d, allHallowsEve, amy, blackboard, brillianceBlack,
  // brillianceDull, chromeDevtools, cloudsMidnight, clouds, cobalt,
  // dawn, dreamweaver, eiffel, espressoLibre, github, idle, katzenmilch,
  // kuroirTheme, lazy, magicwbAmiga, merbivoreSoft, merbivore, monokai,
  // pastelsOnDark, slushAndPoppies, solarizedDark, solarizedLight,
  // spacecadet, sunburst, textmateMacClassic, tomorrowNightBlue,
  // tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow,
  // twilight, vibrantInk, zenburnesque, iplastic, idlefingers, krtheme,
  // monoindustrial,
  boxTheme: 'monokai',
  globalPackages: {
    js: ['./spritejs.js', './sprite-extend-3d.js', './sprite-geo-earth.js'],
    css: [],
  },
  // tab waterfall
  editorViewMode: 'tab',
  editorOptions: {
    disableLayerHinting: true,
  }
};