import Button from "../button";

import { useContext, useState } from "react";

import { CatalogueContext } from "../../Providers/Catalogue";
import { CartContext } from "../../Providers/Cart"

import "./styles.css"
import ProductCard from "../ProductCard";

const ProductList = () => {

  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);
	const [type, setType] = useState("catalogue");

  return (
		<div>
			<header>
				<p>Kenzie Shop</p>
				{type === "catalogue" &&
				<p className="carrinho" onClick={() => setType("cart")}>Carrinho</p>}
				{type === "cart" &&
				<p className="carrinho" onClick={() => setType("catalogue")}>Ver Loja</p>}	
			</header>
      
			
			<ul className="showcase">  
				{type === "catalogue" &&
          catalogue.map((product, index) => (
						<li className="card" key={index}>
              <ProductCard product={product} index={product.id-1} /><Button type={type} product={product} />
            </li>
          ))}
        {type === "cart" &&
          cart.map((product, index) => (
						<li className="card" key={index}>
            	<ProductCard product={product} index={product.id-1}/><Button type={type} product={product} />
            </li>
          ))}
      </ul>
		</div>
  );
};

export default ProductList;