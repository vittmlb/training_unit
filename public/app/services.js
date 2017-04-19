/**
 * Created by Vittorio on 04/04/2017.
 */
angular.module('training_unit').factory('MySweetAlert', [function () {

    let def = {
        title: 'Tem certeza?',
        text: "Essa operação não poderá ser desfeita!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sim!'
    };

    let params = {};

    return {
        set: {
            title: function(title) {
                def.title = title;
            },
            text: function(text) {
                def.text = text;
            },
            type: function(type) {
                def.type = type;
            },
            confirmButtonText: function(confirmButtonText) {
                def.confirmButtonText = confirmButtonText;
            },
            cancelButtonText: function(cancelButtonText) {
                def.cancelButtonText = cancelButtonText;
            }
        },
        config: function(config) {
            if(!config) {
                params = def;
            } else {
                params = config;
            }
        },
        deleteAlert: function() {
            if(!Object.keys(params).length) {
                params = def;
            }
            return swal(params);
        }
    }

}]);
angular.module('training_unit').factory('MyDefineClass', [function () {

    function diferenca(item) {
        if(item >= 0) {
            if(item === 0) return 'text-success';
            return 'text-warning';
        } else {
            return 'text-danger';
        }
    }

    function turnoIcon(item) {
        if(item === 'Manhã') return 'fa fa-coffee';
        return 'fa fa-sun-o';
    }

    function bandeiraIcon(item) {
        if(item === 'Visa') return 'fa fa-cc-visa';
        return 'fa fa-cc-mastercard';
    }

    function origemIcon(item) {
        if(item === 'Cofre') return 'fa fa-lock';
        return 'fa fa-unlock';
    }

    function strikeThrough(condition) {
        return condition ? 'text-strikethrough': ''
    }





    return {
        diferenca: function(item) {
            return diferenca(item);
        },
        strikeThrough: function(condition) {
            return strikeThrough(condition);
        },
        turnoIcon: function(turno) {
            return turnoIcon(turno);
        },
        bandeiraIcon: function(bandeira) {
            return bandeiraIcon(bandeira);
        },
        origemIcon: function(origem) {
            return origemIcon(origem);
        }
    }

}]);
angular.module('training_unit').factory('MyAudio', ['ngAudio', function (ngAudio) {

    let sounds = {
        click: {
            add: ngAudio.load('sounds/click_add.mp3'),
            remove: ngAudio.load('sounds/click_remove.mp3'),
            check: ngAudio.load('sounds/click_check.mp3'),
        }
    };

    let teste = ngAudio.load('sounds/click_add.mp3');

    return {
        play: function(tipo) {
            switch (tipo) {
                case 'add':
                    sounds.click.add.play();
                    break;
                case 'remove':
                    sounds.click.remove.play();
                    break;
                case 'check':
                    sounds.click.check.play();
            }
        },
        add: function() {
            sounds.click.add.play();
        },
        remove: function() {
            sounds.click.remove.play();
        }
    }
}]);

angular.module('training_unit').factory('MyFlot', [function () {

    let dataSource = {
        venda: [],
        salgados: []
    };

    let data1 = [
        [gd(2012, 1, 1), 7],
        [gd(2012, 1, 2), 6],
        [gd(2012, 1, 3), 4],
        [gd(2012, 1, 4), 8],
        [gd(2012, 1, 5), 9],
        [gd(2012, 1, 6), 7],
        [gd(2012, 1, 7), 5],
        [gd(2012, 1, 8), 4],
        [gd(2012, 1, 9), 7],
        [gd(2012, 1, 10), 8],
        [gd(2012, 1, 11), 9],
        [gd(2012, 1, 12), 6],
        [gd(2012, 1, 13), 4],
        [gd(2012, 1, 14), 5],
        [gd(2012, 1, 15), 11],
        [gd(2012, 1, 16), 8],
        [gd(2012, 1, 17), 8],
        [gd(2012, 1, 18), 11],
        [gd(2012, 1, 19), 11],
        [gd(2012, 1, 20), 6],
        [gd(2012, 1, 21), 6],
        [gd(2012, 1, 22), 8],
        [gd(2012, 1, 23), 11],
        [gd(2012, 1, 24), 13],
        [gd(2012, 1, 25), 7],
        [gd(2012, 1, 26), 9],
        [gd(2012, 1, 27), 9],
        [gd(2012, 1, 28), 8],
        [gd(2012, 1, 29), 5],
        [gd(2012, 1, 30), 8],
        [gd(2012, 1, 31), 25]
    ];

    function dataSet() {
        return [
            {
                label: "Number of orders",
                grow:{stepMode:"linear"},
                data: data2,
                color: "#1ab394",
                bars: {
                    show: true,
                    align: "center",
                    barWidth: 24 * 60 * 60 * 600,
                    lineWidth: 0
                }

            },
            {
                label: "Payments",
                grow:{stepMode:"linear"},
                data: data1,
                yaxis: 2,
                color: "#1C84C6",
                lines: {
                    lineWidth: 1,
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.2
                            },
                            {
                                opacity: 0.2
                            }
                        ]
                    }
                }
            }
        ];
    }
    function dataOptions() {
        return  {
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#d5d5d5",
                borderWidth: 0,
                color: '#d5d5d5'
            },
            colors: ["#1ab394", "#464f88"],
            tooltip: true,
            xaxis: {
                mode: "time",
                tickSize: [3, "day"],
                tickLength: 0,
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 10,
                color: "#d5d5d5"
            },
            yaxes: [
                {
                    position: "left",
                    max: 1070,
                    color: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 3
                },
                {
                    position: "right",
                    color: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: ' Arial',
                    axisLabelPadding: 67
                }
            ],
            legend: {
                noColumns: 1,
                labelBoxBorderColor: "#d5d5d5",
                position: "nw"
            }

        };
    }

    let data2 = [
        [gd(2012, 1, 1), 800],
        [gd(2012, 1, 2), 500],
        [gd(2012, 1, 3), 600],
        [gd(2012, 1, 4), 700],
        [gd(2012, 1, 5), 500],
        [gd(2012, 1, 6), 456],
        [gd(2012, 1, 7), 800],
        [gd(2012, 1, 8), 589],
        [gd(2012, 1, 9), 467],
        [gd(2012, 1, 10), 876],
        [gd(2012, 1, 11), 689],
        [gd(2012, 1, 12), 700],
        [gd(2012, 1, 13), 500],
        [gd(2012, 1, 14), 600],
        [gd(2012, 1, 15), 700],
        [gd(2012, 1, 16), 786],
        [gd(2012, 1, 17), 345],
        [gd(2012, 1, 18), 888],
        [gd(2012, 1, 19), 888],
        [gd(2012, 1, 20), 888],
        [gd(2012, 1, 21), 987],
        [gd(2012, 1, 22), 444],
        [gd(2012, 1, 23), 999],
        [gd(2012, 1, 24), 567],
        [gd(2012, 1, 25), 786],
        [gd(2012, 1, 26), 666],
        [gd(2012, 1, 27), 888],
        [gd(2012, 1, 28), 900],
        [gd(2012, 1, 29), 178],
        [gd(2012, 1, 30), 555],
        [gd(2012, 1, 31), 993]
    ];


    let dataset = [
        {
            label: "Number of orders",
            grow:{stepMode:"linear"},
            data: data2,
            color: "#1ab394",
            bars: {
                show: true,
                align: "center",
                barWidth: 24 * 60 * 60 * 600,
                lineWidth: 0
            }

        },
        {
            label: "Payments",
            grow:{stepMode:"linear"},
            data: data1,
            yaxis: 2,
            color: "#1C84C6",
            lines: {
                lineWidth: 1,
                show: true,
                fill: true,
                fillColor: {
                    colors: [
                        {
                            opacity: 0.2
                        },
                        {
                            opacity: 0.2
                        }
                    ]
                }
            }
        }
    ];


    let options = {
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 0,
            color: '#d5d5d5'
        },
        colors: ["#1ab394", "#464f88"],
        tooltip: true,
        xaxis: {
            mode: "time",
            tickSize: [3, "day"],
            tickLength: 0,
            axisLabel: "Date",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Arial',
            axisLabelPadding: 10,
            color: "#d5d5d5"
        },
        yaxes: [
            {
                position: "left",
                max: 1070,
                color: "#d5d5d5",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 3
            },
            {
                position: "right",
                color: "#d5d5d5",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: ' Arial',
                axisLabelPadding: 67
            }
        ],
        legend: {
            noColumns: 1,
            labelBoxBorderColor: "#d5d5d5",
            position: "nw"
        }

    };

    function gd(year, month, day) {
        return new Date(year, month - 1, day).getTime();
    }

    /**
     * Definition of letiables
     * Flot chart
     */
    // this.flotData = dataset;
    // this.flotOptions = options;

    return {
        flotData: function() {
            return dataSet();
        },
        flotOptions: function() {
            return dataOptions();
        },
        set: {
            dataSource: {
                venda: function(data) {
                    dataSource.venda = data;
                },
                salgados: function(data) {
                    dataSource.salgados = data;
                }
            }
        }
    }

}]);

angular.module('training_unit').factory('MyChartJs', [function () {
    /**
     * Data for Polar chart
     */
    let polarData = [
        {
            value: 300,
            color:"#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 140,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 200,
            color: "#A4CEE8",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    /**
     * Options for Polar chart
     */
    let polarOptions = {
        scaleShowLabelBackdrop : true,
        scaleBackdropColor : "rgba(255,255,255,0.75)",
        scaleBeginAtZero : true,
        scaleBackdropPaddingY : 1,
        scaleBackdropPaddingX : 1,
        scaleShowLine : true,
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
    };

    /**
     * Data for Doughnut chart
     */
    let doughnutData = [
        {
            value: 300,
            color:"#a3e1d4",
            highlight: "#1ab394",
            label: "App"
        },
        {
            value: 50,
            color: "#dedede",
            highlight: "#1ab394",
            label: "Software"
        },
        {
            value: 100,
            color: "#A4CEE8",
            highlight: "#1ab394",
            label: "Laptop"
        }
    ];

    /**
     * Options for Doughnut chart
     */
    let doughnutOptions = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 45, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
    };

    /**
     * Data for Line chart
     */
    let lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    let lineDataDashboard4 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 40, 51, 36, 25, 40]
            },
            {
                label: "Example dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.7)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(26,179,148,1)",
                data: [48, 48, 60, 39, 56, 37, 30]
            }
        ]
    };

    /**
     * Options for Line chart
     */
    let lineOptions = {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        bezierCurve : true,
        bezierCurveTension : 0.4,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true
    };

    /**
     * Options for Bar chart
     */
    let barOptions = {
        scaleBeginAtZero : true,
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        barShowStroke : true,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        barDatasetSpacing : 1
    };

    /**
     * Data for Bar chart
     */
    let barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(26,179,148,0.5)",
                strokeColor: "rgba(26,179,148,0.8)",
                highlightFill: "rgba(26,179,148,0.75)",
                highlightStroke: "rgba(26,179,148,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    /**
     * Data for Radar chart
     */
    let radarData = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(26,179,148,0.2)",
                strokeColor: "rgba(26,179,148,1)",
                pointColor: "rgba(26,179,148,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

    /**
     * Options for Radar chart
     */
    let radarOptions = {
        scaleShowLine : true,
        angleShowLineOut : true,
        scaleShowLabels : false,
        scaleBeginAtZero : true,
        angleLineColor : "rgba(0,0,0,.1)",
        angleLineWidth : 1,
        pointLabelFontFamily : "'Arial'",
        pointLabelFontStyle : "normal",
        pointLabelFontSize : 10,
        pointLabelFontColor : "#666",
        pointDot : true,
        pointDotRadius : 3,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 2,
        datasetFill : true
    };

    return {

    }


}]);

// angular.module('training_unit').factory('MyData', [function () {
//
//     let comments = [
//         {
//             from: '@Alan Marry',
//             comment: 'I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//             time: '1 minute ago'
//         },
//         {
//             from: '@Stock Man',
//             comment: 'Check this stock chart. This price is crazy!',
//             time: '2 hours ago'
//         },
//         {
//             from: '@Kevin Smith',
//             comment: 'Lorem ipsum unknown printer took a galley',
//             time: '2 minutes ago'
//         },
//         {
//             from: '@Jonathan Febrick',
//             comment: 'The standard chunk of Lorem Ipsum',
//             time: '1 hour ago'
//         },
//         {
//             from: '@Alan Marry',
//             comment: ' I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//             time: '1 minute ago'
//         },
//         {
//             from: '@Kevin Smith',
//             comment: 'Lorem ipsum unknown printer took a galley',
//             time: '2 minutes ago'
//         }
//     ];
//
//     let todoList = [
//         {
//             number: 1,
//             description: 'Please contact me',
//             time: '09:00 pm'
//         },
//         {
//             number: 2,
//             description: 'Sign a contract',
//             time: '10:16 am'
//         },
//         {
//             number: 3,
//             description: 'Open new shop',
//             time: '08:22 pm'
//         },
//         {
//             number: 4,
//             description: 'Call back to Sylvia',
//             time: '11:06 pm'
//         },
//         {
//             number: 5,
//             description: 'Write a letter to Sandra',
//             time: '12:00 am'
//         }
//     ];
//
//     return {
//         comments: function() {
//             return comments;
//         },
//         todoList: function() {
//             return todoList;
//         }
//     }
//
// }]);

angular.module('training_unit').factory('AppConfig', ['$http', function ($http) {

    /**
     * Lista utilizada em CaixasController > caixas.client.controller.js
     * @type {{tiposRegistro: {}, turnos: {}, origens: {}, bandeiras: {}, produtos: {}, consumos: {}, fornecedores: {}, categorias: {}}}
     */
    let listas = {
        tiposRegistro: {},
        turnos: {},
        origens: {},
        bandeiras: {},
        produtos: {},
        consumos: {},
        fornecedores: {},
        categorias: {}
    };

    let enums = {
        turnos: {
            manha: 'Manhã',
            tarde: 'Tarde'
        },
        tipos: {
            desp: 'Despesa',
            mov:  'Movimentação',
        },
        origens: {
            cofre: 'Cofre',
            geral: 'Geral'
        },
        tiposAux: {
            desp: 'Despesa',
            mov:  'Movimentação',
            prod: 'Produto',
            consumo: 'Consumo',
            cartao: 'Cartão',
            entrada: 'Entrada'
        }
    };

    function gera_lista(nomeCtrl) {
        switch (nomeCtrl) {
            case 'CaixasController':
                return gera_lista_ctrl_caixa();

        }
    }


    function gera_enums(nomeCtrl) {
        switch (nomeCtrl) {
            case 'CaixasController':
                return enums;

        }
    }

    function gera_lista_ctrl_caixa() {
        return listas;
    }
    
    $http.get('/app/caixas/data/enum_caixas.json').success(function (data) {
        listas.tiposRegistro = data.tiposRegistro;
        listas.turnos = data.turnos;
        listas.origens = data.origens;
        listas.bandeiras = data.bandeiras;
        listas.produtos = data.controles.produtos;
        listas.consumos = data.controles.consumos;
    });
    $http.get('/app/data/enum_data.json').success(function (data) {
        listas.fornecedores = data.fornecedores;
        listas.categorias = data.categorias;
    });

    return {
        lista: {
            controller: function(nomeCtrl) {
                return gera_lista(nomeCtrl);
            }
        },
        enums: {
            controller: function(nomeCtrl) {
                return gera_enums(nomeCtrl);
            }
        }
    };
    
}]);