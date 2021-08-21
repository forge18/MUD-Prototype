const User = require('../data/schemas/Admin/UserSchema')



module.exports = function(title, columns, color = null) 
{
    const users = await User.find({
    online: true
}, 