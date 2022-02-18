const { User } = require('../models');

const resolvers = {
  Query: {
    getSingleUser: async () => {
      return Tech.find({});
    },
    
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {user, token};
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne(
        { email },
        
      );
      const token = signToken(user);
      return {user, token};
    },
  },
};

module.exports = resolvers;
