import React from 'react'


function InputBox({
  //it is taking three inputs, label, className and amount
  //label means From and to
    label,
    amount,
    onAmountChange, //we also took onAmountChange for the function who is calling this component, to change the state
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
    //below we injected the className as ${className}
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //event gives string, so Number converts it into an Integer and e.target.value gives us the value that was changed
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(Number(e.target.value))}
                    disabled={currencyDisable}
                    
                >
                    
                        {currencyOptions.map((currency) => ( //we are looping through the currencyOptions array and getting the results
                                <option value={currency}>
                                  {currency}
                                </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
