const loadDataButton = document.getElementById('loadData');
const stockDataTable = document.getElementById('stockData');

loadDataButton.addEventListener('click', async () => {
    try {
        const response = await fetch('https://my-sklad-test1.vercel.app/');
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
