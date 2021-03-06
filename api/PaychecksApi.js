"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var variables_1 = require("../variables");
var configuration_1 = require("../configuration");
var PaychecksApi = (function () {
    function PaychecksApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'https://ws-rh-online-dev.sdasystems.org';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    PaychecksApi.prototype.get13thPaycheck = function (period, includeInternalAccount, extraHttpRequestParams) {
        return this.get13thPaycheckWithHttpInfo(period, includeInternalAccount, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    PaychecksApi.prototype.getPaycheck = function (period, includeInternalAccount, extraHttpRequestParams) {
        return this.getPaycheckWithHttpInfo(period, includeInternalAccount, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    PaychecksApi.prototype.list13thPaychecks = function (count, maxperiod, extraHttpRequestParams) {
        return this.list13thPaychecksWithHttpInfo(count, maxperiod, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    PaychecksApi.prototype.listStandardPaychecks = function (count, maxperiod, extraHttpRequestParams) {
        return this.listStandardPaychecksWithHttpInfo(count, maxperiod, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json() || {};
            }
        });
    };
    PaychecksApi.prototype.get13thPaycheckWithHttpInfo = function (period, includeInternalAccount, extraHttpRequestParams) {
        var path = this.basePath + '/paychecks/13th/${period}'
            .replace('${' + 'period' + '}', String(period));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (period === null || period === undefined) {
            throw new Error('Required parameter period was null or undefined when calling get13thPaycheck.');
        }
        if (includeInternalAccount !== undefined) {
            queryParameters.set('includeInternalAccount', includeInternalAccount);
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    PaychecksApi.prototype.getPaycheckWithHttpInfo = function (period, includeInternalAccount, extraHttpRequestParams) {
        var path = this.basePath + '/paychecks/standard/${period}'
            .replace('${' + 'period' + '}', String(period));
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (period === null || period === undefined) {
            throw new Error('Required parameter period was null or undefined when calling getPaycheck.');
        }
        if (includeInternalAccount !== undefined) {
            queryParameters.set('includeInternalAccount', includeInternalAccount);
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    PaychecksApi.prototype.list13thPaychecksWithHttpInfo = function (count, maxperiod, extraHttpRequestParams) {
        var path = this.basePath + '/paychecks/13th';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (count !== undefined) {
            queryParameters.set('count', count);
        }
        if (maxperiod !== undefined) {
            queryParameters.set('maxperiod', maxperiod);
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    PaychecksApi.prototype.listStandardPaychecksWithHttpInfo = function (count, maxperiod, extraHttpRequestParams) {
        var path = this.basePath + '/paychecks/standard';
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (count !== undefined) {
            queryParameters.set('count', count);
        }
        if (maxperiod !== undefined) {
            queryParameters.set('maxperiod', maxperiod);
        }
        var consumes = [];
        var produces = [
            'application/json'
        ];
        if (this.configuration.accessToken) {
            var accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials: this.configuration.withCredentials
        });
        if (extraHttpRequestParams) {
            requestOptions = Object.assign(requestOptions, extraHttpRequestParams);
        }
        return this.http.request(path, requestOptions);
    };
    PaychecksApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()), __param(1, core_1.Inject(variables_1.BASE_PATH)), __param(2, core_1.Optional()),
        __metadata("design:paramtypes", [http_1.Http, String, configuration_1.Configuration])
    ], PaychecksApi);
    return PaychecksApi;
}());
exports.PaychecksApi = PaychecksApi;
//# sourceMappingURL=PaychecksApi.js.map