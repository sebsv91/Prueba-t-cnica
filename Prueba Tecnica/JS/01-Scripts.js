const destinations = document.querySelectorAll('.destinations a');
const titleElement = document.getElementById('title');
const descriptionElement = document.getElementById('description');
const imageElement = document.getElementById('planet-image');

destinations.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 

        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        const imageSrc = this.getAttribute('data-image');

        titleElement.textContent = title;
        descriptionElement.textContent = description;
        imageElement.src = imageSrc;
        imageElement.style.display = 'block'; 
    });
});
