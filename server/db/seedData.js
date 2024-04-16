const connection = require('./database');

const data = [
  {
    location: 'New York',
    temperature: 25,
    humidity: 60,
    description: 'Sunny with scattered clouds',
  },
  {
    location: 'Los Angeles',
    temperature: 30,
    humidity: 40,
    description: 'Clear skies and warm',
  },
  // Add more sample data as needed
];

const seedData = () => {
  data.forEach((record) => {
    const { location, temperature, humidity, description } = record;
    const query = `
      INSERT INTO weather_data (location, temperature, humidity, description)
      VALUES ('${location}', ${temperature}, ${humidity}, '${description}')
    `;

    connection.query(query, (err, result) => {
      if (err) {
        console.error('Error seeding data:', err);
      } else {
        console.log('Data seeded successfully');
      }
    });
  });
};

seedData();