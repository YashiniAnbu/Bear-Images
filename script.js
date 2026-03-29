function getBearImage() {
  const width  = Math.floor(Math.random() * 400) + 200;
  const height = Math.floor(Math.random() * 400) + 200;
  document.getElementById("bearImage").src =`https://placebear.com/${width}/${height}`;
}
getBearImage();