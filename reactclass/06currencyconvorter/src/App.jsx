/** @format */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { Inputbox } from './components';

function App() {
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState('usd');
	const [to, setTo] = useState('npr');
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(from);
	const options = Object.keys(currencyInfo);

	const swap = () => {
		setFrom(to)
		setTo(from)
		setConvertedAmount(amount)
		setAmount(convertedAmount)
	}

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to])
	}

	return (
		<div
			className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
			style={{
				backgroundImage: `url(https://images.pexels.com/photos/7267612/pexels-photo-7267612.jpeg)`,
			}}>

			<div className='w-full'>
				<div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
					<form onSubmit={(e) => {
						e.preventDefault()
						convert()
					}}>
						<div className='w-full mb-1'>
							<Inputbox
								lable='from'
								amount={amount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setFrom(currency)}
								onAmountChange={(amount) => setAmount(amount)}
								selectedCurrency={from}

							/>
						</div>
						<div className='relative w-full h-0.5'>
							<button className='absolute translate-x-40 -translate-y-1/2 border-2 border-amber-50 rounded bg-blue-500 text-white px-2 py-0.5' onClick={swap}>Swap</button>
						</div>
						<div className='w-full mb-1'>
							<Inputbox
								lable='to'
								amount={convertedAmount}
								amountDisabled
								currencyOptions={options}
								onCurrencyChange={(currency) => setTo(currency)}
								selectedCurrency={to}

							/>
						</div>
						<button type='submit' className='w-full bg-blue-500 text-white px-4 py-3 rounded'>Convert {from} to {to}</button>
					</form>
				</div>
			</div>

		</div>
	);
}

export default App;
