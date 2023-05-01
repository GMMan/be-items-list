import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { ItemDefs } from "../item_defs"
import ItemTile from "./ItemTile"

function FindSequence({id, sequence, setSequence}) {
    function seqAppendItem(key) {
        setSequence([...sequence, key])
    }

    function seqRemoveLastItem() {
        if (sequence.length !== 0) {
            setSequence(sequence.slice(0, -1))
        }
    }

    function seqClear() {
        setSequence([])
    }

    const buttons = []
    for (const [key, itemDef] of Object.entries(ItemDefs)) {
        buttons.push(<Col key={key} className="my-3">
            <Button variant="light" onClick={() => seqAppendItem(key)}>
                <Image src={itemDef.icon} alt={itemDef.name} title={itemDef.name} className="img-fit-content"/>
            </Button>
        </Col>)
    }

    return (
        <section className="mb-3">
            <a className="anchor" id={id}/>
            <h2>Sequence finder</h2>
            <Container className="rounded border p-3">
                <p>Use this to find where you are in the grant order by adding
                    the past few items you have received in order.</p>
                <h6>Add or remove item</h6>
                <Row>
                    {buttons}
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Button variant="warning" className="w-100" onClick={seqRemoveLastItem}>
                            Remove last
                        </Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <Button variant="danger" className="w-100" onClick={seqClear}>
                            Clear sequence
                        </Button>
                    </Col>
                </Row>
                <h6 className="mt-3">Sequence</h6>
                <div className="rounded border d-flex flex-wrap p-3">
                    {
                        sequence.length ?
                            (sequence.map((key, i) => {
                                return <ItemTile key={i} itemDef={ItemDefs[key]} />
                            })) :
                            ('No items selected')
                    }
                </div>
            </Container>
        </section>
    )
}

export default FindSequence
