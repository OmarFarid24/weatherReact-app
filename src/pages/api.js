export const getWeather = async (city) => {
    const apiKey = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) return null;

        //if (!response.ok) throw new Error("No se encontró la ciudad");
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener datos del clima:", error);
        return null;
    }
};