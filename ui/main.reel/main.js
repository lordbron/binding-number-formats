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
            }
        }
    },
    retrievedData: { value: null},
    getJSONData: {
        value: function () {
            var me = this;
            var xhr = new XMLHttpRequest();
            var webServicePath = "core/model/data.json";
            xhr.open('GET',webServicePath);
            xhr.responseType = 'text';
            xhr.onload = function(event) {
                if (this.status == 200) {
                    me.appModel["fieldsData"] = JSON.parse(event.target.response);
                } else {
                    alert("No web service call configured yet, but we're sending data to a fake one anyways.");
                }
            };
            xhr.send();
        }
    }
});
