module.exports = (req, res, next) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
        return res.status(401).send({ error: 'You must log in!' });
    }
};
