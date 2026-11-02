
document.addEventListener("DOMContentLoaded", async () => {
  const navbar = document.getElementById("navbar");

  if (!navbar) return;

  try {
    const response = await fetch("navbar.html");

    if (!response.ok) {
      throw new Error("Could not load navigation bar");
    }

    navbar.innerHTML = await response.text();
  } catch (error) {
    console.error("Navbar error:", error);
  }
});
