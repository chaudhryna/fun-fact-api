document.querySelector('button').addEventListener('click', getFunFact)

function getFunFact() {
  const urlFacts = `https://api.aakhilv.me/fun/facts`
  const urlPhotos = `https://api.unsplash.com/photos/random?client_id=tnrXgxBLnfICUXsbKZ1fTIPl0e0CrLa5th21GJoqJNE`

  let fact = document.querySelector('.fact')
  let photo = document.querySelector('img')

  fetch(urlFacts)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      fact.innerText = data[0] 
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

  fetch(urlPhotos)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      photo.src = data.urls.thumb
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
