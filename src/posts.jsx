export const posts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  username: `  User${i + 1}`,
  avatarUrl: `https://i.pravatar.cc/30?img=${i + 1}`,
  imageUrl: `https://picsum.photos/seed/post${i + 1}/400/300`,
  numberOfLikes: Math.floor(Math.random() * 500),
  description: '#hashtag #loremipsum',
}));

