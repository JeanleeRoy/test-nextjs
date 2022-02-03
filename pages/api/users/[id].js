export default (req, res) => {
    const {
        query: {id}
    } = req;

    return res.status(200).json({
        email: 'me@email.com',
        id,
        name: 'Jeanlee'
    });
}
