exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: 'rgba(0,255,255,0.61)',
    foregroundColor: '#fff',
    backgroundColor: '#292929',
    borderColor: '#333',
    css: `
      ${config.css || ''}
      .tab_tab,
      .tabs_nav,
      .hyper_main,
      .tabs_borderShim,
      .tabs_list, 
      .tab_text, 
      .hyperterm_main { 
        border: none }
      .tabs_list { border-radius: 3.8px 0 3.8px 0 }
      .tab_active:before { border: none }
      .tabs_list { background: #222 }
      .tab_active { background: #292929 }
      .tab_hasActivity { color: white }
      .tab_hasActivity .tab_text span {
        display: flex;
        justify-content: center;
        align-items: center }
      .tab_hasActivity .tab_text span:before {
        content: '';
        display: block;
        margin-right: 1em;
        width: 0.55em;
        height: 0.55em;
        background: #47e4c2;
        border-radius: 1em }`,
    padding: '1em',
    colors: [
      '#292929',  
      '#ff7860',  
      '#00ffa3',  
      '#FFF46B',  
      '#0aa7ff',  
      '#FFA2BF',  
      '#00ffff',  
      '#d0d0d0',  
      '#808080',  
      '#ff7860',  
      '#00ffa3',  
      '#FFF46B',  
      '#0aa7ff',  
      '#FFA2BF',  
      '#00ffff',  
      '#ffffff'   
    ]
  });
}
