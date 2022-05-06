import "./styles.css"

import Bone from "../../assets/images/Bone.png";
import CamisetaPreta from "../../assets/images/CamisetaPreta.png";
import CamisetaBranca from "../../assets/images/CamisetaBranca.png";
import JaquetaModelo from "../../assets/images/JaquetaModelo.png";
import Jaqueta from "../../assets/images/Jaqueta.png";
import Mascara from "../../assets/images/Mascara.png";

const ProductCard = ({ product, index }) => {
	const images = [Jaqueta, Bone, Mascara, CamisetaPreta, CamisetaBranca, JaquetaModelo, CamisetaPreta, CamisetaBranca, JaquetaModelo]

	return (
		<div className="product-card">
			<img className="product-img" src={images[index]} alt={product.name} />
			<div className="card-body">
				<p className="product-name">{product.name}</p>
				<p className="product-description">{product.description}</p>
				<p className="product-price">R$ {product.price.toFixed(2)}</p>
			</div>
		</div>
	)
}

export default ProductCard;