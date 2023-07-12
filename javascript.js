window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const dataContainer = document.getElementById('dataContainer');
  
    // Fetch data from JSON Placeholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // Hide the loader
        loader.style.display = 'none';
  
        // Display the fetched data
        data.forEach(post => {
          const card = createPostCard(post);
          dataContainer.appendChild(card);
        });
  
        // Show the data container
        dataContainer.style.display = 'block';
      })
      .catch(error => {
        console.error('Error:', error);
        loader.textContent = 'Error occurred while fetching data.';
      });
  
    // Helper function to create a post card
    function createPostCard(post) {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const title = document.createElement('h2');
      title.textContent = post.title;
  
      const body = document.createElement('p');
      body.textContent = post.body;
  
      card.appendChild(title);
      card.appendChild(body);
  
      return card;
    }
  });
  