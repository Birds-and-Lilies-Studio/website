// Random Bible Quotes
const bibleQuotes = [
  "Be strong and courageous. Do not be afraid. - Joshua 1:9",
  "The Lord is my shepherd; I shall not want. - Psalm 23:1",
  "I can do all things through Christ who strengthens me. - Philippians 4:13",
  "Trust in the Lord with all your heart. - Proverbs 3:5",
  "For I know the plans I have for you. - Jeremiah 29:11",
  "Let all that you do be done in love. - 1 Corinthians 16:14",
  "The Lord is my light and my salvation—whom shall I fear? - Psalm 27:1",
  "Come to me, all who are weary and burdened, and I will give you rest. - Matthew 11:28",
  "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God. - Philippians 4:6",
  "God is our refuge and strength, an ever-present help in trouble. - Psalm 46:1",
];

function updateBibleQuote() {
  const quoteContainer = document.getElementById("bible-quote");
  let index = Math.floor(Math.random() * bibleQuotes.length);
  quoteContainer.innerText = bibleQuotes[index];
}

setInterval(updateBibleQuote, 10000);
updateBibleQuote();

// Featured Artwork Rotator
const featuredArtImages = [
  "images/art/Matthew 6 25-34/IMG_3855.JPG",
  "images/art/Psalm 36/IMG_3857.JPG",
];

let featuredIndex = 0;
function rotateFeaturedArt() {
  featuredIndex = (featuredIndex + 1) % featuredArtImages.length;
  const featuredImage = document.getElementById("featured-art-image");
  featuredImage.style.opacity = 0;
  setTimeout(() => {
    featuredImage.src = featuredArtImages[featuredIndex];
    featuredImage.style.opacity = 1;
  }, 500);
}

setInterval(rotateFeaturedArt, 4000);
