const button = document.getElementById("toggleComments");
const comments = document.getElementById("comments");

button.addEventListener("click", () => {
  const isHidden = comments.hasAttribute("hidden");

  if (isHidden) {
    comments.removeAttribute("hidden");
    button.textContent = "Hide comments";
  } else {
    comments.setAttribute("hidden", "");
    button.textContent = "Show comments";
  }
});