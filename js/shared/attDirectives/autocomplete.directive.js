System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AutocompleteDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutocompleteDirective = (function () {
                function AutocompleteDirective(_el, _zone) {
                    this._el = _el;
                    this._zone = _zone;
                    this.labelsDataSet = [];
                    this.map = {};
                }
                AutocompleteDirective.prototype.substringMatcher = function (strs) {
                    return function findMatches(q, cb) {
                        var matches, substrRegex;
                        // an array that will be populated with substring matches
                        matches = [];
                        // regex used to determine if a string contains the substring `q`
                        substrRegex = new RegExp(q, 'i');
                        // iterate through the pool of strings and for any string that
                        // contains the substring `q`, add it to the `matches` array
                        $.each(strs, function (i, str) {
                            if (substrRegex.test(str)) {
                                matches.push(str);
                            }
                        });
                        cb(matches);
                    };
                };
                AutocompleteDirective.prototype.setLabels = function () {
                    var _this = this;
                    var label;
                    this.objectsDataSet.forEach(function (object) {
                        label = _this.uniqLabel(object[_this.labelAtt]);
                        console.log(label);
                        _this.map[label] = object;
                        _this.labelsDataSet.push(label);
                    });
                };
                AutocompleteDirective.prototype.uniqLabel = function (label) {
                    var blanc = "";
                    while (this.map[label]) {
                        blanc += " ";
                        label += blanc;
                    }
                    return label;
                };
                AutocompleteDirective.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log(this.objectsDataSet);
                    this.setLabels();
                    console.log(this.labelsDataSet);
                    this._zone.run(function () {
                        $(_this._el.nativeElement).typeahead({
                            hint: true,
                            highlight: true,
                            minLength: 1
                        }, {
                            name: _this.name,
                            //TODO: Add list of clients here.
                            source: _this.substringMatcher(_this.labelsDataSet)
                        });
                        $(_this._el.nativeElement).bind('typeahead:select', function (ev, suggestion) {
                            //TODO: handle the selection here.
                            _this.handleFunction(_this.map[suggestion]);
                        });
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AutocompleteDirective.prototype, "name", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AutocompleteDirective.prototype, "objectsDataSet", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AutocompleteDirective.prototype, "handleFunction", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AutocompleteDirective.prototype, "labelAtt", void 0);
                AutocompleteDirective = __decorate([
                    core_1.Directive({
                        selector: '[typeaheadautocomplete]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone])
                ], AutocompleteDirective);
                return AutocompleteDirective;
            }());
            exports_1("AutocompleteDirective", AutocompleteDirective);
        }
    }
});
//# sourceMappingURL=autocomplete.directive.js.map