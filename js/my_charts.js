const ctx = document.getElementById('myChart').getContext('2d');
const lucro = document.getElementById('lucro').getContext('2d');

new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Facebook', 'YouTube', 'Amazon', 'Shopee', 'Shein', 'Mercado Livre'],
      datasets: [{
        label: 'Tráfego de Acesso',
        data: [1200, 1900, 300, 501, 250, 30],
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
    }
  });

  new Chart(lucro, {
    type: 'bar',
    data: {
      labels:  ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [{
        label: 'Lucro total no mês:',
        data: [1200, 1090, 3000, 5001, 2540, 3120, 1220, 3600, 4800, 4578, 2558, 1150],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
    }
  });
 
  