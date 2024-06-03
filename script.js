
const websites = [
  {
    name: "Freedom Hosting",
    link: "http://fhostingineiwjg6cppciac2bemu42nwsupvvisihnczinok362qfrqd.onion/dashboard/",
    keywords: ["hosting", "freedom"],
    summary: "Dashboard for Freedom Hosting."
  },
  {
    name: "SearXNG",
    link: "http://searx3aolosaf3urwnhpynlhuokqsgz47si4pzz5hvb7uuzyjncl2tid.onion/preferences",
    keywords: ["search engine", "privacy"],
    summary: "Preferences for SearXNG search engine."
  },
  {
    name: "TorlanD",
    link: "http://torlgu6zhhtwe73fdu76uiswgnkfvukqfujofxjfo7vzoht2rndyhxyd.onion/",
    keywords: ["tor", "land"],
    summary: "TorlanD service."
  },
  {
    name: "Darkside",
    link: "http://darksid3f3ggicny772rvdmrcgfbtixsyjpdgm6unh5qci6r24ukg4qd.onion/",
    keywords: ["darkside", "service"],
    summary: "Darkside service."
  },
  {
    name: "Oniondir",
    link: "http://oniodtu6xudkiblcijrwwkduu2tdle3rav7nlszrjhrxpjtkg4brmgqd.onion/",
    keywords: ["onion", "directory"],
    summary: "Onion directory service."
  },
  {
    name: "Deep search",
    link: "http://search7tdrcvri22rieiwgi5g46qnwsesvnubqav2xakhezv4hjzkkad.onion/",
    keywords: ["search", "deep web"],
    summary: "Deep search service."
  },
  {
    name: "Daniels hosting",
    link: "http://bxuldv5kaynguiq6orjmrqxpgtafv3flbgqfpbrw6gv3rzdfdhk4psyd.onion/",
    keywords: ["daniels", "hosting"],
    summary: "Daniels hosting service."
  },
  {
    name: "WormGPT",
    link: "http://wormgpthkhr6gyfphff6rd5axmva4tp7zgzxmdmxkof5hjlykkuutiqd.onion/",
    keywords: ["worm", "gpt"],
    summary: "WormGPT service."
  },
  {
    name: "Dread",
    link: "https://dreadditevelidot.onion/",
    keywords: ["dread", "community"],
    summary: "Dread community service."
  },
  {
    name: "Torch 2",
    link: "http://torchdeedp3i2jigzjdmfpn5ttjhthh5wbmda2rr3jvqjg5p77c54dqd.onion/",
    keywords: ["torch", "search"],
    summary: "Torch 2 search service."
  },
  {
    name: "Torch",
    link: "http://xmh57jrknzkhv6y3ls3ubitzfqnkrwxhopf5aygthi7d6rplyvk3noyd.onion/cgi-bin/omega/omega",
    keywords: ["torch", "search"],
    summary: "Torch search service."
  },
  {
    name: "Just another library",
    link: "http://libraryfyuybp7oyidyya3ah5xvwgyx6weauoini7zyz555litmmumad.onion/archives/books/science/",
    keywords: ["library", "books"],
    summary: "Just another library service."
  },
  {
    name: "Hidden Wiki",
    link: "http://zqktlwiuavvvqqt4ybvgvi7tyo4hjl5xgfuvpdf6otjiycgwqbym2qad.onion/wiki/index.php/Main_Page",
    keywords: ["wiki", "hidden"],
    summary: "Hidden Wiki service."
  },
  {
    name: "Bitcoin wallet",
    link: "http://walletxpszdah6lh4fspldni4chzyrjc64y3seznunyfj3oshpljauid.onion/login",
    keywords: ["bitcoin", "wallet"],
    summary: "Bitcoin wallet service."
  }
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
