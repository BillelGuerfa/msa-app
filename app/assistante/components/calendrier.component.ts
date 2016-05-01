import { Component, OnInit, AfterViewInit , NgZone } from 'angular2/core';
import {Employe, EmployeService} from "../../users/services/employe.service";
import {Patient} from "../services/patient.service";
import {Rdv, RdvService } from "../services/rdv.service";
declare var $;
declare var moment;
@Component({
    selector: 'calendrier',
    templateUrl: 'app/assistante/views/calendrier.component.html'
})

export class CalendrierComponent implements OnInit, AfterViewInit  {
    rdv : Rdv;
    listeRdvs: Rdv[];
    createRdv = false;
    displayedRdvs = [];
    constructor(private _rdvService:RdvService, private _employeService : EmployeService, private _ngZone: NgZone) { 
           
    }

    ngOnInit() {
        if (this._employeService.employe.poste === "ASSISTANTE") this.createRdv = true;
        //TODO: get rdvs from RdvService
        
     }
    
    addRdv() {
        
    }
    getRdvs(idMedecin){
        
    }
    displayRdvs(){
        let calendarRdvs = [];
        this.listeRdvs.forEach(rdv => {
            calendarRdvs.push(
                {
                            title: rdv.patient.prenom + " " +rdv.patient.nom,
                            start: moment(rdv.date),
                            allDay: true,
                            className: 'bgm-cyan'
                }
            );
        });
        return calendarRdvs;
        
    }
    substringMatcher(strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            
            $.each(strs, (i, str) => {
            if (substrRegex.test(str)) {
                matches.push(str);
            }
            });

            cb(matches);
        };
    };

    ngAfterViewInit(){
         $(document).ready(() => {
             this._ngZone.run(() => {
                 $('#nomClient .typeahead').typeahead({
                 hint: true,
                 highlight: true,
                 minLength: 1
            },
            {
                name: 'nomsClients',
                //TODO: Add list of clients here.
                source: this.substringMatcher(["Billel","Asma","Sonia","Yacine"])
            });
            $('#nomClient .typeahead').bind('typeahead:select', function(ev, suggestion) {
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

                    theme: true, //Do not remove this as it ruin the design
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
                    
                    
                    
                    select: (start, end, allDay) => {
                        if(this.createRdv){
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
                (() => {
                    $('body').on('click', '.event-tag > span', function(){
                        $('.event-tag > span').removeClass('selected');
                        $(this).addClass('selected');
                    });
                })();
            
                //Add new Event
                if(this.createRdv){
                    $('body').on('click', '#addEvent', () => {
                        //var eventName = $('#eventName').val();
                        //TODO: ADD nom + prenom;
                        var nom = $("#nom").val();
                        var prenom = $("#prenom").val();
                        this.rdv.date = $('#getStart').val(); //TODO: put 
                        //alert("The current date of the calendar is " + $('#getStart').val() + $("#getEnd").val());
                        var tagColor = $('.event-tag > span.selected').attr('data-tag');
                            
                        if (nom + prenom != '') {
                            //Render Event
                            $('#calendar').fullCalendar('renderEvent',{
                                title: nom +" "+ prenom,
                                start: $('#getStart').val(),
                                end:  $('#getEnd').val(),
                                allDay: true,
                                className: tagColor
                                
                            },true ); //Stick the event
                            
                            $('#addNew-event form')[0].reset()
                            $('#addNew-event').modal('hide');
                        }
                        
                        else {
                            $('#eventName').closest('.form-group').addClass('has-error');
                        }
                    });  
                }
                
              

                //Calendar views
                $('body').on('click', '#fc-actions [data-view]', function(e){
                    e.preventDefault();
                    var dataView = $(this).attr('data-view');
                    
                    $('#fc-actions li').removeClass('active');
                    $(this).parent().addClass('active');
                    cId.fullCalendar('changeView', dataView);  
                });
           }) });   
    }

}