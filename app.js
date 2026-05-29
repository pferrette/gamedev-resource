const aLink = document.getElementById("articleLink");
const vLink = document.getElementById("videoLink");
const checkVideo = document.getElementById("ckbVideo");
const checkArticle = document.getElementById("ckbArticle");
const saveButton = document.getElementById("btnSave");

const isArticleRead = false;
const isVideoWatched = false;

async function loadVideos() {
  const vResp = await window.electronAPI.getVideos();
  vLink.href = vResp.data.Link;
  vLink.text = vResp.data.Name;
  vLink.target = "_blank";
  localStorage.setItem("videos", JSON.stringify(vResp.data));
}
loadVideos();

async function loadArticles() {
  const aResp = await window.electronAPI.getArticles();
  aLink.href = aResp.data.Link;
  aLink.text = aResp.data.Name;
  aLink.target = "_blank";
  //localStorage.setItem("articles", JSON.stringify(vResp.data));
}
loadArticles();

// document.addEventListener("DOMContentLoaded", () => {
//   // Select all <a> tags with href starting with "http" (external links)
//   const externalLinks = document.querySelectorAll('a[href^="http"]');

//   // Add click event listeners to external links
//   externalLinks.forEach((link) => {
//     link.addEventListener("click", async (e) => {
//       // Prevent default Chromium navigation
//       e.preventDefault();

//       // Get the URL from the link's href attribute
//       // const url = link.getAttribute("href");
//       const url = vLink.href;

//       try {
//         // Use the exposed electronAPI to open the URL in the default browser
//         await window.electronAPI.openExternal(url);
//         console.log(`Successfully opened ${url} in default browser`);
//       } catch (err) {
//         // Handle errors (e.g., invalid URL)
//         console.error(`Failed to open ${url}:`, err);
//         alert(`Could not open link: ${err.message}`);
//       }
//     });
//   });
// });

document.getElementById("ckbVideo").addEventListener("change", () => {
  // if (checkVideo.checked) {
  //   isVideoWatched = true;
  // } else {
  //   isVideoWatched = false;
  // }
});

document.getElementById("ckbArticle").addEventListener("change", () => {
  if (ckbArticle.checked) {
    isArticleRead = true;
  } else {
    isArticleRead = false;
  }
});

saveButton.addEventListener("click", async (e) => {
  e.preventDefault();
  // if (isArticleRead == true || isVideoWatched == true) {
  //   //abre janela de tags e comentarios
  //   window.open;
  // }
  window.electronAPI.botaoClicado();
});
