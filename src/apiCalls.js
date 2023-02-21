const getData = async (updater) => {
  const res = await fetch('http://localhost:3001/api/v1/reservations')
  const data = await res.json()
  updater(data)
}
const postData = async (postObj) => {
  const res = await fetch('http://localhost:3001/api/v1/reservations', postObj)

}

export default getData