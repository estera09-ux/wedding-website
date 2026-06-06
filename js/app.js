

// ✅ UK Timezone Safe Date (London Summer Time)
const weddingDate = new Date("2026-06-15T15:00:00+01:00").getTime();
const countdownElement = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Wedding day reached
  if (distance < 0) {
    countdownElement.innerHTML =
      "<h3>Today is the Wedding Day! 💍✨</h3>";
    return;
  }

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display countdown in premium boxes
  countdownElement.innerHTML = `
    <p class="countdown-title">Days Until We Say “I Do” 💕</p>

    <div class="countdown-boxes">
      <div class="time-box">
        <strong>${days}</strong>
        <span>Days</span>
      </div>

      <div class="time-box">
        <strong>${hours}</strong>
        <span>Hours</span>
      </div>

      <div class="time-box">
        <strong>${minutes}</strong>
        <span>Minutes</span>
      </div>

      <div class="time-box">
        <strong>${seconds}</strong>
        <span>Seconds</span>
      </div>
    </div>
  `;
}, 1000);





//  ✨ VENUE BUTTON HIGHLIGHT


const venueBtn = document.querySelector(".venue-btn");

if (venueBtn) {
  venueBtn.addEventListener("click", () => {
    document.getElementById("venue").classList.add("highlight");

    setTimeout(() => {
      document.getElementById("venue").classList.remove("highlight");
    }, 1500);
  });
}







