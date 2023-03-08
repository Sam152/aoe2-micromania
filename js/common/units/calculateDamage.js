import unitMetadataFactory from './unitMetadataFactory';
export default function calculateDamage(attacking, receiving) {
    var metadata = unitMetadataFactory.getUnit(attacking);
    return metadata.attackDamage;
}
//# sourceMappingURL=calculateDamage.js.map