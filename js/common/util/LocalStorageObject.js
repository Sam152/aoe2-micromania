var LocalStorageObject = (function () {
    function LocalStorageObject(key) {
        this.key = key;
    }
    LocalStorageObject.prototype.get = function (defaultValue) {
        try {
            var data = JSON.parse(window.localStorage.getItem(this.key));
            return data || defaultValue;
        }
        catch (e) {
            window.localStorage.removeItem(this.key);
            return defaultValue;
        }
    };
    LocalStorageObject.prototype.set = function (object) {
        window.localStorage.setItem(this.key, JSON.stringify(object));
    };
    return LocalStorageObject;
}());
export default LocalStorageObject;
//# sourceMappingURL=LocalStorageObject.js.map