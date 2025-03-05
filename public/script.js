const loadDataButton = document.getElementById('loadData');
const stockDataTable = document.getElementById('stockData');

loadDataButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://myskladbacktest1-production.up.railway.app');
        const data = await response.json();
        stockDataTable.innerHTML = '';
        data.forEach(item => {
            const row = `<tr><td>${item.name}</td><td>${item.stock}</td></tr>`;
            stockDataTable.innerHTML += row;
        });
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
});

console.log('123')
