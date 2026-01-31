exports.handler = async (event) => {
  const city = event.queryStringParameters.city;
  
  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'City is required' })
    };
  }

  // This key is stored in Netlify Dashboard, NOT in code
  const API_KEY = process.env.WEATHER_API_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch weather' })
    };
  }
};
