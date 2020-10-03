import * as faker from "faker";

const posts = [
  {
    id: faker.random.number(),
    title: faker.lorem.words(6),
    content: faker.lorem.lines(2),
    user: {
      id: faker.random.number(),
      name: faker.name.findName(),
      username: faker.internet.userName(),
      avatarId: faker.internet.avatar(),
      backgroundImage: faker.image.sports(),
      bio: faker.lorem.lines(8),
    },

    commentsCount: faker.random.number(),
    likesCount: faker.random.number(),
    dislikesCount: faker.random.number(),
    liked: true,
    disliked: false,
    mediaId: faker.image.animals(),
  },
  {
    id: faker.random.number(),
    title: faker.lorem.words(6),
    content: faker.lorem.lines(2),
    user: {
      id: faker.random.number(),
      name: faker.name.findName(),
      username: faker.internet.userName(),
      avatarId: faker.internet.avatar(),
      backgroundImage: faker.image.sports(),
      bio: faker.lorem.lines(8),
    },

    commentsCount: faker.random.number(),
    likesCount: faker.random.number(),
    dislikesCount: faker.random.number(),
    liked: true,
    disliked: false,
    mediaId: faker.image.food(),
  },
  {
    id: faker.random.number(),
    title: faker.lorem.words(6),
    content: faker.lorem.lines(2),
    user: {
      id: faker.random.number(),
      name: faker.name.findName(),
      username: faker.internet.userName(),
      avatarId: faker.internet.avatar(),
      backgroundImage: faker.image.technics(),
      bio: faker.lorem.lines(8),
    },

    commentsCount: faker.random.number(),
    likesCount: faker.random.number(),
    dislikesCount: faker.random.number(),
    liked: true,
    disliked: false,
    mediaId: faker.image.abstract(),
  },
  {
    id: faker.random.number(),
    title: faker.lorem.words(6),
    content: faker.lorem.lines(2),
    user: {
      id: faker.random.number(),
      name: faker.name.findName(),
      username: faker.internet.userName(),
      avatarId: faker.internet.avatar(),
      backgroundImage: faker.image.technics(),
      bio: faker.lorem.lines(8),
    },

    commentsCount: faker.random.number(),
    likesCount: faker.random.number(),
    dislikesCount: faker.random.number(),
    liked: true,
    disliked: false,
    mediaId: faker.image.technics(),
  },
];

export { posts };
