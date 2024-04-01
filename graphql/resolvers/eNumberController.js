const ENumber = require('../../models/enumbers');

module.exports = {
  enumbers: async () => {
    try {
      const enumbers = await ENumber.find();
      return enumbers.map(enumber => ({
        ...enumber._doc,
        _id: enumber.id,
      }));
    } catch (error) {
      throw error;
    }
  },

  createENumber: async ({ input }) => {
    const { Number, Name, HalalStatusFirst, HalalStatusSecond, Tag, Type } = input;

    const enumber = new ENumber({
      Number,
      Name,
      HalalStatusFirst,
      HalalStatusSecond,
      Tag,
      Type
    });

    try {
      const savedENumber = await enumber.save();
      return {
        ...savedENumber._doc,
        _id: savedENumber.id
      };
    } catch (error) {
      throw error;
    }
  }
};
