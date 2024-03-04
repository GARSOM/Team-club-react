const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();
const animals = {
    dog: {
        type1: 'chihuahua',
        type2: 'bloodhound',
        type3: 'german shepherd'
    },
    cat: {
        type1: 'abyssinian',
        type2: 'dwelf',
        type3: 'highlander'
    }
};
app.get('/animals', (req, res) => {
    res.send(animals[req.query.animal][req.query.type]);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})