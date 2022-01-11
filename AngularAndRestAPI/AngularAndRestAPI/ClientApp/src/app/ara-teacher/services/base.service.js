"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
var http_1 = require("@angular/common/http");
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.buildBaseJsonRequestHeaders = function () {
        var httpHeaders = new http_1.HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        return httpHeaders;
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map