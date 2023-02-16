let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Hey! Come Back :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
