// ============ MOBILE NAV TOGGLE ============
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const navActions = document.querySelector(".nav-actions");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navActions.classList.toggle("open");
  });
}

// Close mobile nav on link click (optional)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navActions.classList.remove("open");
  });
});

// ============ TESTIMONIAL SLIDER ============
const slider = document.getElementById("testimonialSlider");
const testimonials = slider.querySelectorAll(".testimonial");
const dots = slider.querySelectorAll(".dot");
const ctrlButtons = slider.querySelectorAll(".ctrl-btn");

let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t) => t.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));

  testimonials[index].classList.add("active");
  dots[index].classList.add("active");

  currentIndex = index;
}

ctrlButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const direction = btn.getAttribute("data-direction");
    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(nextIndex);
    } else {
      const prevIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(prevIndex);
    }
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = Number(dot.getAttribute("data-index"));
    showTestimonial(index);
  });
});

// Auto-rotate every 7 seconds
setInterval(() => {
  const nextIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(nextIndex);
}, 7000);

// ============ SUBSCRIBE FORM (BASIC VALIDATION) ============
const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const subscribeMessage = document.getElementById("subscribeMessage");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      subscribeMessage.textContent = "Please enter your email address.";
      subscribeMessage.style.color = "#ffe3e3";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      subscribeMessage.textContent = "Please enter a valid email.";
      subscribeMessage.style.color = "#ffe3e3";
      return;
    }

    subscribeMessage.textContent = "Thank you for subscribing!";
    subscribeMessage.style.color = "#d1ffe3";
    subscribeForm.reset();
  });




}

// LOGIN PAGE SCRIPT

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "🙈"; // hidden icon
  } else {
    passwordInput.type = "password";
    toggleIcon.textContent = "👁"; // visible icon
  }
}

function handleLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  errorMsg.textContent = "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    errorMsg.textContent = "Email is required";
    return;
  }

  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Enter a valid email address";
    return;
  }

  if (!password) {
    errorMsg.textContent = "Password is required";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters";
    return;
  }

  alert("Login successful!");
  window.location.href = "index.html";

}


// ============ SIGNUP PAGE SCRIPT ============


function togglePassword(id) {
  const input = document.getElementById(id);
  const icon = input.nextElementSibling;

  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🙈";
  } else {
    input.type = "password";
    icon.textContent = "👁";
  }
}

function handleSignup() {
  const fullName = document.getElementById("fullName").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMsg = document.getElementById("errorMsg");

  errorMsg.textContent = "";

  const phone = document.getElementById("phone").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\+\d{1,4}\s\d{6,12}$/;

  if (!fullName || !username || !email || !phone || !password || !confirmPassword) {
    errorMsg.textContent = "All fields are required";
    return;
  }

  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Enter a valid email address";
    return;
  }

  if (!phonePattern.test(phone)) {
  errorMsg.textContent = "Enter a valid mobile number";
  return;
}

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters";
    return;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match";
    return;
  }

  alert("Account created successfully!");
  window.location.href = "login.html";
}

function updateCountryCode() {
  const countryCode = document.getElementById("countrySelect").value;
  const phoneInput = document.getElementById("phone");

  // Remove any existing country code
  phoneInput.value = phoneInput.value.replace(/^\+\d+\s*/, "");

  // Add selected country code
  phoneInput.value = countryCode + " ";
}

// Ensure default country code is added on load
window.addEventListener("DOMContentLoaded", () => {
  updateCountryCode();
});



// ============ FORGOT PASSWORD LINK ============

    function handleForgotPassword() {
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message");

      message.textContent = "";
      message.style.color = "#e11d48";

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        message.textContent = "Email is required";
        return;
      }

      if (!emailPattern.test(email)) {
        message.textContent = "Enter a valid email address";
        return;
      }

      message.style.color = "#16a34a";
      message.textContent =
        "If this email is registered, a password reset link has been sent.";

      setTimeout(() => {
        window.location.href = "login.html";
      }, 2500);
    }
  