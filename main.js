
document.addEventListener("DOMContentLoaded", () => {
  const category = window.location.pathname.split("/").slice(-2)[0];
  if (category === "meisjes") {
    document.body.classList.add("meisjes");
  }
});
