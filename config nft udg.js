const layersOrder = [
    { name: 'background', number: 19 },
    { name: 'body', number: 16 },
    { name: 'mouth', number: 5 },
    { name: 'accessoire 2', number: 3 },
    { name: 'eyes', number: 15 },
    { name: 'masque', number: 3 },
    { name: 'wear', number: 10 },
    { name: 'hat', number: 38 },
    { name: 'accessoire 1', number: 3 },
];

const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;20

module.exports = { layersOrder, format, rarity, defaultEdition };
