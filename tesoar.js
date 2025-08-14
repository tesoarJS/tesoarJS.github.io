window.new = {
  create: {
    div: function(divName) {
      const div = document.createElement("div");
      div.id = divName;
      document.body.appendChild(div);

      // Create a style    element usening  style
      const styleEl = document.createElement("style");
      document.head.appendChild(styleEl);

      return {
        h1: function(text) {
          // this guy is for creating h1 elemecnts
          const h1 = document.createElement("h1");
          h1.textContent = text;
          div.appendChild(h1);
          return this;
        },
        p: function(text) {
          // this cutie below is for the pea tags. (p tags sry for ma bard spellang)
          const p = document.createElement("p");
          p.textContent = text;
          div.appendChild(p);
          return this;
        },
        style: function(styles) {
          let css = "";
          for (const selector in styles) {
            css += selector + " { ";
            const props = styles[selector];
            for (const prop in props) {
              css += prop.replace(/[A-Z]/g, m => "-" + m.toLowerCase()) + ":" + props[prop] + "; ";
            }
            css += "} ";
          }
          // += css;
          // :o;
          // crasy;
          // *crazay;
          // **crazy;
          // there we go;
          styleEl.textContent += css;
          return this;
        },
        getDiv: function() { return div; }
      };
    }
  }
};
