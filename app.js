const markRead = document.querySelector(".mark-read");
const readCircle = document.querySelectorAll(".read-circle");
console.log(readCircle);
const notifNumber = document.querySelector(".notif-number");

markRead.addEventListener("click", () => {
  readCircle.forEach((item) => {
    item.classList.add("hide");
  });
  notifNumber.innerHTML = "0";
});
