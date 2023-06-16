/**
 * @fileoverview shani
 * @author shani
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");


module.exports.configs= {
    shaniConfig:{
       rules:{
        "shani/funcparam":"error",
        "shani/find-payment":"error",
        "shani/find-fixme":["error","fixme","leela"],
       }

    }
}
