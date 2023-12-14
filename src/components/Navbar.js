import React from 'react'; 
import { Link } from 'react-router-dom'; 
function Navbar() { 
	return (   
	<div className="mt-2 text-black">
	  <nav>   
	<div class="font-normal subpixel-antialiased mr-36 font-sans text-base text-end"> 
	<Link to="/" class="no-underline hover:underline decoration-2">Home </Link>
          <Link to="/customers" class="no-underline hover:underline ml-4 decoration-2">Customers</Link>  
		<Link to="/transfers" class="ml-4 no-underline hover:underline decoration-2">Transfers</Link> 
		   <Link to="/transactions" class="ml-4 no-underline hover:underline decoration-2">Transactions</Link>
	</div>
	</nav>  
	</div>
	);
}
export default Navbar;
