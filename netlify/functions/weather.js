/** @format */

exports.handler = async (event) => {
  const city = event.queryStringParameters.city;

  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "City is required" }),
    };
  }

  // Your API key - stored in Netlify Environment Variables
  // For local testing, you can put your key here temporarily
  // But on Netlify, set it in: Site Settings → Environment Variables → WEATHER_API_KEY
  const API_KEY = process.env.WEATHER_API_KEY || "YOUR_API_KEY_HERE";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch weather" }),
    };
  }
};
