module.exports = function(columns) {
    columns.forEach((user, index) => {
        userList.push(user.username) 
        rankList.push(user.rank);
        onlineList.push('*' + dayjs(user.updatedAt).fromNow() + '*');
    });

    const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Currently Online')
            .setFields(
                {name: 'User', value: userList.join('\n'), inline: true},
                {name: 'Rank', value: rankList.join('\n'), inline: true},
                {name: 'Logged Since', value: onlineList.join('\n'), inline: true}
            )
            .setImage('https://i.stack.imgur.com/Fzh0w.png');
}