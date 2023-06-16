module.exports={
    create(context){
        return {
            CallExpression(node)
            {
                if(node.callee.name === 'getp'){
                    context.report({
                        node:node,
                        message:"getp is deprected use getlp",
                        fix: function(fixer){
                            return fixer.replaceText(node.callee, 'getlp');
                        }
                    })
                }
            }
        }
    }
}