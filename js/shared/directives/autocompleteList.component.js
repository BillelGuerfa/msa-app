System.register(["angular2/core"], function(exports_1, context_1) {
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
    var AutocompleteList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AutocompleteList = (function () {
                function AutocompleteList() {
                    // Emit a selected event when an item in the list is selected
                    this.selected = new core_1.EventEmitter();
                }
                /**
                 * Listen for a click event on the list
                 */
                AutocompleteList.prototype.onClick = function (item) {
                    this.selected.emit(item);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AutocompleteList.prototype, "selected", void 0);
                AutocompleteList = __decorate([
                    core_1.Component({
                        selector: "autocomplete-list",
                        template: "<div class=\"dropdown-menu  search-results\">\n                    <a *ngFor=\"#item of list\" class=\"dropdown-item\" (click)=\"onClick(item)\">{{item.text}}</a><br />\n               </div>",
                        styles: [".search-results { position: relative; right: 0; display: block; padding: 0; overflow: hidden; font-size: .9rem;}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AutocompleteList);
                return AutocompleteList;
            }());
            exports_1("AutocompleteList", AutocompleteList);
        }
    }
});
//# sourceMappingURL=autocompleteList.component.js.map