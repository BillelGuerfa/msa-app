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
                function AutocompleteDirective(el, _zone) {
                    var _this = this;
                    this._zone = _zone;
                    this._zone.run(function () {
                        $('#nomClient .typeahead').typeahead({
                            hint: true,
                            highlight: true,
                            minLength: 1
                        }, {
                            name: 'nomsClients',
                            //TODO: Add list of clients here.
                            source: _this.substringMatcher(["Billel", "Asma", "Sonia", "Yacine"])
                        });
                        $('#nomClient .typeahead').bind('typeahead:select', function (ev, suggestion) {
                            //TODO: handle the selection here.
                            console.log('Selection: ' + suggestion);
                        });
                    });
                }
                AutocompleteDirective = __decorate([
                    core_1.Directive({
                        selector: '[autocomplete]'
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