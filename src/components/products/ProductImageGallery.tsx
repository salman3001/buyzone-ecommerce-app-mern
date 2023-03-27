import { type FunctionComponent } from 'react';
import ImageGallery from 'react-image-gallery';

interface Iprop {
	images: string[];
}
const ProductImageGallery: FunctionComponent<Iprop> = (prop) => {
	const imageData = prop.images.map((image) => ({
		original: import.meta.env.VITE_BASE_URL + image,
		thumbnail: import.meta.env.VITE_BASE_URL + image,
	}));
	return <ImageGallery items={imageData} />;
};

export default ProductImageGallery;
