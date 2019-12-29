document.getElementById("btnWeather").addEventListener('click', updateWeather)

const updateWeather = () => {
  fetch('http://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey={1QNWwcA3ErqE4f62ayrw}')
  .then(res => res.json())
  .then(data => {
    const showWeather = document.createElement('div')
    data.forEach(weather_condition => {
      showWeather.innerHTML = `
      <form>
     <p>${weather_condition.title}</p>
     <p>${weather_condition.body}</p>
</form>

`
    })
    document.body.appendChild(showWeather)
  })
}