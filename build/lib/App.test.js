"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var React = require("react");
var App_1 = require("./App");
describe('<App />', function () {
    it('should render without throwing an error', function () {
        expect(enzyme_1.shallow(React.createElement(App_1.default, null)).find('.App')).toHaveLength(1);
    });
});
//# sourceMappingURL=App.test.js.map