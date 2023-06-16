module.exports={
    create(context){
        return {
            CallExpression(node){
                // console.log("saas",typeof node.arguments[0].value);
                if(node.callee.name === 'checkPositive'){
                    if(typeof node.arguments[0].value !== 'number'){
                        context.report({
                            node:node,
                            message:"checkPositive menthod should send only number"
                        });
                    }
                }
            }
        }
    }
}