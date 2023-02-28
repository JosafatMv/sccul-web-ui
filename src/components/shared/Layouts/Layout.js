import { Col, Container, Row } from 'react-bootstrap';
import { LateralMenu } from './LateralMenu';

import '../../../assets/css/components/shared/Layouts/Layout.css';

export const Layout = ({ children }) => {
	return (
		<Container fluid>
			<Row className='layout-container'>
				<Col xs={2}>
					<LateralMenu></LateralMenu>
				</Col>
				<Col xs={10}>
					<Container className='mt-4 ps-4'>{children}</Container>
				</Col>
			</Row>
		</Container>
	);
};
