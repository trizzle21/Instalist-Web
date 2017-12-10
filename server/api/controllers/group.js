
var group = require('../models/group'),
    users = require('../models/group')
    config = require('./config/index.js');




module.exports = {
    getGroup : function(req, res){
        if (!req.body.groupid) {
            response.status(500).json({ "error": "Group ID required." });
            return;
        }
        group.findOne(req.body.groupid).exec(function (err, group) {
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
       //Generates Group, with creator as owner, and only member
        if (!req.body.token || !req.body.name) {
            response.status(500).json({ "error": "All fields required." });
            return;
        }

        users.verifyToken(request.body.token, config.secret, function(owner_id) {

            if (!author_id) { // Invalid token
                response.status(500).json({ "error": "Invalid token." });
                return;
            }


            var group_new = new group.Group();
            group_new.name == req.body.name;
            group_new.member = [owner_id];
            group.owner = owner_id;
            group.memberCount = 1
            if (req.body.description){
                group_new.description = req.body.description;
            }

            group_new.save(function(err) {

                if (err) {
                    res.status(500).json(
                        { 
                            "error": "Bad request",
                            "message": "All Fields required"
                        }
                    );
                    return;
                } else {
                    
                }


            });


    },
    inviteMember:function(req, res){
        //sends email to host
    },
    addMember:function(req, res){

    }


}
