import {ItemDefs, ItemGrantOrder, ItemIDToDefMap} from "../item_defs"
import ItemTile from "./ItemTile"

function ItemOrderList({id, sequence}) {
    const list = ItemGrantOrder.map(id => {
        const key = ItemIDToDefMap[id]
        return {
            key_name: key,
            itemDef: ItemDefs[key],
            highlight: false
        }
    })

    if (sequence.length !== 0) {
        for (let i = 0; i < list.length; ++i) {
            let seqLength = 0;
            for (let j = 0; j < sequence.length && j < list.length; ++j) {
                if (list[(i + j) % list.length].key_name === sequence[j]) {
                    ++seqLength
                } else {
                    break
                }
            }

            if (seqLength === sequence.length) {
                for (let j = 0; j < sequence.length; ++j) {
                    list[(i + j) % list.length].highlight = true;
                }
            }
        }
    }

    return (
        <section className="mb-3">
            <a className="anchor" id={id}/>
            <h2>Grant order</h2>
            <div className="rounded border d-flex flex-wrap p-3">
                {
                    list.map((props, key) => {
                        return <ItemTile key={key} {...props} />
                    })
                }
            </div>
        </section>
    )
}

export default ItemOrderList
