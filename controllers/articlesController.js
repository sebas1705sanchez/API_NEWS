import NEWS_API from '../api/NEWS_API.js';

export const getArticles = async (req, res) => {
    const query = req.query.query;
    const category = req.query.category;
    const language = req.query.language || "en";
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;
    const fromDate = req.query.fromDate;
    const toDate = req.query.toDate;

    try {
        const response = await NEWS_API.get("/article/getArticles", {
          params: {
            keyword: query,
            categoryUri: category,
            language: language,
            articlesPage: page,
            articlesCount: pageSize,
            dateStart: fromDate,
            dateEnd: toDate,
          },
        });
        return res.send(response.data);
    } catch (error) {
        console.log(error);
    }
};

export const getArticlesById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const response = await NEWS_API.get(`/article/${id}`);
        return res.send(response.data);
    } catch (error) {
        console.log(error);
    }
};