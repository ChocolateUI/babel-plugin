let core = require('@babel/core');
let types = require('babel-types');
const template = require('@babel/template');
const sourceCode = `
  function sum(a, b){
    return a+b+c;
  }
`;

let TryCatchTransformClasses = {
  visitor:{
    FunctionDeclaration(nodePath) {
      let { node } = nodePath;
      let { id } = node;
      let blockStatement = node.body;
      // 如果此函数的第一个语句已经是一个 try 语句了，就不在处理了否则会死循环
      if(blockStatement.body && types.isTryStatement(blockStatement.body[0])){
        return;
      }
      let catchStatement = template.statement('console.log(error)')();
      let catchClause = types.catchClause(types.identifier('error'), types.blockStatement([catchStatement]));
      let tryStatement = types.tryStatement(node.body, catchClause);
      var func = types.functionExpression(id, node.params, types.blockStatement([
        tryStatement
      ]), node.generation, node.async)
      nodePath.replaceWith(func);
    }
  }
}

let targetCode = core.transform(sourceCode, {
  plugins: [TryCatchTransformClasses]
});

console.log(targetCode.code);