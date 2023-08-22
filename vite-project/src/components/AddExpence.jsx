import { useState } from "react"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const AddExpence = () => {

  const {addHistory} = useContext(GlobalContext)
  
  const [text, setText] = useState("")
  const [amount, setAmount] = useState('')
 
      const onSubmit = (e) =>{
        e.preventDefault();
        setText("")
        setAmount('')

        const newHistory = {
          id: Math.floor(Math.random() * 100000),
          text,
          amount: +amount
        }

        addHistory(newHistory)
      } 
 
  return (
    <div className="transaction-cont">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => {
            setText(e.target.value)
          }} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expence, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e) => {
            setAmount(e.target.value)
          }} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddExpence