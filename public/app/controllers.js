/**
 * Created by Vittorio on 16/08/2016.
 */

/**
 * dashboardFlotOne - simple controller for data
 * for Flot chart in Dashboard view
 */
function dashboardFlotOne() {

    var data1 = [
        [0, 4],
        [1, 8],
        [2, 5],
        [3, 10],
        [4, 4],
        [5, 16],
        [6, 5],
        [7, 11],
        [8, 6],
        [9, 11],
        [10, 30],
        [11, 10],
        [12, 13],
        [13, 4],
        [14, 3],
        [15, 3],
        [16, 6]
    ];
    var data2 = [
        [0, 1],
        [1, 0],
        [2, 2],
        [3, 0],
        [4, 1],
        [5, 3],
        [6, 1],
        [7, 5],
        [8, 2],
        [9, 3],
        [10, 2],
        [11, 1],
        [12, 0],
        [13, 2],
        [14, 8],
        [15, 0],
        [16, 0]
    ];

    var options = {
        series: {
            lines: {
                show: false,
                fill: true
            },
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 0.4
            },
            points: {
                radius: 0,
                show: true
            },
            shadowSize: 2,
            grow: {stepMode:"linear",stepDirection:"up",steps:80}
        },
        grow: {stepMode:"linear",stepDirection:"up",steps:80},
        grid: {
            hoverable: true,
            clickable: true,
            tickColor: "#d5d5d5",
            borderWidth: 1,
            color: '#d5d5d5'
        },
        colors: ["#1ab394", "#1C84C6"],
        xaxis: {
        },
        yaxis: {
            ticks: 4
        },
        tooltip: false
    };

    /**
     * Definition of variables
     * Flot chart
     */
    this.flotData = [data1, data2];
    this.flotOptions = options;
}

/**
 * chartJsCtrl - Controller for data for ChartJs plugin
 * used in Chart.js view
 */
function chartJsCtrl() {

    /**
     * Data for Polar chart
     */
    this.polarData = [
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
    this.polarOptions = {
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
    this.doughnutData = [
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
    this.doughnutOptions = {
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
    this.lineData = {
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

    this.lineDataDashboard4 = {
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
    this.lineOptions = {
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
    this.barOptions = {
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
    this.barData = {
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
    this.radarData = {
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
    this.radarOptions = {
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


};


function ModalInstanceCtrl ($scope, $modalInstance) {

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}

function AuxData () {

    let todoList = [
        {
            number: 1,
            description: 'Please contact me',
            time: '09:00 pm'
        },
        {
            number: 2,
            description: 'Sign a contract',
            time: '10:16 am'
        },
        {
            number: 3,
            description: 'Open new shop',
            time: '08:22 pm'
        },
        {
            number: 4,
            description: 'Call back to Sylvia',
            time: '11:06 pm'
        },
        {
            number: 5,
            description: 'Write a letter to Sandra',
            time: '12:00 am'
        }
    ];
    let comments = [
        {
            from: '@Alan Marry',
            comment: 'I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            time: '1 minute ago'
        },
        {
            from: '@Stock Man',
            comment: 'Check this stock chart. This price is crazy!',
            time: '2 hours ago'
        },
        {
            from: '@Kevin Smith',
            comment: 'Lorem ipsum unknown printer took a galley',
            time: '2 minutes ago'
        },
        {
            from: '@Jonathan Febrick',
            comment: 'The standard chunk of Lorem Ipsum',
            time: '1 hour ago'
        },
        {
            from: '@Alan Marry',
            comment: ' I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            time: '1 minute ago'
        },
        {
            from: '@Kevin Smith',
            comment: 'Lorem ipsum unknown printer took a galley',
            time: '2 minutes ago'
        }
    ];
    let meetings = [
        {
            title: 'Meeting',
            content: 'Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the sale.',
            hour: '6:00 am',
            time: '2 hours ago'
        },
        {
            title: 'Send documents to Mike',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`,
            hour: '6:00 am',
            time: '2 hours ago'
        },
        {
            title: 'Coffee Break',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`,
            hour: '6:00 am',
            time: '2 hours ago'
        },
        {
            title: 'Phone with Jeronimo',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`,
            hour: '6:00 am',
            time: '2 hours ago'
        },
        {
            title: 'Go to the doctor Dr. Smith',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`,
            hour: '6:00 am',
            time: '2 hours ago'
        },
        {
            title: 'Chat with Monica and Sandra',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`,
            hour: '6:00 am',
            time: '2 hours ago'
        },

    ];
    let dailyFeed = [
        {
            img: 'img/profile.jpg',
            name: 'Monica Shith',
            action: 'posted a new blog.',
            marked: '',
            content: '',
            time: 'Today 5:60pm - 12.06.2017',
            hour: '5 min ago',
            buttons: false
        },
        {
            img: 'img/a2.jpg',
            name: 'Mark Johnson',
            action: 'posted message on',
            marked: 'Monica Smith',
            content: '',
            time: 'Today 2:10 pm - 12.06.2017',
            hour: '5 min ago',
            buttons: false
        },
        {
            img: 'img/a3.jpg',
            name: 'Janet Rosowski',
            action: 'add 1 photo on',
            marked: 'Monica Smith',
            content: '',
            time: '2 days ago at 8:30 am',
            hour: '5 min ago',
            buttons: false
        },
        {
            img: 'img/a4.jpg',
            name: 'Chris Johnatan Overtunk',
            action: 'started following',
            marked: 'Monica Smith',
            content: '',
            time: 'Yesterday 1:21 pm - 11.06.2017',
            hour: '5 min ago',
            buttons: true
        },
        {
            img: 'img/a5.jpg',
            name: 'Kim Smith',
            action: 'posted message on',
            marked: 'Monica Smith',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`,
            time: 'Yesterday 5:20 pm - 12.06.2017',
            hour: '5 min ago',
            buttons: true
        },
        {
            img: 'img/profile.jpg',
            name: 'Monica Smith',
            action: 'love',
            marked: 'Kim Smith',
            content: ``,
            time: '2 days ago at 2:30 am - 11.06.2017',
            hour: '5 min ago',
            buttons: false
        },
        {
            img: 'img/a6.jpg',
            name: 'Mike Loreipsum',
            action: 'started following',
            marked: 'Monica Smith',
            content: '',
            time: '3 days ago at 7:58 pm - 10.06.2017',
            hour: '46 hours ago',
            buttons: false
        }
    ];

    this.todoList = todoList;
    this.comments = comments;
    this.meetings = meetings;
    this.dailyFeed = dailyFeed;

}

angular
    .module('training_unit')
    .controller('ModalInstanceCtrl', ModalInstanceCtrl)
    .controller('dashboardFlotOne', dashboardFlotOne)
    .controller('AuxData', AuxData);
    // .controller('chartJsCtrl', chartJsCtrl); // Criei uma Factory em services.js