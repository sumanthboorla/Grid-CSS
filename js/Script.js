document.addEventListener("DOMContentLoaded", function() {
    fetch('./json/ImageData.json')
        .then(response =>response.json())
        .then(data => {
            const imageGrid = document.getElementById("imageGrider");

            // data.forEach(item => {
            //     const imageItem = document.createElement("div");
            //     imageItem.classList.add("image-item");
                
            //     const img = document.createElement("img");
            //     img.src = item['image-url'];
            
            //     imageItem.appendChild(img);
            //     imageGrid.appendChild(imageItem);
            // });
            data.forEach(item => {
                const imageItem = document.createElement("div");
                imageItem.classList.add("image-item");

                const img = document.createElement("img");
                img.src = item['image-url'];
                img.alt = item.description;

                const doctorName = document.createElement("div");
                doctorName.classList.add("doctor-name");
                doctorName.textContent = item.name; // Assuming your JSON has a "name" field

                imageItem.appendChild(img);
                imageItem.appendChild(doctorName);
                imageGrid.appendChild(imageItem);
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing data:', error);
        });
});
