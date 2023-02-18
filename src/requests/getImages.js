import axios from "axios";

const getImages = (query, page) => {
    
    if (!query) {
        return Promise.resolve([]);
    } else {
        return axios
        .get(`https://images-api.nasa.gov/search?q=${query}&page=${page}`)
        .then((response) => {
        // console.log(response.data.collection.items)
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(image => image.data[0].media_type === "image");
        const images = parsedImages.map(image => image.links[0].href);
        // console.log(images);
        return images;
        })
        .catch((err) => {
        console.log(err);
        });
    }
}

export default getImages;