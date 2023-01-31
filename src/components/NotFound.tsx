import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div
			style={{
				padding: '20px',
			}}
		>
			<h1>Opps! There is nothing here</h1>
			<h3>
				Goto - <Link to="/">Home Page</Link>
			</h3>
		</div>
	);
};

export default NotFound;
