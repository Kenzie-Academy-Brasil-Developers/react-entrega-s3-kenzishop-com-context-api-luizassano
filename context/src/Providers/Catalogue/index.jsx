import { createContext, useState } from 'react';

export const CatalogueContext = createContext([]);


export const CatalogueProvider = ({ children }) => {
	const [catalogue] = useState([
		{
			id: 1,
			img: "Jaqueta",
			name: "Lightweight Jacket",
			description: "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante.",
			price: 120
		},
		{
			id: 2,
			img: "Bone",
			name: "Black Hat",
			description: "O gorro Next.js chegou. Esta beldade bordada tem um ajuste confortável que garante que suas orelhas vão estar sempre aquecidas.",
			price: 60
		},
		{
			id: 3,
			img: "Mascara",
			name: "Mask",
			description: "Esta máscara facial durável é feita de duas camadas de tecido tratável e possui presilhas ajustáveis ao seu tamanho.",
			price: 30
		},
		{
			id: 4,
			img: "CamisetaPreta",
			name: "T-Shirt",
			description: "Esta t-shirt é imprenscindível no seu guarda-roupa, combinando o caimento atemporal com o estilo contemporâneo pós-moderno ultra positivista.",
			price: 100
		},
		{
			id: 5,
			img: "CamisetaBranca",
			name: "Short-Sleeve T-Shirt",
			description: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feita do mais macio algodão, perfeita para o dia-a-dia, não precisando nem passar.",
			price: 60
		},
		{
			id: 6,
			img: "JaquetaModelo",
			name: "Packable Jacket",
			description: "Proteja-se com esta jaqueta embalável Champion. Perfeita para carregar para todos os lugares sem ocupar espaço e feita com material que te protege e te aquece.",
			price: 150
		},
		{
			id: 7,
			img: "CamisetaPreta",
			name: "T-Shirt",
			description: "Esta t-shirt é imprenscindível no seu guarda-roupa, combinando o caimento atemporal com o estilo contemporâneo pós-moderno ultra positivista.",
			price: 80
		},
		{
			id: 8,
			img: "CamisetaBranca",
			name: "Short-Sleeve T-Shirt",
			description: "Agora você encontrou a camiseta básica do seu guarda-roupa. É feita do mais macio algodão, perfeita para o dia-a-dia, não precisando nem passar.",
			price: 100
		},
		{
			id: 9,
			img: "JaquetaModelo",
			name: "Packable Jacket",
			description: "Proteja-se com esta jaqueta embalável Champion. Perfeita para carregar para todos os lugares sem ocupar espaço e feita com material que te protege e te aquece.",
			price: 150
		}
	]);

return (
  <CatalogueContext.Provider value={{ catalogue }}>
		{children}
  </CatalogueContext.Provider>
 )
};