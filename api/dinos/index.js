const data = require('./dino');

module.exports = async function (context, req) {
    // try {
      const dinosaurs = data.getDinos();
      console.log(data);
      context.res = {
        // status: 200, /* Defaults to 200 */
        "content-type": "application/json",
        body: JSON.stringify(dinosaurs)
    };
      // context.res.status(200).json(dinosaurs);
    // } catch (error) {
    //   context.res.status(500).send(error);
    // }
  };