const api = 'http://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch(`${api}/${country}`, headers)
    .then(res => res.json())
}

export default { getCountry }