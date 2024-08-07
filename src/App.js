import { useEffect, useRef, useState } from 'react'
import './App.css';
import AppHead from './Components/AppHead/AppHead';
import AppBody from './Components/AppBody/AppBody';
import Navbar from './Components/Navbar/Navbar';
import { TransactionsContext,MoneyContext } from './Contexts/AllContexts';
import { dummyData } from './dummyData';
function App() {
  const [money, setMoney] = useState({
    balance: 3800,
    expenses: 1200
  })
  const [transactionData, setTransactionData] = useState(dummyData);
  const initialRender = useRef(true);
  useEffect(()=>{
    if(initialRender.current)  onLoad();

    return(() => {
      initialRender.current = false;
    })
  }, [])

  useEffect(()=> {
    //save data to local storage and if it is initial render skip saving
    if(!initialRender.current) localStorage.setItem("allData", JSON.stringify({money, transactionData}));
  }, [money, transactionData])

  //functions
  const onLoad = () => {
    //load data from local storage if present
    const localData = localStorage.getItem("allData");
    if(localData){
      const {money, transactionData} = JSON.parse(localData);
      setMoney(money);
      setTransactionData(transactionData);
    }
  }



  return (
    <main className='App'>
      <MoneyContext.Provider value={[money, setMoney]}>
      <TransactionsContext.Provider value={[transactionData, setTransactionData]}>
        <Navbar />
        <AppHead balance={money.balance} expenses={money.expenses}/>
        <AppBody transactionData={transactionData}/>
      </TransactionsContext.Provider> 
      </MoneyContext.Provider>
    </main>
  );
}

export default App;
