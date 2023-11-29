import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { type ProductItemType } from "@/ui/types";

export const ProductItem = ({ alt, src, price, name, category }: ProductItemType) => {
	return (
		<li>
			<article>
				<ProductImage alt={alt} src={src} />
				<ProductItemDescription name={name} category={category} price={price} />
			</article>
		</li>
	);
};
