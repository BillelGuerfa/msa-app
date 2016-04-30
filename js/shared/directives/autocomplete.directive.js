System.register(["angular2/core", "./autocompleteList.component"], function(exports_1, context_1) {
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
    var core_1, autocompleteList_component_1;
    var AutocompleteDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (autocompleteList_component_1_1) {
                autocompleteList_component_1 = autocompleteList_component_1_1;
            }],
        execute: function() {
            AutocompleteDirective = (function () {
                function AutocompleteDirective(el, dcl) {
                    this.el = el;
                    this.dcl = dcl;
                    // The directive emits ng2AutocompleteOnSelect event when an item from the list is selected
                    this.selected = new core_1.EventEmitter();
                    this.term = "";
                    this.listCmp = undefined;
                    this.refreshTimer = undefined;
                    this.searchInProgress = false;
                    this.searchRequired = false;
                }
                /**
                 * On key event is triggered when a key is released on the host component
                 * the event starts a timer to prevent concurrent requests
                 */
                AutocompleteDirective.prototype.onKey = function (event) {
                    var _this = this;
                    if (!this.refreshTimer) {
                        this.refreshTimer = setTimeout(function () {
                            if (!_this.searchInProgress) {
                                _this.doSearch();
                            }
                            else {
                                // If a request is in progress mark that a new search is required
                                _this.searchRequired = true;
                            }
                        }, 200);
                    }
                    this.term = event.target.value;
                    if (this.term === "" && this.listCmp) {
                        // clean the list if the search term is empty
                        this.removeList();
                    }
                };
                /**
                 * Call the search function and handle the results
                 */
                AutocompleteDirective.prototype.doSearch = function () {
                    var _this = this;
                    this.refreshTimer = undefined;
                    // if we have a search function and a valid search term call the search
                    if (this.search && this.term !== "") {
                        this.searchInProgress = true;
                        this.search(this.term)
                            .then(function (res) {
                            _this.searchInProgress = false;
                            // if the term has changed during our search do another search
                            if (_this.searchRequired) {
                                _this.searchRequired = false;
                                _this.doSearch();
                            }
                            else {
                                // display the list of results
                                _this.diplayList(res);
                            }
                        })
                            .catch(function (err) {
                            console.log("search error:", err);
                            _this.removeList();
                        });
                    }
                };
                /**
                 * Display the list of results
                 * Dynamically load the list component if it doesn't exist yet and update the suggestions list
                 */
                AutocompleteDirective.prototype.diplayList = function (list) {
                    var _this = this;
                    if (!this.listCmp) {
                        this.dcl.loadNextToLocation(autocompleteList_component_1.AutocompleteList, this.el)
                            .then(function (cmp) {
                            // The component is loaded
                            _this.listCmp = cmp;
                            _this.updateList(list);
                            // Emit the selectd event when the component fires its selected event
                            (_this.listCmp.instance).selected
                                .subscribe(function (selectedItem) {
                                _this.selected.emit(selectedItem);
                            });
                        });
                    }
                    else {
                        this.updateList(list);
                    }
                };
                /**
                 * Update the suggestions list in the list component
                 */
                AutocompleteDirective.prototype.updateList = function (list) {
                    if (this.listCmp) {
                        (this.listCmp.instance).list = list;
                    }
                };
                /**
                 * remove the list component
                 */
                AutocompleteDirective.prototype.removeList = function () {
                    this.searchInProgress = false;
                    this.searchRequired = false;
                    if (this.listCmp) {
                        this.listCmp.dispose();
                        this.listCmp = undefined;
                    }
                };
                __decorate([
                    core_1.Input("ng2-autocomplete"), 
                    __metadata('design:type', Function)
                ], AutocompleteDirective.prototype, "search", void 0);
                __decorate([
                    core_1.Output("ng2AutocompleteOnSelect"), 
                    __metadata('design:type', Object)
                ], AutocompleteDirective.prototype, "selected", void 0);
                AutocompleteDirective = __decorate([
                    core_1.Directive({
                        selector: "[ng2-autocomplete]",
                        host: {
                            "(keyup)": "onKey($event)" // Liten to keyup events on the host component
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader])
                ], AutocompleteDirective);
                return AutocompleteDirective;
            }());
            exports_1("AutocompleteDirective", AutocompleteDirective);
        }
    }
});
//# sourceMappingURL=autocomplete.directive.js.map