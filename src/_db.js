const games = [
    { id: '1', title: 'GTA V', platforms: ['PC', 'PS5', 'Xbox Series X'] },
    { id: '2', title: 'Elden Ring', platforms: ['PC', 'PS5', 'Xbox Series X'] },
    { id: '3', title: 'Stardew Valley', platforms: ['PC', 'Switch', 'Mobile'] },
    { id: '4', title: 'Among Us', platforms: ['PC', 'Mobile', 'Switch'] },
];

const authors = [
    { id: 'a1', name: 'Alice Johnson', verified: true },
    { id: 'a2', name: 'Bob Smith', verified: false },
    { id: 'a3', name: 'Carmen Lee', verified: true },
    { id: 'a4', name: 'David Kim', verified: false },
];

const reviews = [
    {
        id: 'r1',
        rating: 9,
        content: 'Fantastic open-world experience with a ton of content and replayability.',
        authorId: 'a1',
        gameId: '1',
    },
    {
        id: 'r2',
        rating: 10,
        content: 'A masterpiece of design and challenge. Every boss fight felt meaningful.',
        authorId: 'a3',
        gameId: '2',
    },
    {
        id: 'r3',
        rating: 8,
        content: 'Relaxing and deeply satisfying farming gameplay. Great for long sessions.',
        authorId: 'a2',
        gameId: '3',
    },
    {
        id: 'r4',
        rating: 7,
        content: 'Fun with friends, but can get repetitive solo.',
        authorId: 'a4',
        gameId: '4',
    },
    {
        id: 'r5',
        rating: 8,
        content: 'Still holds up; tons of activities and a lively community.',
        authorId: 'a1',
        gameId: '3',
    },
];

export default { games, authors, reviews };