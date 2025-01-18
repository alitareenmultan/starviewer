// Check if the current page is a GitHub repository
if (window.location.pathname.split('/').length >= 3) {
  const [user, repo] = window.location.pathname.split('/').slice(1, 3);
  
  // Fetch the repository details from GitHub API
  fetch(`https://api.github.com/repos/${user}/${repo}`)
    .then(response => response.json())
    .then(data => {
      if (data.stargazers_count) {
        const starCount = data.stargazers_count;

        // Display the star count on the repository page
        const repoHeader = document.querySelector('.h1');
        if (repoHeader) {
          const starInfo = document.createElement('div');
          starInfo.style.marginTop = '10px';
          starInfo.style.fontSize = '16px';
          starInfo.style.color = '#0366d6';
          starInfo.textContent = `⭐ Star Count: ${starCount}`;
          repoHeader.appendChild(starInfo);
        }
      }
    })
    .catch(console.error);
}
