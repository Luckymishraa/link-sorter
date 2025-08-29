import React, { useState } from "react";
import "./App.css";
import LinkInput from "./components/LinkInput";
import SortControls from "./components/SortControls";
import LinkList from "./components/LinkList";

function App() {
  // state management
  //all the application's data is managed here in the top-level component
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // functions logic
  // this function now receives the raw text from the LinkInput component
  const handleProcessClick = (rawText) => {
    setIsLoading(true);
    const urls = rawText.split("\n").filter((url) => url.trim() !== "");

    const linkdData = urls.map((url) => {
      try {
        const domain = new URL(url).hostname;
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
        return { url: url, favcon: faviconUrl };
      } catch (error) {
        return { url: url, favicon: null };
      }
    });

    setLinks(linkdData);
    setIsLoading(false);
  };

  const sortAlphabetically = () => {
    const sorted = [...links].sort((a, b) => a.url.localeCompare(b.url));
    setLinks(sorted);
  };

  const sortByDomain = () => {
    const sorted = [...links].sort((a, b) => {
      try {
        const domainA = new URL(a.url).hostname;
        const domainB = new URL(b.url).hostname;
        return domainA.localeCompare(domainB);
      } catch (error) {
        return 0;
      }
    });
    setLinks(sorted);
  };
  // render
  // it passes state and functions down to child components as props.
  return (
    <div className="app-container">
      <header>
        <h1>🔗 Link Sorter</h1>
        <p>Paste your links below and organize them instantly.</p>
      </header>

      <main>
        <LinkInput onProcessLinks={handleProcessClick} isLoading={isLoading} />
        {links.length > 0 && (
          <SortControls
            onSortAlphabets={sortAlphabetically}
            onSortDomain={sortByDomain}
          />
        )}

        <LinkList links={links} />
      </main>
    </div>
  );
}

export default App;
