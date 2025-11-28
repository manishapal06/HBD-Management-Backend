exports.getDailyReport = async (req, res, next) => {
    try {
        res.json({ report: { date: new Date(), summary: 'Daily report' } });
    } catch (error) {
        next(error);
    }
};
