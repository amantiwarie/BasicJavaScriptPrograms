
let idCounter = 1;

document.getElementById("addBtn").addEventListener("click", addStudent);

document.getElementById("nameInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") addStudent();
});

function addStudent() {
  const name   = document.getElementById("nameInput").value.trim();
  const course = document.getElementById("courseInput").value.trim();
  const status = document.getElementById("statusInput").value;

  if (!name) { alert("Enter a name!"); return; }


  const card = document.createElement("div");


  card.setAttribute("data-id", idCounter);
  card.setAttribute("data-status", status);


  card.className = "card " + status;


  card.innerHTML = `
    <button class="del-btn">delete</button>
    <h3 class="student-name">${name}</h3>
    <p class="student-course">${course || "No course"}</p>
    <small>Status: <b>${status}</b></small><br/>
    <small>ID: ${idCounter}</small>
  `;


  card.querySelector(".del-btn").addEventListener("click", function() {

    console.log("Deleting student id:", card.getAttribute("data-id"));
    card.remove();
    updateCounter();
  });


  card.addEventListener("click", function(e) {
    console.log("You clicked a:", e.target.tagName);
  });


  document.getElementById("cards").appendChild(card);
  $(card).hide().fadeIn(400);


  document.getElementById("nameInput").value = "";
  idCounter++;
  updateCounter();
}

function updateCounter() {

  document.getElementById("counter").textContent =
    "Total Students: " + document.querySelectorAll(".card").length;
}


document.getElementById("fetchBtn").addEventListener("click", function() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      const user = data.results[0];
      document.getElementById("nameInput").value = user.name.first + " " + user.name.last;
      document.getElementById("courseInput").value = "Computer Science";
    })
    .catch(err => console.error("AJAX error:", err));
});


$(document).on("click", ".card.enrolled", function() {
  $(this).toggleClass("enrolled");

  $(this).attr("data-status", "pending");
});
