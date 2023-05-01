import { Container, Row } from "react-bootstrap";
import { ItemDefs, ItemGrantOrder, ItemIDToDefMap } from "../item_defs";
import ItemDescription from "./ItemDescription";

function ItemDescriptionList({id}) {
    return (
        <section className='mb-3'>
            <a className="anchor" id={id}/>
            <h2>Items</h2>
            <Container>
                <Row>
                    {
                        Object.values(ItemIDToDefMap).map((k, i) => {
                            const def = ItemDefs[k]
                            if (def.hidden) return null
                            const rarity = ItemGrantOrder.filter(x => x === i).length / ItemGrantOrder.length
                            return <ItemDescription key={i} itemDef={def} rarity={rarity}/>
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default ItemDescriptionList
