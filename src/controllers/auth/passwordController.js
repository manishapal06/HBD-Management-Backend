exports.forgotPassword = async (req, res, next) => {
    try {
        res.json({ message: 'Password reset email sent' });
    } catch (error) {
        next(error);
    }
};

exports.resetPassword = async (req, res, next) => {
    try {
        res.json({ message: 'Password reset successful' });
    } catch (error) {
        next(error);
    }
};
