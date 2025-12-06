document.addEventListener("DOMContentLoaded", () => {
  // Dog API - Single Dog Image
  const singleDogButton = document.getElementById("single-dog-button");
  const singleDogContainer = document.getElementById("dog-output");

  async function getSingleDogImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    singleDogContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = data.message;
    singleDogContainer.appendChild(img);
  }

  // Cat API - Single Cat Image
  const singleCatButton = document.getElementById("single-cat-button");
  const singleCatContainer = document.getElementById("cat-output");

  async function getSingleCatImage() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    singleCatContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = data[0].url;
    singleCatContainer.appendChild(img);
  }

  // Weather API using Open-Meteo
  const weatherButton = document.getElementById("weather-button");
  const latitudeInput = document.getElementById("latitude");
  const longitudeInput = document.getElementById("longitude");

  async function getWeather() {
    const weatherOutput = document.getElementById("weather-output");
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;

    if (!latitude || !longitude) {
      weatherOutput.innerHTML = `<p style="color: red;">Please enter latitude and longitude</p>`;
      return;
    }

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit`
      );

      const data = await response.json();
      const current = data.current;

      weatherOutput.innerHTML = `
        <p><strong>${current.temperature_2m}°F</strong></p>
      `;
    } catch (error) {
      weatherOutput.innerHTML = `<p style="color: red;">Error fetching weather data</p>`;
      console.error(error);
    }
  }

  // Currency API - USD to EUR conversion
  const currencyButton = document.getElementById("currency-button");
  const usdAmountInput = document.getElementById("usd-amount");

  async function getExchangeRates() {
    const currencyOutput = document.getElementById("currency-output");
    const usdAmount = usdAmountInput.value;

    if (!usdAmount || usdAmount <= 0) {
      currencyOutput.innerHTML = `<p style="color: red;">Please enter a valid USD amount</p>`;
      return;
    }

    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/USD`
      );

      const data = await response.json();
      const eurRate = data.rates.EUR;
      const convertedAmount = (usdAmount * eurRate).toFixed(2);

      currencyOutput.innerHTML = `
        <p><strong>$${usdAmount} USD = €${convertedAmount} EUR</strong></p>
        <p><small>Rate: 1 USD = ${eurRate.toFixed(4)} EUR</small></p>
      `;
    } catch (error) {
      currencyOutput.innerHTML = `<p style="color: red;">Error fetching exchange rates</p>`;
      console.error(error);
    }
  }

  // Movies API - Trending Movies using TMDB
  const moviesButton = document.getElementById("movies-button");
  const moviesOutput = document.getElementById("movies-output");

  async function getMovies() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=dffdc4dc6253bb962f0e2f84743bd47d`
      );

      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        moviesOutput.innerHTML = `<p style="color: red;">No movies found</p>`;
        return;
      }

      const movie = data.results[0];

      moviesOutput.innerHTML = `
        <div style="text-align: center;">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" style="max-width: 100%; border-radius: 8px;" />
          <p><strong>${movie.title}</strong></p>
          <p>${movie.overview}</p>
          <p><small>Rating: ${movie.vote_average}/10</small></p>
        </div>
      `;
    } catch (error) {
      moviesOutput.innerHTML = `<p style="color: red;">Error fetching movies</p>`;
      console.error(error);
    }
  }

  // GitHub API - User Profile
  const githubButton = document.getElementById("github-button");
  const githubUsernameInput = document.getElementById("github-username");
  const githubOutput = document.getElementById("github-output");

  async function getGitHubUser() {
    const username = githubUsernameInput.value;

    if (!username) {
      githubOutput.innerHTML = `<p style="color: red;">Please enter a GitHub username</p>`;
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        githubOutput.innerHTML = `<p style="color: red;">User not found</p>`;
        return;
      }

      const data = await response.json();

      githubOutput.innerHTML = `
        <div style="text-align: center;">
          <img src="${data.avatar_url}" alt="${
        data.name
      }" style="width: 100px; border-radius: 50%;" />
          <p><strong>${data.name || data.login}</strong></p>
          <p>${data.bio || "No bio available"}</p>
          <p><small>Followers: ${data.followers} | Following: ${
        data.following
      }</small></p>
          <p><small>Public Repos: ${data.public_repos}</small></p>
        </div>
      `;
    } catch (error) {
      githubOutput.innerHTML = `<p style="color: red;">Error fetching GitHub user</p>`;
      console.error(error);
    }
  }

  // Joke API
  const jokeButton = document.getElementById("joke-button");

  async function getJoke() {
    const jokeOutput = document.getElementById("joke-output");

    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
      const data = await response.json();

      if (data.type === "single") {
        jokeOutput.innerHTML = `<p>${data.joke}</p>`;
      } else if (data.type === "twopart") {
        jokeOutput.innerHTML = `
        <p><strong>${data.setup}</strong></p>
        <p>${data.delivery}</p>
      `;
      }
    } catch (error) {
      jokeOutput.innerHTML = `<p style="color: red;">Error fetching joke</p>`;
      console.error(error);
    }
  }

  // QR Code API using GoQR
  const qrButton = document.getElementById("qr-button");
  const qrTextInput = document.getElementById("qr-text");

  async function generateQRCode() {
    const qrOutput = document.getElementById("publicapi-output");
    const text = qrTextInput.value;

    if (!text) {
      qrOutput.innerHTML = `<p style="color: red;">Please enter text for QR code</p>`;
      return;
    }

    try {
      const encodedText = encodeURIComponent(text);
      const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedText}`;

      qrOutput.innerHTML = `
        <div style="text-align: center;">
          <img src="${qrImageUrl}" alt="QR Code" style="max-width: 100%; border-radius: 8px;" />
        </div>
      `;
    } catch (error) {
      qrOutput.innerHTML = `<p style="color: red;">Error generating QR code</p>`;
      console.error(error);
    }
  }

  // Add event listeners to buttons
  singleDogButton.addEventListener("click", getSingleDogImage);
  singleCatButton.addEventListener("click", getSingleCatImage);
  weatherButton.addEventListener("click", getWeather);
  currencyButton.addEventListener("click", getExchangeRates);
  moviesButton.addEventListener("click", getMovies);
  githubButton.addEventListener("click", getGitHubUser);
  jokeButton.addEventListener("click", getJoke);
  qrButton.addEventListener("click", generateQRCode);
});
