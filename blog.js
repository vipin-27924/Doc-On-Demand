
const blogPosts = [
  {
      title: "Telemedicine in the Modern Era",
      date: "October 5, 2024",
      content: "Telemedicine offers patients quick access to healthcare, making it more convenient and accessible than ever..."
  },
  {
      title: "Preventing Burnout: Health Tips for Remote Workers",
      date: "September 18, 2024",
      content: "Remote work can lead to burnout if not managed. Here are expert tips to maintain health and productivity."
  },
  {
      title: "The Importance of Mental Health Awareness",
      date: "August 24, 2024",
      content: "Mental health plays a crucial role in overall well-being. Learn how awareness can improve lives and reduce stigma."
  }
];

function loadBlogPosts() {
  const blogContainer = document.getElementById('blogContainer');
  blogPosts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('blog-post');

      
      postDiv.innerHTML = `
          <div class="blog-post-content">
              <h2>${post.title}</h2>
              <p><em>${post.date}</em></p>
              <p>${post.content}</p>
          </div>
      `;
      blogContainer.appendChild(postDiv);
  });
}


window.onload = loadBlogPosts;