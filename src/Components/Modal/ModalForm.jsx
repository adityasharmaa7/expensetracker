import React, { useContext,useEffect, useState } from 'react'
import {MoneyContext, TransactionsContext} from '../../Contexts/AllContexts';
import FormButtons from '../FormButton/FormButtons';
import './Modal.css'

function ModalForm({
    toggleModal,
    formType,
    existingData
}){

    const [money, setMoney] = useContext(MoneyContext);
    const [transactionData, setTransactionData] = useContext(TransactionsContext);

    const [formData,setFormData] = useState({
        name:"",
        price:"",
        date: new Date().toISOString().split("T")[0],
        category:""
    })
    
    const [balanceFormData, setBalanceFormData] = useState({income: ""});
    useEffect(()=>{
        if(existingData){
            updateFormDataWithExistingData();
        }
    },[])

    
    const updateFormDataWithExistingData = () => {
        const {name,date,amount,category} = existingData;
        setFormData({
            name:name,
            date:date,
            price:amount,
            category:category
        })
    }
    const handleChange = (e) => {
        const key =  e.target.name;
        const value  = e.target.value;
        setFormData({
            ...formData,
            [key]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formType === "Add Balance"){
            setMoney({
                ...money,
                balance: money.balance + balanceFormData.income
            });
        }
        if(formType === "Add Expense"){
            let newExpense = money.expenses + Number(formData.price);
            let newBalance = money.balance - Number(formData.price);
            
            if(newBalance < 0){
                return alert("Out of balance");
            }else{
                let newId = new Date / 1;
                let newTransaction = {...formData, id: newId};
                setMoney({balance: newBalance, expenses: newExpense});
                setTransactionData([...transactionData, newTransaction]);
            }
        }
        if(formType === "Edit Expense"){
            let newExpense = money.expenses + Number(formData.price) - Number(existingData.amount);
            let newBalance = money.balance - Number(formData.price) + Number(existingData.amount);

            if(newBalance < 0) return alert("Out of balance");
            
            const indexOfTransaction = transactionData.findIndex(transaction => existingData.id === transaction.id);
            const updatedTransaction = {...formData, id: existingData.id};
            transactionData[indexOfTransaction] = updatedTransaction;

            setMoney({balance: newBalance, expenses: newExpense});
            setTransactionData([...transactionData]);
        }
        toggleModal();
    }

    const expenseAndEditInput = () => {
        return(
            <div className='formInputDiv'>
                <input 
                    required
                    value={formData.name}
                    className='formInput'
                    onChange={handleChange}
                    placeholder='Title'
                    type='text'
                    name='name'
                    autoFocus
                />
                <input
                    required
                    value={formData.price}
                    className="formInput" 
                    onChange={handleChange} 
                    placeholder='Price' 
                    type='number' 
                    name='price'  
                />
                <select
                    value={formData.category} 
                    className="formInput" 
                    onChange={handleChange} 
                    placeholder='Select Category' 
                    name='category'
                >
                    <option value={null}>Select Category</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="travel">Travel</option>
                </select>
                <input 
                    required
                    value={formData.date}
                    className="formInput" 
                    onChange={handleChange} 
                    placeholder='dd/mm/yyyy' 
                    type='date' 
                    name='date'
                />
            </div>
        )
    }

    const incomeInputs = () => {
        return (
            <div className='balanceFormInputDiv'>
                <input 
                className="formInput" 
                onChange={e=> setBalanceFormData({income: +e.target.value})} 
                placeholder='Income Amount' 
                type='number' 
                name='income' 
                value={balanceFormData.income}
                autoFocus
                required
                />
            </div>
        )
    }

    return (
        <form className='modalForm expensesForm' onSubmit={handleSubmit}>
            {formType === "Add Balance" ? incomeInputs() : expenseAndEditInput()}
            <FormButtons text={formType} toggleModal={toggleModal}/>
        </form>
    )
}

export default ModalForm;
