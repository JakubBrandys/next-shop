import { ProductItem } from "@/ui/molecules/ProductItem";
import { type ProductItemType } from "@/ui/types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map(({ id, alt, src, name, category, price }) => (
				<ProductItem key={id} alt={alt} src={src} name={name} category={category} price={price} />
			))}
		</ul>
	);
};
