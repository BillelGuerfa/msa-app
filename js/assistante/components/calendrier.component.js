System.register(['angular2/core', "../../users/services/employe.service", "../services/rdv.service"], function(exports_1, context_1) {
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
    var core_1, employe_service_1, rdv_service_1;
    var CalendrierComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employe_service_1_1) {
                employe_service_1 = employe_service_1_1;
            },
            function (rdv_service_1_1) {
                rdv_service_1 = rdv_service_1_1;
            }],
        execute: function() {
            CalendrierComponent = (function () {
                function CalendrierComponent(_rdvService, _employeService, _ngZone) {
                    this._rdvService = _rdvService;
                    this._employeService = _employeService;
                    this._ngZone = _ngZone;
                    this.createRdv = false;
                    this.displayedRdvs = [];
                }
                CalendrierComponent.prototype.ngOnInit = function () {
                    if (this._employeService.employe.poste === "ASSISTANTE")
                        this.createRdv = true;
                    //TODO: get rdvs from RdvService
                };
                CalendrierComponent.prototype.addRdv = function () {
                };
                CalendrierComponent.prototype.getRdvs = function (idMedecin) {
                };
                CalendrierComponent.prototype.displayRdvs = function () {
                    var calendarRdvs = [];
                    this.listeRdvs.forEach(function (rdv) {
                        calendarRdvs.push({
                            title: rdv.patient.prenom + " " + rdv.patient.nom,
                            start: moment(rdv.date),
                            allDay: true,
                            className: 'bgm-cyan'
                        });
                    });
                    return calendarRdvs;
                };
                CalendrierComponent.prototype.substringMatcher = function (strs) {
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
                ;
                CalendrierComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    $(document).ready(function () {
                        _this._ngZone.run(function () {
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
                            $('.time-picker').datetimepicker({
                                format: 'LT'
                            });
                            var date = new Date();
                            var d = date.getDate();
                            var m = date.getMonth();
                            var y = date.getFullYear();
                            var cId = $('#calendar'); //Change the name if you want. I'm also using thsi add button for more actions
                            //Generate the Calendar
                            cId.fullCalendar({
                                header: {
                                    right: '',
                                    center: 'prev, title, next',
                                    left: ''
                                },
                                theme: true,
                                selectable: true,
                                selectHelper: true,
                                editable: true,
                                //TODO : delete fake events
                                //Add Events
                                events: [
                                    {
                                        title: 'Hangout with friends',
                                        start: new Date(y, m, 1),
                                        allDay: true,
                                        className: 'bgm-cyan'
                                    },
                                    {
                                        title: 'Meeting with client',
                                        start: new Date(y, m, 10),
                                        allDay: true,
                                        className: 'bgm-orange'
                                    },
                                    {
                                        title: 'Repeat Event',
                                        start: new Date(y, m, 18),
                                        allDay: true,
                                        className: 'bgm-amber'
                                    },
                                    {
                                        title: 'Semester Exam',
                                        start: new Date(y, m, 20),
                                        allDay: true,
                                        className: 'bgm-green'
                                    },
                                    {
                                        title: 'Soccor match',
                                        start: new Date(y, m, 5),
                                        allDay: true,
                                        className: 'bgm-lightblue'
                                    },
                                    {
                                        title: 'Coffee time',
                                        start: new Date(y, m, 21),
                                        allDay: true,
                                        className: 'bgm-orange'
                                    },
                                    {
                                        title: 'Job Interview',
                                        start: new Date(y, m, 5),
                                        allDay: true,
                                        className: 'bgm-amber'
                                    },
                                    {
                                        title: 'IT Meeting',
                                        start: new Date(y, m, 5),
                                        allDay: true,
                                        className: 'bgm-green'
                                    },
                                    {
                                        title: 'Brunch at Beach',
                                        start: new Date(y, m, 1),
                                        allDay: true,
                                        className: 'bgm-lightblue'
                                    },
                                    {
                                        title: 'Live TV Show',
                                        start: new Date(y, m, 15),
                                        allDay: true,
                                        className: 'bgm-cyan'
                                    },
                                    {
                                        title: 'Software Conference',
                                        start: new Date(y, m, 25),
                                        allDay: true,
                                        className: 'bgm-lightblue'
                                    },
                                    {
                                        title: 'Coffee time',
                                        start: new Date(y, m, 30),
                                        allDay: true,
                                        className: 'bgm-orange'
                                    },
                                    {
                                        title: 'Job Interview',
                                        start: new Date(y, m, 30),
                                        allDay: true,
                                        className: 'bgm-green'
                                    },
                                ],
                                //On Day Select
                                select: function (start, end, allDay) {
                                    if (_this.createRdv) {
                                        $('#addNew-event').modal('show');
                                        $('#addNew-event input:text').val('');
                                    }
                                    $('#getStart').val(start);
                                    $('#getEnd').val(end);
                                }
                            });
                            //Create and ddd Action button with dropdown in Calendar header. 
                            var actionMenu = '<ul class="actions actions-alt" id="fc-actions">' +
                                '<li class="dropdown">' +
                                '<a href="" data-toggle="dropdown"><i class="zmdi zmdi-more-vert"></i></a>' +
                                '<ul class="dropdown-menu dropdown-menu-right">' +
                                '<li class="active">' +
                                '<a data-view="month" href="">Month View</a>' +
                                '</li>' +
                                '<li>' +
                                '<a data-view="basicWeek" href="">Week View</a>' +
                                '</li>' +
                                '<li>' +
                                '<a data-view="agendaWeek" href="">Agenda Week View</a>' +
                                '</li>' +
                                '<li>' +
                                '<a data-view="basicDay" href="">Day View</a>' +
                                '</li>' +
                                '<li>' +
                                '<a data-view="agendaDay" href="">Agenda Day View</a>' +
                                '</li>' +
                                '</ul>' +
                                '</div>' +
                                '</li>';
                            cId.find('.fc-toolbar').append(actionMenu);
                            //Event Tag Selector
                            (function () {
                                $('body').on('click', '.event-tag > span', function () {
                                    $('.event-tag > span').removeClass('selected');
                                    $(this).addClass('selected');
                                });
                            })();
                            //Add new Event
                            if (_this.createRdv) {
                                $('body').on('click', '#addEvent', function () {
                                    //var eventName = $('#eventName').val();
                                    //TODO: ADD nom + prenom;
                                    var nom = $("#nom").val();
                                    var prenom = $("#prenom").val();
                                    _this.rdv.date = $('#getStart').val(); //TODO: put 
                                    //alert("The current date of the calendar is " + $('#getStart').val() + $("#getEnd").val());
                                    var tagColor = $('.event-tag > span.selected').attr('data-tag');
                                    if (nom + prenom != '') {
                                        //Render Event
                                        $('#calendar').fullCalendar('renderEvent', {
                                            title: nom + " " + prenom,
                                            start: $('#getStart').val(),
                                            end: $('#getEnd').val(),
                                            allDay: true,
                                            className: tagColor
                                        }, true); //Stick the event
                                        $('#addNew-event form')[0].reset();
                                        $('#addNew-event').modal('hide');
                                    }
                                    else {
                                        $('#eventName').closest('.form-group').addClass('has-error');
                                    }
                                });
                            }
                            //Calendar views
                            $('body').on('click', '#fc-actions [data-view]', function (e) {
                                e.preventDefault();
                                var dataView = $(this).attr('data-view');
                                $('#fc-actions li').removeClass('active');
                                $(this).parent().addClass('active');
                                cId.fullCalendar('changeView', dataView);
                            });
                        });
                    });
                };
                CalendrierComponent = __decorate([
                    core_1.Component({
                        selector: 'calendrier',
                        templateUrl: 'app/assistante/views/calendrier.component.html'
                    }), 
                    __metadata('design:paramtypes', [rdv_service_1.RdvService, employe_service_1.EmployeService, core_1.NgZone])
                ], CalendrierComponent);
                return CalendrierComponent;
            }());
            exports_1("CalendrierComponent", CalendrierComponent);
        }
    }
});
//# sourceMappingURL=calendrier.component.js.map