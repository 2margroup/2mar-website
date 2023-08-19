document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const summary = document.getElementById("summary").value;

    // Display profile details in the window
    document.getElementById("profileName").innerText = name;
    document.getElementById("profileEmail").innerText = email;
    document.getElementById("profilePhone").innerText = phone;
    document.getElementById("profileAddress").innerText = address;
    document.getElementById("profileSummary").innerText = summary;

    // Show the profile window
    document.getElementById("profileWindow").style.display = "block";
});
