// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.



module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: '"Meslo LG S for Powerline", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    //fontFamily: '"Lucida Console", Ubuntu, monospace',

    // terminal cursor background color (hex)
    cursorColor: 'rgba(255,255,255,.4)',

    // color of the text
    foregroundColor: '#69F0AE',

    // terminal background color
    // backgroundColor: 'rgba(34, 49, 63, .7)',
    backgroundColor: 'rgba(0, 0, 0, .7)',

    // border color (window, tabs)
    borderColor: '#2aa198',

    // custom css to embed in the main window
    css: `
      .header_header {
        background: rgba(34, 49, 63, .7);
      }
      .tab_tab {
        border: 0;
       }
      .tab_active::before {
        border-bottom: 2px solid rgba(255,255,255,.5);
      }
      .tab_hasActivity {
        color: #42a1e4;
      }
      .tab_hasActivity:hover {
        color: #96d4e4;
      }
    `,

    // custom padding (css format, i.e.: `top right bottom left`)
    termCSS: '',

    // custom padding
    padding: '0px 5px',

    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list

    // colors: [
    //   '#002834',
    //   '#F03434',
    //   '#FFAB91',
    //   '#F2784B',
    //   '#268bd2',
    //   '#F62459',
    //   '#2aa198',
    //   '#eee8d5',
    //   '#839496',
    //   '#cb4b16',
    //   '#ECF0F1',
    //   '#83773b',
    //   '#839496',
    //   '#839496',
    //   '#24C9BD', //color directorios
    //   '#93a1a1'
    // ]
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperterm-tab-icons',
    'hyper-quit',
    'hypergoogle',
    'hyper-blink',
    'hyper-material-theme'
    // 'hyper-materialshell'
    // 'hyper-sierra-vibrancy',
    // 'hyper-solarized-dark'
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
}

