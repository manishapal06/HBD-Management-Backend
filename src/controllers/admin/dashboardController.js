exports.getStats = async (req, res, next) => {
    try {
        res.json({ stats: { hospitals: 10, users: 100 } });
    } catch (error) {
        next(error);
    }
};
