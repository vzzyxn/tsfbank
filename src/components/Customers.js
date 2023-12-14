import React, { useEffect, useState } from 'react';  
import { getDocs, collection } from 'firebase/firestore'; 
import { db } from '../firebase';
const Customers = () => {
	const [tsfbank, setTsfbank] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try { 
			  const colRef = collection(db,'tsfbank');
			  const snapshot = await getDocs(colRef);

		let data = [];
		snapshot.forEach((doc) => { 
			data.push({ ...doc.data(), id: doc.id });
		});
		setTsfbank(data);
	}
		catch(error) {
			console.error('Error in: ', error);
		}
	};
	fetchData();
}, []);
	return (
	<div>
	<table className="shadow-sm bg-white mt-4 text-center border-collapse w-full font-sans border-2 border-slate-100">
	  <thead className="bg-slate-900">
		<th className="w-1/2 border text-white font-bold p-4 border-slate-600">Account Number</th>  
		<th className="w-2/2 border text-white font-bold p-4 border-slate-600">Username</th> 
		<th className="w-3/2 border text-white font-bold p-4 border-slate-600">Balance</th>
	  </thead>  
	<tbody> 
		{tsfbank.map((customer) => (
		<tr key={customer.id}>
		  <td>{customer.accnumber}</td>
		  <td>{customer.username}</td> 
		  <td>{customer.balance}</td>
		</tr>   
		))}
	</tbody>
		</table>
	</div>
	);
}
export default Customers; 
