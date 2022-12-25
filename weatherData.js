//

const weatherData = {
  city: "",
  country: "",
  API_KEY: "77a217f1a26ef3b8381802e91bb1f0e1",
  async getWeather() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.API_KEY}`
      );
      // const data = await res.json();
      // console.log(data);
      const { name, main, weather } = await res.json();

      return {
        name,
        main,
        weather,
      };
    } catch (err) {
      // console.log(err);
      UI.showMessage("Error in fetching data");
    }
  },
};

export default weatherData;
