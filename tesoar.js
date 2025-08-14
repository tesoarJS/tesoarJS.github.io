window._new = {
  create: {
    div: function(divName) {
      const div = document.createElement("div");
      div.id = divName;
      document.body.appendChild(div);

      const styleEl = document.createElement("style");
      document.head.appendChild(styleEl);

      return {
        h1: function(text) {
          const h1 = document.createElement("h1");
          h1.textContent = text;
          div.appendChild(h1);
          return this;
        },
        p: function(text) {
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
          styleEl.textContent += css;
          return this;
        },
        getDiv: function() { return div; }
      };
    }
  }
};
