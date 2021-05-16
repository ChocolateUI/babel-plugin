module.exports = function() {
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

function replacement(url){
  return url.raw.replace('?fe_env=e', '')
}