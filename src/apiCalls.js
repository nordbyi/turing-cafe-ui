const getData = async (updater) => {
  const res = await fetch('http://localhost:3001/api/v1/reservations')
  console.log(res)
  const data = await res.json()
  updater(data)
  console.log(data)
}

export default getData