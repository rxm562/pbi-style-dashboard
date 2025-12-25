fetch("assets/data/data.json")
  .then(response => response.json())
  .then(data => {

    document.getElementById("sales").innerText = "$" + data.total_sales;
    document.getElementById("users").innerText = data.total_users;

    const ctx = document.getElementById("salesChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.months,
        datasets: [{
          label: "Monthly Sales",
          data: data.monthly_sales
        }]
      }
    });
  });
