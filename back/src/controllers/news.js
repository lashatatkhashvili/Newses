const News = require("../models/news");

async function getNewses(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const limit = parseInt(request.query.limit) || 10;

    const skip = (page - 1) * limit;

    const promises = await Promise.all([
      News.find().skip(skip).limit(limit),
      News.countDocuments(),
    ]);

    const newses = promises[0];
    const total = promises[1];

    response.json({
      newses,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalArticles: total,
    });
  } catch (err) {
    console.log(err);
    response.json(err);
  }
}

module.exports = {
  getNewses,
};
