

const getImage = async () => {

    try {

        const apiKey = 'MmdETfkKFnqTeMh3VD2JMo6ERWX5mZJo';
        const promis = (`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await promis.json();
        const { url } = data.images.original;
        const gif = document.createElement('img');
        gif.src = url;

        document.body.append(gif);
    }
    catch (error) {
        console.warn(error);
    }
}

getImage();
   