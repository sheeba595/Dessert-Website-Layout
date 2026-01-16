 
document.querySelectorAll('.dessert-solo img').forEach(img => {
  const images = img.dataset.images.split(',');
  let index = 0;
  let interval = null;

  img.addEventListener('mouseenter', () => {
    if (interval) return; // prevent multiple intervals

    interval = setInterval(() => {
      index = (index + 1) % images.length; // infinite loop
      img.src = images[index];
    }, 1000);
  });

  img.addEventListener('mouseleave', () => {
    clearInterval(interval);
    interval = null; // reset so it can start again on next hover
  });
});
 


  const clickButtons = document.querySelectorAll(".click-btn");
  const closeButtons = document.querySelectorAll(".close-btn");

  clickButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const message = btn.nextElementSibling; // message div after button
      message.style.display = "flex";
      btn.style.display = "none"; // hide "Click To Read"
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const message = btn.closest(".message-1");
      const clickBtn = message.previousElementSibling; // back to the button
      message.style.display = "none";
      clickBtn.style.display = "inline-block"; // show "Click To Read" again
    });
  });


  const items = document.querySelectorAll(".accordion-part");

  items.forEach(item => {
    const qns = item.querySelector(".accordion-qns");
    const icon = item.querySelector(".icon");

    qns.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // close all
      items.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      });

      // open current if it was closed
      if (!isOpen) {
        item.classList.add("active");
        icon.textContent = "-";
      }
    });
  });


  function toggleSearch() {
    const box = document.getElementById("searchBox");
    box.style.display = box.style.display === "grid" ? "none" : "grid";
  }

  function toggleDesserts() {
    const box = document.getElementById("dessert-dropdown");
    box.style.display = box.style.display === "flex" ? "none" : "flex";
}



const toggleLink = document.getElementById("toggleLink");
const loginInput = document.getElementById("e-mail");

let isEmail = true;

toggleLink.addEventListener("click", () => {
  if (isEmail) {
    // switch to mobile
    loginInput.type = "tel";
    loginInput.placeholder = "Enter Mobile No";
    toggleLink.textContent = "With Email ID";
  } else {
    // switch back to email
    loginInput.type = "email";
    loginInput.placeholder = "Enter Email ID";
    toggleLink.textContent = "With Mobile";
  }
  isEmail = !isEmail;
});