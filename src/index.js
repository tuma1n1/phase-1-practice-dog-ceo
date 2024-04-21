console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById("dog-image-container");
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error("Error fetching dog images:", error));
  });

  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breedList = document.getElementById("dog-breeds");
      Object.keys(data.message).forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
      });
    })
    .catch(error => console.error("Error fetching dog breeds:", error));

    document.getElementById("dog-breeds").addEventListener("click", event => {
        if (event.target.tagName === "li") {
          event.target.style.color = "blue"; 
        }
      });
      const filterDropdown = document.getElementById("breed-dropdown");

      filterDropdown.addEventListener("change", event => {
        const selectedLetter = event.target.value.toLowerCase();
        const breedList = document.getElementById("dog-breeds");
        const breedItems = breedList.getElementsByTagName("li");
    
        Array.from(breedItems).forEach(item => {
          const breedName = item.textContent.toLowerCase();
          if (breedName.startsWith(selectedLetter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });