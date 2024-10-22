const article = document.querySelector("body > div.container");
console.log(article)
// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("detail__date");
  badge.textContent = `⏱️ ${readingTime} menit membaca`;


    const heading = article.querySelector("div.grid-row.content__bg.mgt-16 > div.column-8 > article > div.detail__header > h1");
    console.log('fandhi dhuga prayoga');
    console.log(heading);
    
    (heading).insertAdjacentElement("afterend", badge);
}