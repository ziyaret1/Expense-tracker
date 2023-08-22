import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Histories = ({transaction}) => {
    const sign = transaction.amount >= 0 ? "+" : "-";
    const {deleteHistory} = useContext(GlobalContext)
 
    return (
      <li className={sign === "+" ? "plus" : "minus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteHistory(transaction.id)}>X</button>
      </li>
    );
}

export default Histories