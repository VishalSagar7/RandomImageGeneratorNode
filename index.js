const express = require('express');
const app = express();
const PORT = 3000;

const imageUrls = [
    "https://picsum.photos/seed/1/800/600",
    "https://picsum.photos/seed/2/800/600",
    "https://picsum.photos/seed/3/800/600",
    "https://picsum.photos/seed/4/800/600",
    "https://picsum.photos/seed/5/800/600"
];

app.use(express.json());

app.get('/random-image', (req, res) => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImage = imageUrls[randomIndex];
    res.json({ imageUrl: randomImage });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
