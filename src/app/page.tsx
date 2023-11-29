import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: 1,
		category: "Accessories",
		name: "Basic Tee",
		price: 10,
		src: "/test.jpg",
		alt: "/test.jpg",
	},
	{
		id: 2,
		category: "Accessories",
		name: "Basic Tee",
		price: 10,
		src: "/test.jpg",
		alt: "/test.jpg",
	},
	{
		id: 3,
		category: "trzeci",
		name: "Basic Tee",
		price: 10,
		src: "/test.jpg",
		alt: "/test.jpg",
	},
	{
		id: 4,
		category: "czwartyItem",
		name: "Basic Tee",
		price: 10,
		src: "/test.jpg",
		alt: "/test.jpg",
	},
];
export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
