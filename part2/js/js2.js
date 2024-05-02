$(window).load(function () { $(".loading").fadeOut() })
$(function () {

    echarts_2()
    echarts_3()
    echarts_5()
    function echarts_2() {
        var myChart = echarts.init(document.getElementById('echart2'));
        var GreenTeaData = [0, 11296.0, 166169.0, 104423.0, 129962.0, 46988.0, 21648.0, 63567.0, 212117.0, 78383.7, 33471.0, 43432.0, 421.1, 31939.8, 223804.0, 116237.0, 244613.0, 2.8, 58204.0, 1327.0];
        var AllTeaData = [8.3, 13951.0, 172185.0, 112141.0, 426834.0, 57528.0, 21648.0, 68571.0, 296097.0, 186049.3, 86797.0, 68065.0, 974.9, 37036.2, 267741.0, 141285.0, 384480.0, 92.3, 62136.0, 1327.0];
        var OolongData = [0, 0, 0, 31, 228256.0, 787, 0, 0, 1533.0, 3309.8, 39989.0, 315, 0, 49, 5438.0, 769, 5122.1, 0, 0, 0];
        var BlackTeaData = [0, 2499.6, 1349.3, 5986.0, 49947.0, 5837.0, 0, 5004.0, 31177.0, 21347.6, 5707.0, 16470.0, 388, 3718.5, 4419.0, 7146.0, 54283.9, 0, 3082.0, 0];
        var DarkTeaData = [0, 150, 3111.5, 0, 0, 30, 0, 0, 43454.0, 75401.6, 0, 1587.0, 0, 0, 17067.0, 6090.0, 0, 0, 850, 0];
        var YellowTeaData = [0, 0, 0, 0, 0, 42, 0, 0, 410, 36, 0, 0, 0, 0, 106, 62, 0, 0, 0, 0];
        var WhiteTeaData = [0, 3.5, 0, 144, 17483.0, 955, 0, 0, 1315.0, 32, 0, 2, 0, 15.5, 473, 1268.0, 3.2, 0, 0, 0];
        var OtherTeaData = [8.3, 2, 1555.2, 1557.0, 1186.0, 2889.0, 0, 0, 6091.0, 7538.7, 7621.0, 6259.0, 165.8, 1313.4, 16434.0, 9713.0, 80457.6, 88.4, 0, 0];
        var titlename = ['山西省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省'];

        var teaType = $('#teaType').val();
        var data;

        switch (teaType) {
            case 'AllTea':
                data = AllTeaData;
                break;
            case 'GreenTea':
                data = GreenTeaData;
                break;
            case 'OolongTea':
                data = OolongData;
                break;
            case 'BlackTea':
                data = BlackTeaData;
                break;
            case 'DarkTea':
                data = DarkTeaData;
                break;
            case 'YellowTea':
                data = YellowTeaData;
                break;
            case 'WhiteTea':
                data = WhiteTeaData;
                break;
            case 'OtherTea':
                data = OtherTeaData;
                break;
        }

        var option = {
            grid: {
                left: '0',
                top: '0',
                right: '0',
                bottom: '0%',
                containLabel: true
            },
            xAxis: {
                show: false
            },
            yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: { show: false },
                splitLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    textStyle: {
                        color: 'black'
                    },
                },
            }, {
                show: false,
                inverse: true,
                data: data,
                axisLabel: { textStyle: { color: 'black' } },
                axisLine: { show: false },
                splitLine: { show: false },
                axisTick: { show: false },
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: data,
                barWidth: 15,
                itemStyle: {
                    normal: {
                        barBorderRadius: 50,
                        color: '#4bedb7',
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}',
                        textStyle: { color: 'rgba(0,0,0,.5)' }
                    }
                },
            }]
        };

        myChart.setOption(option);

        $('#teaType').on('change', function () {
            var teaType = $(this).val();
            var titlename = ['山西省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省'];
            var data;

            switch (teaType) {
                case 'AllTea':
                    data = AllTeaData;
                    break;
                case 'GreenTea':
                    data = GreenTeaData;
                    break;
                case 'OolongTea':
                    data = OolongData;
                    break;
                case 'BlackTea':
                    data = BlackTeaData;
                    break;
                case 'DarkTea':
                    data = DarkTeaData;
                    break;
                case 'YellowTea':
                    data = YellowTeaData;
                    break;
                case 'WhiteTea':
                    data = WhiteTeaData;
                    break;
                case 'OtherTea':
                    data = OtherTeaData;
                    break;
            }
            var newOption = {
                grid: {
                    left: '0',
                    top: '0',
                    right: '0',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis: {
                    show: false
                },
                yAxis: [{
                    show: true,
                    data: titlename,
                    inverse: true,
                    // ... 其他 yAxis 配置
                }, {
                    show: false,
                    inverse: true,
                    data: data,
                    // ... 其他 yAxis 配置
                }],
                series: [{
                    name: '条',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: data,
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 50,
                            color: '#4bedb7',
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{c}',
                            textStyle: { color: 'rgba(0,0,0,.5)' }
                        }
                    },
                }]
            };

            myChart.setOption(newOption);
        });

    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                data: [{
                    name: '茶叶产量',
                    icon: 'circle',
                    textStyle: {
                        color: 'black'
                    }
                }, {
                    name: '绿茶产量',
                    icon: 'circle',
                    textStyle: {
                        color: 'black'
                    }
                }, {
                    name: '红茶产量',
                    icon: 'circle',
                    textStyle: {
                        color: 'black'
                    }
                }, {
                    name: '黑茶产量',
                    icon: 'circle',
                    textStyle: {
                        color: 'black'
                    }
                }, {
                    name: '乌龙茶产量',
                    icon: 'circle',
                    textStyle: {
                        color: 'black'
                    }
                }, {
                    name: '白茶产量',
                    icon: 'circle',
                    textStyle: {
                        color: 'black'
                    }
                }, {
                    name: '黄茶产量',
                    icon: 'circle',

                    textStyle: {
                        color: 'black'
                    }
                }],
                top: '0',
                textStyle: {
                    color: "black"
                },
                itemGap: 20,
            },
            grid: {
                left: '0',
                right: '20',
                top: '18',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(0,0,0,.8)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,.2)'
                    }
                },
                data: ['2019', '2020', '2021', '2022']
            }, {


            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(0,0,0,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,.1)'
                    }
                }
            }],
            series: [{
                name: '茶叶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'black'
                    }
                },

                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24, 163, 64, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderColor: 'rgba(24, 163, 64, 0,0.27)',
                        borderWidth: 12
                    }
                },
                data: [334.2, 316.4, 293.2, 277.7]
            }, {
                name: '绿茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(5, 254, 18)' // 修改为绿色
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: ' rgba(5, 254, 18,0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(5, 254, 18,0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(5, 254, 18)',
                        borderColor: 'rgba(5, 254, 18,0.2)',
                        borderWidth: 12
                    }
                },
                data: [185.4, 184.9, 184.3, 177.3]
            },
            {
                name: '红茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(255, 43, 43)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 43, 43, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(255, 43, 43, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 43, 43)',
                        borderColor: 'rgba(255, 43, 43,0.2)',
                        borderWidth: 10
                    }
                },
                data: [48.2, 43.4, 40.4, 30.7]
            },
            {
                name: '黑茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(36, 36, 36)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(36, 36, 36, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(36, 36, 36, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(36, 36, 36)',
                        borderColor: 'rgba(36, 36, 36,0.2)',
                        borderWidth: 10
                    }
                },
                data: [42.6, 39.7, 37.3, 37.8]
            },
            {
                name: '乌龙茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(248, 174, 90)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(248, 174, 90, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(248, 174, 90, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(248, 174, 90)',
                        borderColor: 'rgba(248, 174, 90,0.2)',
                        borderWidth: 12
                    }
                },
                data: [31.1, 28.7, 27.8, 27.6]
            },
            {
                name: '黄茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(236, 255, 62)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(236, 255, 62, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(236, 255, 62, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(236, 255, 62)',
                        borderColor: 'rgba(236, 255, 62,0.2)',
                        borderWidth: 12
                    }
                },
                data: [9.4, 8.2, 7.3, 5]
            },
            {
                name: '白茶产量',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        color: 'rgba(245, 252, 175)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(245, 252, 175, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(245, 252, 175, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(245, 252, 175)',
                        borderColor: 'rgba(245, 252, 175,0.2)',
                        borderWidth: 12
                    }
                },
                data: [1.3, 1.3, 1.4, 1]
            }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        // 初始化图表
        var myChart = echarts.init(document.getElementById('echart5'));

        // 默认数据（2022年）
        var data2022 = [
            { value: 58.3, name: '绿茶' },
            { value: 15.2, name: '红茶' },
            { value: 13.4, name: '黑茶' },
            { value: 9.8, name: '乌龙茶' },
            { value: 3, name: '白茶' },
            { value: 0.4, name: '黄茶' }
        ];

        // 切换数据函数
        function updateData(year) {
            var data = [];
            if (year === '2021') {
                data = [
                    { value: 60.4, name: '绿茶' },
                    { value: 14.2, name: '红茶' },
                    { value: 13.3, name: '黑茶' },
                    { value: 9.1, name: '乌龙茶' },
                    { value: 2.7, name: '白茶' },
                    { value: 0.4, name: '黄茶' }
                ];
            } else if (year === '2020') {
                data = [
                    { value: 61.7, name: '绿茶' },
                    { value: 13.5, name: '红茶' },
                    { value: 12.5, name: '黑茶' },
                    { value: 9.3, name: '乌龙茶' },
                    { value: 2.5, name: '白茶' },
                    { value: 0.5, name: '黄茶' }
                ];
            } else if (year === '2019') {
                data = [
                    { value: 63.5, name: '绿茶' },
                    { value: 11, name: '红茶' },
                    { value: 13.5, name: '黑茶' },
                    { value: 9.9, name: '乌龙茶' },
                    { value: 1.8, name: '白茶' },
                    { value: 0.3, name: '黄茶' }
                ];
            } else {
                // 默认数据（2022年）
                data = data2022;
            }
            return data;
        }

        // 更新图表函数
        function updateChart(year) {
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    right: 10,
                    top: 30,
                    height: 160,
                    itemWidth: 10,
                    itemHeight: 10,
                    itemGap: 10,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 12
                    },
                    orient: 'vertical',
                    data: ['绿茶', '红茶', '黑茶', '乌龙茶', '黄茶', '白茶']
                },
                calculable: true,
                series: [{
                    name: ' ',
                    color: ['#05fe12', '#ff2b2b', '#242424', '#f8ae5a', '#ecff3e', '#f5fcaf'],
                    type: 'pie',
                    radius: [30, 70],
                    center: ['35%', '50%'],
                    roseType: 'radius',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: updateData(year)
                }]
            };

            myChart.setOption(option);
        }

        // 初始加载图表
        updateChart('2022');

        // 监听年份选择变化
        document.getElementById('year-select').addEventListener('change', function () {
            var selectedYear = this.value;
            updateChart(selectedYear);
        });
    }
})