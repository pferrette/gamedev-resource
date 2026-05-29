const title = document.getElementById("title");
const tag = document.getElementById("tags");
const comment = document.getElementById("comments");
const send = document.getElementById("sendInfo");

const videosComment = JSON.parse(localStorage.getItem("videos"));
console.log(videosComment);
title.innerText = videosComment.Name;
videosComment.isRead = "teste";

send.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("pré set");
  //localStorage.setItem("12345", videosComment);
  const vidinho = window.electronAPI.setVideos();
  console.log("const sem valores" + vidinho);
  vidinho.Tags = tag.value;
  vidinho.Comments = comment.value;
  vidinho.isRead = "teste";
  console.log("const com valores" + vidinho);
});

// const text = 'UPDATE table_name SET Tags = tag, Comments = value2, WHERE ID=videosComment.ID;'
// const values = ['brianc', 'brian.m.carlson@gmail.com']
