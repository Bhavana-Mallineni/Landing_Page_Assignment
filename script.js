function validateForm(event) {
  event.preventDefault();
  console.log("submit event");

  let isValid = true;

  // Reset previous errors
  document.querySelectorAll(".error").forEach((error) => {
    error.innerText = "";
    error.style.display = "none";
  });

  // Name validation
  const name = document.getElementById("name").value;
  if (!name) {
    document.getElementById("name-error").innerText =
      "The Field is empty. Please check and fill in the details again";
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  } else if (name.length < 7) {
    document.getElementById("name-error").innerText =
      "First name must be at least 7 characters long.";
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById("email-error").innerText =
      "The Field is empty. Please check and fill in the details again";
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("email-error").innerText =
      "Please enter a valid email.";
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  // Phone validation
  const phone = document.getElementById("phone").value;
  if (!phone) {
    document.getElementById("phone-error").innerText =
      "The Field is empty. Please check and fill in the details again";
    document.getElementById("phone-error").style.display = "block";
    isValid = false;
  } else if (phone.length < 10) {
    document.getElementById("phone-error").innerText =
      "Phone number must be at least 10 digits long.";
    document.getElementById("phone-error").style.display = "block";
    isValid = false;
  }

  // Website validation
  // const website = document.getElementById("website").value;
  // const urlPattern = /^(https?:\/\/)?([\w-]+)+([\w-]+)+(\/[\w- ;,./?%&=]*)?$/;
  // if (!website) {
  //   // document.getElementById("website-error").innerText =
  //   //   "The Field is empty. Please check and fill in the details again";
  //   // document.getElementById("website-error").style.display = "block";
  //   // isValid = false;
  // } else if (!urlPattern.test(website)) {
  //   document.getElementById("website-error").innerText =
  //     "Please enter a valid URL.";
  //   document.getElementById("website-error").style.display = "block";
  //   isValid = false;
  // }

  // content validation
  const content = document.getElementById("content").value;
  if (!content) {
    document.getElementById("content-error").innerText =
      "Please select a content option.";
    document.getElementById("content-error").style.display = "block";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("success-modal").style.display = "flex";

    // Reset form fields
    document.getElementById("creator-form").reset();
    document.querySelectorAll(".error").forEach((error) => {
      error.innerText = ""; // Clear error messages
      error.style.display = "none";
    });
  }
}

function closeModal() {
  document.getElementById("success-modal").style.display = "none"; // Close the modal
}

function scrollToForm() {
  console.log("ScrollTOFORM");
  document
    .querySelector(".floating-form")
    .scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
