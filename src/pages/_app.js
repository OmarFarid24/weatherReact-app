import "@/styles/app.css";

export default function App({}){
  return (
    <>
    <div class="weather_card">
     <div class="search_bar">
       <input type="text" class="text" placeholder="Enter city name" id="cityInput" ></input>
       <button class="search_button">Enter</button>
     </div>
     <div>
       image
     </div>
     <h1 id="temperature">--°C</h1>
     <h2 id="cityName">City Name</h2>
     <div>
      <div class="details">
      < div class="humidity">
          <p>Humidity:</p>
          <p id="humidity">--%</p>
        </div>
        <div class="wind-speed">
          <p>Wind Speed:</p>
          <p id="windSpeed">-- Km/H</p>
        </div>
      </div>
     </div>
    </div>
    </>
  );
}