import allTexts from '../../data/text.json';

export default (req, res) => {
    const { id } = req.query;
    let text = allTexts;
    if (id < text.length) {
        text = allTexts[id]
    } else {
        text = allTexts[0]
    }
    res.status(200).json(text);
};