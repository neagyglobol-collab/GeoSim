const SERVER_ADDRESS = "geosim.online";

document.querySelectorAll(".server-address").forEach(el => {
  el.textContent = SERVER_ADDRESS;
});

const toast = document.getElementById("toast");
let toastTimer;

function showToast() {
  toast.textContent = "Адрес скопирован: " + SERVER_ADDRESS;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll(".copy-server").forEach(button => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(SERVER_ADDRESS);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = SERVER_ADDRESS;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    showToast();
  });
});

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
