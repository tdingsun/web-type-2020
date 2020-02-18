import allTexts from '../../data/text.json';

export default (req, res) => {
    res.status(200).send(allTexts.length);
};