console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

fetch(imgUrl)
    .then ((response) => response.json())
    .then ((data) => {
        for (const url of data['message']) {
            const image = document.createElement('img');
            image.src = url;
            document.getElementById('dog-image-container').append(image);
        }
    });

fetch(breedUrl)
    .then ((response) => response.json())
    .then ((data) => {
        for (const key of Object.keys(data['message'])) {
            const item = document.createElement('li');
            item.innerText = key;
            document.getElementById('dog-breeds').append(item);

            for (const subBreed of data['message'][key]) {
                const subItem = document.createElement('li');
                subItem.innerText = `${subBreed} ${key}`;
                document.getElementById('dog-breeds').append(subItem);
            }
        }
    })
    .then (() => {
        const listItems = document.getElementsByTagName('li');
        const dropdown = document.getElementById('breed-dropdown');

        for (const dogBreed of listItems) {
            dogBreed.addEventListener('click', (e) => {
                e.target.style.color = 'red';
            });
        }

        
        dropdown.addEventListener('change', (e) => {
            for (const dogBreed of listItems) {
                if (e.target.value === dogBreed.innerText[0])
                    dogBreed.hidden = false;
                else
                    dogBreed.hidden = true;
            }
        });

    });
