const User = require('../data/schemas/Admin/UserSchema')

module.exports = function(title, columns, color = null) 
{
    return await User.find({
        online: true
    }, 
    [ 
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