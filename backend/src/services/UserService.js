const { userRepository } = require("../repositories");
const { createNewInstance } = require("../repositories/UserRepository");
const { StatusCodes } = require("http-status-codes");

module.exports = {
   createUser: async(user) => {
      await createNewInstance(user);
   },

   getUser: async (requesterDetails) => {
      const userId = requesterDetails.id;

      const user = await userRepository.getById(userId);

      if (!user) {
         throw {
            status: StatusCodes.NOT_FOUND,
            message: "User not found; id = " + userId
         };
      }

      return { user };      
   },
   
   getAllUsers: async () => {
      // verify
      const users = await userRepository.getAll();
      
      return { users };      
   },

   updateUser: async (userDetails) => {
      const userId = userDetails.id;

      const userToBeUpdated = await userRepository.getById(userId);

      if (!userToBeUpdated) {
         throw {
            status: StatusCodes.NOT_FOUND,
            message: "User not found; id = " + userId
         };
      }

      const updatedResponse = await userRepository.updateInstance(userToBeUpdated, userDetails);

      return { updatedResponse };
   },

   autodeleteUser: async (requesterDetails) => {
      const { id } = requesterDetails;

      const deleteResponse = await userRepository.deleteInstanceById(id);

      return {
         message: "User deleted with success",
         deleteResponse
      };
   }
};