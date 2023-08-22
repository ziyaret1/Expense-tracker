import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react"
import Histories from "./Histories"


const HistoryExpence = () => {

  const {transactions} = useContext(GlobalContext)



  return ( 
    <>
    <h3>History</h3>
    <ul className="list">
      {
        transactions.map(transaction => (
          <Histories key={transaction.id} transaction={transaction}/>
          
        ))
    }
    </ul>
    </>
  )
}

export default HistoryExpence