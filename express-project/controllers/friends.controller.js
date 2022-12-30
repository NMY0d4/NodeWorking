const friends = [
    {
        id: 0,
        name: "Albert Einstein",
    },
    {
        id: 1,
        name: "Isaac Newton",
    },
];

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "Missing friend name",
        });
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name,
    };
    friends.push(newFriend);
    res.json(newFriend);
}

function getFriends(req, res) {
    res.json(friends);
}

function getOneFriend(req, res) {
    const friendId = +req.params.friendId;
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: `Friend with id:${friendId} does not exist`,
        });
    }
}

module.exports = { postFriend, getFriends, getOneFriend };
