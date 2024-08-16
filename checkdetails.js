import { useEffect, useState } from "react";
const Card = (props) => {
  return <div className="main-card">
    <div className="card">
    <h3 className="details">Name: {props.data.meetName}</h3>
    <h3 className="details">Mail: {props.data.meetMail}</h3>
    <h3 className="details">Num: {props.data.meetNum}</h3>
    <h3 className="details">Gen: {props.data.meetGen}</h3>
    <h3 className="details">Add: {props.data.meetAdd}</h3>
  </div>
  </div>
}
const CheckDetails = () => {
  const [hiring, sethiring] = useState([])
  async function hire() {
    const data = await fetch('https://hiring-3e473-default-rtdb.firebaseio.com/hiring.json')
    const originaldata = await data.json()
    const array = []
    for (let x in originaldata) {
      if (originaldata.hasOwnProperty(x)) {
        array.push(originaldata[x])
      }
    }
    sethiring(array)
  }
  useEffect(() => {
    hire()
  }, [])
  return <div className="checkdetails">
    <div className="card-container">
      {
        hiring.map((y) => {
          return <Card data={y} />

        })

      }
    </div>


  </div>

}
export default CheckDetails;