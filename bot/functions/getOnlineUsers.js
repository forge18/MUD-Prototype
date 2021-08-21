const User = require('../data/schemas/Admin/UserSchema')

module.exports = async function() 
{
    return await User.find({
        online: true
    }, 
    [ 
        'discordId',
        'username',
        'rank',
        'updatedAt'
    ],
    {
        sort: {
            'rank': -1,
            'username': 1
        }
    },
    function(error, data) {
        if(error) throw new Error(error);
    });
}