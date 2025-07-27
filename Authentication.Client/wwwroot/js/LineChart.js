window.renderLineChart = (elementId) => {
    const el = document.querySelector(`#${elementId}`);

    if (!el) {
        console.error("Chart container not found for ID:", elementId);
        return;
    }

    const options = {
        chart: {
            type: 'area',
            height: 300,
            toolbar: { show: false },
            zoom: { enabled: false },
            foreColor: '#6c757d'
        },
        dataLabels: {
            enabled: true,
            background: {
                enabled: true,
                foreColor: '#ffffff',
                color: '#007bff',
                borderRadius: 4,
                padding: 4,
                opacity: 1
            },
            style: {
                fontSize: '14px',
                fontWeight: 'bold'
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        series: [
            {
                name: 'Income',
                data: [100, 200, 150, 300, 250]
            },
            {
                name: 'Expense',
                data: [50, 120, 80, 140, 100]
            }
        ],
        xaxis: {
            categories: ['2025-06-01', '2025-06-02', '2025-06-03', '2025-06-04', '2025-06-05'],
            labels: {
                rotate: -45
            }
        },
        colors: ['#28a745', '#dc3545'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.5,
                opacityFrom: 0.6,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            }
        },
        tooltip: {
            theme: 'light',
            x: {
                format: 'yyyy-MM-dd'
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center'
        }
    };

    const chart = new ApexCharts(el, options);
    chart.render();
};


//window.renderTreasuryBalanceChart = (elementId, data) => {
//    if (!data || data.length === 0) return;

//    const currencyNames = data.map(item => item.currencyName);

//    // Ensure all balances are valid numbers
//    const originalBalances = data.map(item => {
//        const val = parseFloat(item.balance);
//        return isNaN(val) ? 0 : val;
//    });

//    const maxBalance = Math.max(...originalBalances);
//    const minBalance = Math.min(...originalBalances);
//    const maxAbsBalance = Math.max(Math.abs(maxBalance), Math.abs(minBalance));
//    const SCALE_DIVISOR = maxAbsBalance / 10 || 1;

//    // Scale balances for visualization
//    const scaledBalances = originalBalances.map(balance => {
//        const scaled = balance / SCALE_DIVISOR;
//        if (scaled > 0) return Math.max(scaled, 0.1);
//        if (scaled < 0) return Math.min(scaled, -0.1);
//        return 0;
//    });

//    const formatBalance = (val) => {
//        const absVal = Math.abs(val);
//        if (absVal >= 1_000_000_000) return (val / 1_000_000_000).toFixed(1) + ' میلیارد';
//        if (absVal >= 1_000_000) return (val / 1_000_000).toFixed(1) + ' میلیون';
//        if (absVal >= 1_000) return (val / 1_000).toFixed(1) + ' هزار';
//        return val.toLocaleString();
//    };

//    const colors = originalBalances.map(val => {
//        if (val > 0) return '#4CAF50';   // Green
//        if (val < 0) return '#F44336';   // Red
//        return '#9E9E9E';                // Gray
//    });

//    const options = {
//        chart: {
//            type: 'bar',
//            height: 350
//        },
//        plotOptions: {
//            bar: {
//                horizontal: true,
//                barHeight: '70%',
//                dataLabels: {
//                    position: 'right'
//                }
//            }
//        },
//        dataLabels: {
//            enabled: true,
//            formatter: function (val, opts) {
//                const original = originalBalances[opts.dataPointIndex];
//                return formatBalance(original);
//            },
//            style: {
//                colors: ['#333']
//            }
//        },
//        xaxis: {
//            categories: currencyNames,
//            min: (minBalance / SCALE_DIVISOR) * 1.1,
//            max: (maxBalance / SCALE_DIVISOR) * 1.1
//        },
//        tooltip: {
//            y: {
//                formatter: function (val, opts) {
//                    const original = originalBalances[opts.dataPointIndex];
//                    return formatBalance(original);
//                }
//            }
//        },
//        colors: colors,
//        series: [{
//            name: "مقدار",
//            data: scaledBalances
//        }]
//    };

//    const container = document.querySelector("#" + elementId);
//    container.innerHTML = ""; // clear old chart
//    const chart = new ApexCharts(container, options);
//    chart.render();
//};



//window.renderTreasuryBalanceChart = (elementId, data) => {
//    if (!data || data.length === 0) return;

//    const currencyNames = data.map(item => item.currencyName);
//    const originalBalances = data.map(item => {
//        const val = parseFloat(item.balance);
//        return isNaN(val) ? 0 : val;
//    });

//    const formatBalance = (val) => {
//        const absVal = Math.abs(val);
//        if (absVal >= 1_000_000_000) return (val / 1_000_000_000).toFixed(1) + ' میلیارد';
//        if (absVal >= 1_000_000) return (val / 1_000_000).toFixed(1) + ' میلیون';
//        if (absVal >= 1_000) return ' هزار' + (val / 1_000).toFixed(1) ;
//        return val.toLocaleString();
//    };

//    const barColors = originalBalances.map(val => {
//        if (val > 0) return '#4CAF50';   // Green
//        if (val < 0) return '#F44336';   // Red
//        return '#9E9E9E';                // Gray
//    });

//    const options = {
//        chart: {
//            height: 350,
//            type: 'bar'
//        },
//        plotOptions: {
//            bar: {
//                borderRadius: 10,
//                horizontal: false,
//                dataLabels: {
//                    position: 'top'
//                },
//            }
//        },
//        dataLabels: {
//            enabled: true,
//            formatter: function (val, opts) {
//                const original = originalBalances[opts.dataPointIndex];
//                return formatBalance(original);
//            },
//            offsetY: -20,
//            style: {
//                fontSize: '12px',
//                colors: ['#304758']
//            }
//        },
//        xaxis: {
//            categories: currencyNames,
//            position: 'top',
//            axisBorder: {
//                show: false
//            },
//            axisTicks: {
//                show: false
//            },
//            crosshairs: {
//                fill: {
//                    type: 'gradient',
//                    gradient: {
//                        colorFrom: '#D8E3F0',
//                        colorTo: '#BED1E6',
//                        stops: [0, 100],
//                        opacityFrom: 0.4,
//                        opacityTo: 0.5
//                    }
//                }
//            },
//            tooltip: {
//                enabled: true
//            }
//        },
//        yaxis: {
//            axisBorder: {
//                show: false
//            },
//            axisTicks: {
//                show: false
//            },
//            labels: {
//                show: false,
//                formatter: function (val) {
//                    return formatBalance(val);
//                }
//            }
//        },
//        title: {
//            text: 'موجودی خزانه به تفکیک ارز',
//            floating: true,
//            offsetY: 330,
//            align: 'center',
//            style: {
//                color: '#444'
//            }
//        },
//        colors: barColors,
//        tooltip: {
//            y: {
//                formatter: function (val, opts) {
//                    const original = originalBalances[opts.dataPointIndex];
//                    return formatBalance(original);
//                }
//            }
//        },
//        series: [{
//            name: "مقدار",
//            data: originalBalances
//        }]
//    };

//    const container = document.getElementById(elementId);
//    if (!container) return;
//    container.innerHTML = ""; // Clear old chart

//    const chart = new ApexCharts(container, options);
//    chart.render();
//};


window.renderTreasuryBalanceChart = (elementId, data) => {
    if (!data || data.length === 0) return;

    const currencyNames = data.map(item => item.currencyName);
    const originalBalances = [];
    const scaledBalances = [];

    data.forEach(item => {
        // Since balance is already a number, use it directly
        const val = item.balance || 0;
        originalBalances.push(val);

        let scaledVal = val;

        // Scale "تومان" specifically by 1000 first
        if (item.currencyName.trim() === "تومان") {
            scaledVal = scaledVal / 1000;
        }

        // Then apply general scaling based on absolute value
        const absVal = Math.abs(scaledVal);
        if (absVal > 1_000_000_000) {
            scaledVal = scaledVal / 10_000;
        } else if (absVal > 1_000_000) {
            scaledVal = scaledVal / 1_000;
        } else if (absVal > 100_000) {
            scaledVal = scaledVal / 100;
        } else {
            scaledVal = scaledVal / 10;
        }

        scaledBalances.push(scaledVal);
    });

    const formatBalance = (val) => {
        const absVal = Math.abs(val);
        const sign = val < 0 ? "-" : "";
        if (absVal >= 1_000_000_000) return sign + (absVal / 1_000_000_000).toFixed(1) + ' میلیارد';
        if (absVal >= 1_000_000) return sign + (absVal / 1_000_000).toFixed(1) + ' میلیون';
        if (absVal >= 1_000) return sign + (absVal / 1_000).toFixed(1) + ' هزار';
        return sign + absVal.toLocaleString();
    };

    const options = {
        series: [{
            name: 'موجودی',
            data: scaledBalances
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
                colors: {
                    ranges: [
                        { from: -1000000000, to: -1000000, color: '#F15B46' },
                        { from: -999999, to: -1, color: '#FEB019' },
                        { from: 0, to: 0, color: '#9E9E9E' },
                        { from: 1, to: 999999, color: '#03A9F4' },
                        { from: 1000000, to: 1000000000, color: '#00E396' }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (_val, opts) {
                const index = opts.dataPointIndex;
                return formatBalance(originalBalances[index]);
            },
            style: {
                fontSize: '12px',
                colors: ['#000']
            }
        },
        xaxis: {
            categories: currencyNames,
            labels: {
                rotate: -45
            }
        },
        yaxis: {
            title: {
                text: ' موجودی صندوق'
            },
            labels: {
                formatter: function (val, index) {
                    const original = originalBalances[index?.dataIndex ?? 0] || 0;
                    return formatBalance(original);
                }
            }
        },
        tooltip: {
            y: {
                formatter: function (_val, opts) {
                    const index = opts.dataPointIndex;
                    return formatBalance(originalBalances[index]);
                }
            }
        }
    };

    const container = document.getElementById(elementId);
    if (!container) return;
    container.innerHTML = ""; // clear existing chart

    const chart = new ApexCharts(container, options);
    chart.render();
};
