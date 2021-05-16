module.exports = function({ types: babelTypes }) {
  return {
    name: "exchange-url-plugins",
    visitor: {
      TemplateElement(path, state) {
        const nodeValue = path.node.value
        let nextNodeValue = replacement(nodeValue, state.opts)
        nodeValue.raw = nextNodeValue
        nodeValue.cooked = nextNodeValue
      }
    }
  };
};

function replacement(url, opts){
  return url.raw.replace('?fe_env=e', '')
}