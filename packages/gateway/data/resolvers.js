const mockMails = [
  {
    subject: 'first',
    receiver: 'test@test.tst',
    content: 'hi first',
  },
  {
    subject: 'second',
    receiver: 'test2@test.tst',
    content: 'hi second',
  },
  {
    subject: 'third',
    receiver: 'test3@test.tst',
    content: 'hi third',
  },
  {
    subject: 'firfourthst',
    receiver: 'test@test.tst',
    content: 'hi fourth',
  },
];

const resolvers = {
  Query: {
    Mails: () => mockMails,
  },
};

export default resolvers;
