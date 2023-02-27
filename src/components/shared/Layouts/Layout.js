import { Col, Container, Row } from 'react-bootstrap';
import { LateralMenu } from '../LateralMenu';
import { TopMenu } from '../TopMenu';

export const Layout = ({ children }) => {
	return (
		<Container fluid style={{ backgroundColor: 'black' }}>
			<Row>
				<Col
					xs={2}
					style={{
						paddingLeft: '0px',
						paddingRight: '0px',
						marginRight: '0px',
					}}
				>
					<LateralMenu></LateralMenu>
				</Col>
				<Col xs={10} style={{ paddingLeft: '0px' }}>
					<TopMenu></TopMenu>
					<Container>{children}</Container>
				</Col>
			</Row>
		</Container>
	);
};
