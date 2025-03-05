import gql from 'graphql-tag';

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  input BookInput {
    bookId: String!
    title: String!
    authors: [String]!
    description: String!
    image: String
    link: String
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: String!, title: String!, authors: [String]!, description: String!, image: String, link: String): User
    removeBook(bookId: String!): User
  }
`;

export default typeDefs;
