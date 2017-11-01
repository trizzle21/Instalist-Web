
var group = require('../models/group')


module.exports = {
    getGroup : function(req, res){
        if (!res.params.id) {
        response.status(500).json({ "error": "Group ID required." });
        return;
        }
        group.findOne(res.body.groupid).exec(function (err, group) {
            if(err){
                response.status(500).json({ "error": "Something went wrong. Please try again." });
                return;

            }else {
                response.status(200).json({group});
            }



    });


       //TODO: returns a group
    },
    createGroup : function(req, res){
       //do something
            return;

    }
}
