document.addEventListener("DOMContentLoaded", function() {
  fetch('./data.json')
      .then(response => response.json())
      .then(data => renderApp(data))
      .catch(error => console.error('Error fetching data:', error));
});

function renderApp(data) {
  const mainDiv = document.getElementById('main');
  mainDiv.innerHTML = `
      <main>
          <section id="section1">
              <h1>Your Result</h1>
              <div class="circle">
                  <p class="p1">76</p>
                  <p class="p2"> of 100</p>
              </div>
              <p class="txt-great">Great</p>
              <p class="p3"></p>
              /*<p class="p3">You scored higher than 65% of</p>
              <p class="p3">the people who have taken</p>
              <p class="p3">these tests.</p>*/
          </section>
          <section id="section2">
              <h2>Summary</h2>
              ${data.map(category => `
                  <div class="div-${category.category.toLowerCase()}">
                      <div class="icon-and-text">
                          <img src="${category.icon}" alt="${category.category} icon" class="icon-${category.category.toLowerCase()}" />
                          <p class="txt-${category.category.toLowerCase()}">${category.category}</p>
                      </div>
                      <div class="spacer"></div>
                      <div class="scores">
                          <p class="score">${category.score}</p>
                          <div class="spacer2"></div>
                          <p class="score-out-of">/ 100</p>
                      </div>
                  </div>
              `).join('')}
              <button id="continueButton">Continue</button>
          </section>
      </main>
  `;

  const continueButton = document.getElementById('continueButton');
  continueButton.addEventListener('click', handleContinueButtonClick);
}

function handleContinueButtonClick() {
  const userConfirmed = confirm("Do you want to go on to the next set of tests or retake the previous ones?");

  if (userConfirmed) {
      console.log("User confirmed. Proceeding to the next set of tests...");
  } else {
      console.log("User canceled. Staying on the current set of tests...");
  }
}
