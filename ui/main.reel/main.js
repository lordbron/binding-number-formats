/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    enterDocument: {
        value: function (firstTime) {
            if (firstTime) {
                this.getJSONData();
            }
        }
    },
    retrievedData: { value: null},
    getJSONData: {
        value: function () {
            var me = this;
            var xhr = new XMLHttpRequest();
            var webServicePath = "core/data.json";
            xhr.open('GET',webServicePath);
            xhr.responseType = 'text';
            xhr.onload = function(event) {
                me.retrievedData = JSON.parse(event.target.response);
            };
            xhr.send();
        }
    }
});
