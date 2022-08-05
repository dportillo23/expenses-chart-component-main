const myChart = (ctx, data) => {
    return (
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false,
            }
        }
        }}));
}

export default myChart;