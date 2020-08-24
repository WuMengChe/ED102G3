var lineChartData = {
    labels: ["0~1y", "1-3y", "3~5y", "5~10y","10y->up"], //顯示區間名稱
     datasets: [{
        label: '薪資漲幅',
        lineTension: 0,
        fill: false,
        backgroundColor:["#D0D0D0","#FFB5B5","#FFD9EC","#F1E1FF","#D2E9FF"],
        borderColor: "#66B3FF",
        borderWidth:1,
        data: [2, 3, 4, 6, 8, 10],
    }]
};

var lineChartData2 = {
    labels: ["0~1y", "1-3y", "3~5y", "5~10y","10y->up"], //顯示區間名稱
     datasets: [{
        label: '最低月薪',
        lineTension: 0,
        fill: false,
        backgroundColor:["#D0D0D0","#FFB5B5","#FFD9EC","#F1E1FF","#D2E9FF"],
        borderColor: "#66B3FF",
        borderWidth:1,
        data: [80000, 110000, 120000, 160000, 190000,0],
    }]
};
function drawLineCanvas(ctx,data) {
    window.myLine = new Chart(ctx, {  //先建立一個 chart
        type: 'line', // 型態
        data: data,
        options: {
                responsive: true,
                legend: { //是否要顯示圖示
                    display: true,
                },
                tooltips: { //是否要顯示 tooltip
                    enabled: true
                },
                scales: {  //是否要顯示 x、y 軸
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }]
                },
                
            }
    });
};

function drawLineCanvas2(ctx,data) {
    window.myLine = new Chart(ctx, {  //先建立一個 chart
        type: 'bar', // 型態
        data: data,
        options: {
                responsive: true,
                legend: { //是否要顯示圖示
                    display: true,
                },
                tooltips: { //是否要顯示 tooltip
                    enabled: true
                },
                scales: {  //是否要顯示 x、y 軸
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }]
                },
            }
    });
};
window.onload = function () {
    var ctx = document.getElementById("canvas").getContext("2d");
    drawLineCanvas(ctx,lineChartData);
    var ctx2 = document.getElementById("canvas-1").getContext("2d");
    drawLineCanvas2(ctx2,lineChartData2);
};



