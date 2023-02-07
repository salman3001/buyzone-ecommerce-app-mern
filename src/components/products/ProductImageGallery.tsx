import { type FunctionComponent } from 'react';
import ImageGallery from 'react-image-gallery';
import { baseUrl } from '../../Utils/baseUrl';

interface Iprop {
	images: string[];
}
const ProductImageGallery: FunctionComponent<Iprop> = (prop) => {
	const imageData = prop.images.map((image) => ({
		original: baseUrl + image,
		thumbnail: baseUrl + image,
	}));
	return <ImageGallery items={imageData} />;
};

export default ProductImageGallery;
