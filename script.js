const websites = [
  {
    name: "Website 1",
    link: "https://www.website1.com",
    keywords: ["keyword1", "keyword2"],
    summary: "Summary of Website 1."
  },
  {
    name: "Website 2",
    link: "https://www.website2.com",
    keywords: ["keyword3", "keyword4"],
    summary: "Summary of Website 2."
  },
  // Add more websites as needed
];

function search() {
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  if (searchInput === '') {
    searchResults.innerHTML = '<p>Please enter a search keyword.</p>';
    return;
  }

  const filteredWebsites = websites.filter(website =>
    website.keywords.some(keyword => keyword.includes(searchInput))
  );

  if (filteredWebsites.length === 0) {
    searchResults.innerHTML = '<p>No results found.</p>';
    return;
  }

  filteredWebsites.forEach((website, index) => {
    const resultBox = document.createElement('div');
    resultBox.classList.add('result-box');
    resultBox.innerHTML = `
      <h2>${index + 1}. <a href="${website.link}" target="_blank">${website.name}</a></h2>
      <p>${website.summary}</p>
    `;
    searchResults.appendChild(resultBox);
  });
}
