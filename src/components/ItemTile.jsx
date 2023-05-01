import { Image } from "react-bootstrap"


function ItemTile({itemDef, highlight}) {
    return (
        <div className={`float-start rounded p-3${highlight ? ' bg-primary' : ''}`}>
            <Image src={itemDef.icon} alt={itemDef.name} title={itemDef.name} className="img-fit-content"/>
        </div>
    )
}

export default ItemTile
