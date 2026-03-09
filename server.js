const smpStats = [
    { day: "Day 1", peak: 28, avg: 19, min: 5 },
    { day: "Day 2", peak: 22, avg: 19, min: 2 },
    { day: "Day 3", peak: 19, avg: 18, min: 0 },
    { day: "Day 4", peak: 0, avg: 0, min: 0 }
];

const chartLabels = [];
const peakPlayers = [];
const avgPlayers = [];
const minPlayers = [];

for (let i = 0; i < smpStats.length; i++) {
    chartLabels.push(smpStats[i].day);
    peakPlayers.push(smpStats[i].peak);
    avgPlayers.push(smpStats[i].avg);
    minPlayers.push(smpStats[i].min);
}

const canvasContext = document.getElementById('playersChart').getContext('2d');

new Chart(canvasContext, {
    type: 'bar',
    data: {
        labels: chartLabels,
        datasets: [
            {
                label: 'Peak Players',
                data: peakPlayers,
                backgroundColor: '#16a34a',
                borderColor: '#15803d',
                borderWidth: 1
            },
            {
                label: 'Average Players',
                data: avgPlayers,
                backgroundColor: '#4ade80',
                borderColor: '#22c55e',
                borderWidth: 1
            },
            {
                label: 'Minimum Players',
                data: minPlayers,
                backgroundColor: '#bbf7d0',
                borderColor: '#86efac',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: '#334155' },
                ticks: { color: '#f8fafc' }
            },
            x: {
                grid: { color: '#334155' },
                ticks: { color: '#f8fafc' }
            }
        },
        plugins: {
            legend: {
                labels: { color: '#f8fafc' }
            }
        }
    }
});
