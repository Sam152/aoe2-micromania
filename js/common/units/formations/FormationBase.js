var FormationBase = (function () {
    function FormationBase() {
    }
    FormationBase.prototype.form = function (positions, destination) {
        if (positions.length === 0) {
            return [];
        }
        if (positions.length === 1) {
            return [destination.clone()];
        }
        return this.doForm(positions, destination);
    };
    FormationBase.prototype.doForm = function (positions, destination) {
        return [];
    };
    return FormationBase;
}());
export default FormationBase;
//# sourceMappingURL=FormationBase.js.map