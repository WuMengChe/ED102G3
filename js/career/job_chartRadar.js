//定義變數
var chartRadarDOM;
var chartRadarData;
var chartRadarOptions;

    //載入雷達圖
Chart.defaults.global.legend.display = false;
Chart.defaults.global.defaultFontColor = 'rgba(0,0,74, 1)';
chartRadarDOM = document.getElementById("chartRadar");
chartRadarData;
chartRadarOptions = 
{
    scale: 
    {
        ticks: 
        {
            fontSize: 16,
            beginAtZero: true,
            maxTicksLimit: 5,
            min:80000,
            max:190000
        },
        pointLabels: 
        {
            fontSize: 25,
            color: '#C4E1FF'
        },
        gridLines: 
        {
            color: '#2894FF'
        }
    }
};

console.log("---------Rader Data--------");
var graphData =new Array();
graphData.push(190000);
graphData.push(160000);
graphData.push(120000);
graphData.push(110000);
graphData.push(80000);


console.log("--------Rader Create-------------");
console.log(graphData);
    
//CreateData
chartRadarData = {
        labels: ['10年以上', '5~10年', '3~5年', '1~3年', '0~1年'],
    datasets: [{
            label: "Sal Level",
        backgroundColor: "rgba(34, 68, 102,0.6)",
        borderColor: "rgba(166,180,193,.8)",
        pointBackgroundColor: "rgba(63,63,74,1)",
            pointBorderColor: "rgba(0,0,0,0)",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(0,0,0,0.3)",
        pointBorderWidth: 1,
        data: graphData}]
};
    
//Draw
var chartRadar = new Chart(chartRadarDOM, {
    type: 'radar',
    data: chartRadarData,
    options: chartRadarOptions
});