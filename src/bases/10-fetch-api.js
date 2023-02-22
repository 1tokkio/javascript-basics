
const apiKey = 'MmdETfkKFnqTeMh3VD2JMo6ERWX5mZJo';

const httpCode = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

httpCode
    .then(resp => resp.json())
    .then (({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img'); img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);