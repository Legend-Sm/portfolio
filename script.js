document.addEventListener("DOMContentLoaded", function () {
    // 🔥 Typing Animation
    const roles = [
        { text: "Developer", color: "#ff4d4d" }, // Red
        { text: "Designer", color: "#ff4d4d" }, // Blue
        { text: "Coder", color: "#ff4d4d" }, // Yellow
        { text: "Creator", color: "#ff4d4d" } // Green
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetween = 1500;
    const targetElement = document.querySelector(".ty-text samp");

    function type() {
        targetElement.style.color = roles[roleIndex].color; // Change color dynamically

        if (charIndex < roles[roleIndex].text.length) {
            targetElement.textContent += roles[roleIndex].text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetween);
        }
    }

    function erase() {
        if (charIndex > 0) {
            targetElement.textContent = roles[roleIndex].text.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();

    // 🔥 Navbar Menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // 🍔 Toggle menu on click
    hamburger.addEventListener("click", (event) => {
        navMenu.classList.toggle("active");
        event.stopPropagation(); // Prevents the click from closing immediately
    });

    // ❌ Close menu when clicking a link
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // ❌ Close menu when clicking anywhere outside the menu or hamburger
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
    
    
});
