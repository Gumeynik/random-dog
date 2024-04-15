// function getRandomDogImage() {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Ошибка HTTP: ' + response.status);
//         }
//         return response.json();
//     })
//     .then(data => {
//         const dog = data.message;
//         const container = document.querySelector('#dog-image-container'); // Используйте более конкретный селектор
//         const img = document.createElement('img');
//         img.src = dog;
//         container.appendChild(img); // Используйте appendChild для добавления нового изображения в контейнер
//     })
//     .catch(error => {
//         console.error('Произошла ошибка при получении данных:', error);
//     });
// }

// window.onload = getRandomDogImage;
fetch('https://dog.ceo/api/breeds/image/random')
.then(data => data.json())
.then((res) => {
    if (res.status !== 'success') {
        return;
    }
    document.querySelector('#dog-image-container').innerHTML = `
    <img class="img" src='${res.message}'>
    `
}
)