import { Card, Col, Container, Image, Row } from "react-bootstrap"

function ItemDescription({itemDef, rarity}) {
    return (
        <Col xs={12} md={6} lg={4} xl={3} className="my-3">
            <Card className="text-center h-100">
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col className="mb-3">
                                <Image src={itemDef.icon} alt={itemDef.name} className="img-fit-content"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Title>{itemDef.name}</Card.Title>
                                <Card.Text>{itemDef.description}</Card.Text>
                                <Card.Text>Grant chance: {(rarity * 100).toFixed(1)}%</Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemDescription
