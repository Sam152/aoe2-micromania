import Unit from "./Unit";
import unitMetadataFactory from "./unitMetadataFactory";

export default function calculateDamage(attacking: Unit, receiving: Unit) {
    const metadata = unitMetadataFactory.getUnit(attacking);
    return metadata.attackDamage;
}
