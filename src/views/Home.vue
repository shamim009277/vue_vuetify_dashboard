<script setup>
import { ref } from 'vue';

// For pie chart
const series2 = [44, 55, 13];
const chartOptions2 = {
  chart: {
    width: 350,
    type: 'pie',
  },
  labels: ['Pending', 'Completed', 'Process'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
}

//For Bar chart
const series = [
  {
    name: "Sales",
    data: [44, 55, 41, 64, 22, 43, 21, 41, 64, 22, 43, 21],
  },
  {
    name: "Visitors",
    data: [53, 32, 33, 52, 13, 44, 32, 53, 32, 33, 52, 13],
  },
];

const chartOptions = {
  chart: {
    type: "bar",
    height: 430,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "top",
      },
    },
  },
  colors: ["#4F03E0", "#50CFDD"],
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "12px",
      colors: ["#fff", "#7461E8"],
      textAlign: "center",
    },
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    categories: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};


//For revinue chart

const series3 = [{
  name: 'Weekly Revenue',
  data: [80, 50, 30, 40, 100, 20, 90],
}];
const chartOptions3 = {
  chart: {
    height: 350,
    type: 'radar',
  },
  title: {
    text: 'Weekly Revenue'
  },
  yaxis: {
    stepSize: 20
  },
  xaxis: {
    categories: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  }
}

// For donut type chart
const seriesd = [44, 55, 41, 17, 15]
const chartOptionsd = {
  chart: {
    width: 420,
    height: 365,
    type: "donut",
  },
  labels: ["Category A", "Category B", "Category C", "Category D", "Category E"],
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
  },
  legend: {
    position: "bottom", // Place legend at the bottom
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex];
    },
  },
  title: {
    text: "Gradient Donut with Custom Start-Angle",
    align: "left"
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
}

// Area Chart
const seriesa = [
  {
    name: "Sales",
    data: [44, 55, 41, 64, 22, 43, 21, 41, 64, 22, 43, 21],
  },
  {
    name: "Visitors",
    data: [53, 32, 33, 52, 13, 44, 32, 53, 32, 33, 52, 13],
  },
];

const chartOptionsa = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: "top",
      },
    },
  },
  colors: ["#4F03E0", "#50CFDD"],
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "12px",
      colors: ["#fff", "#7461E8"],
      textAlign: "center",
    },
  },
  title: {
    text: 'Orders Summary',
    align: 'left',
  },
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    categories: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};


const orders = ref(
  [
    {
      id: "1001",
      customer: "John Doe",
      status: "Completed",
      statusColor: "success",
      total: "200.00",
      date: "2023-01-25",
      processColor: "light-blue",
      processValue: "30"
    },
    {
      id: "1002",
      customer: "Jane Smith",
      status: "Pending",
      statusColor: "warning",
      total: "150.00",
      date: "2023-01-24",
      processColor: "purple",
      processValue: "90"
    },
    {
      id: "1003",
      customer: "Michael Johnson",
      status: "Cancelled",
      statusColor: "error",
      total: "50.00",
      date: "2023-01-23",
      processColor: "cyan",
      processValue: "60"
    },
    {
      id: "1004",
      customer: "Michael",
      status: "Cancelled",
      statusColor: "error",
      total: "250.00",
      date: "2023-05-20",
      processColor: "red",
      processValue: "20"
    },
  ]
)
</script>

<template>
  <main>
    <v-container fluid class="my-5">

      <v-row>
        <!-- Dashboard Card -->
        <v-col cols="12" md="6" lg="3">
          <v-card class="pa-4 card-border-purple">
            <v-row align="center" justify="space-between">
              <!-- Left Side Information -->
              <v-col>
                <h4 class="text-body-1 text-gray">Total Orders</h4>
                <h3 class="text-h6 mb-1 font-weight-bold" style="color:#7461E8">4805</h3>
                <p class="text-subtitle-2 text-gray">
                  +2.5% from last week
                </p>
              </v-col>

              <!-- Right Side Icon/Button -->
              <v-col class="d-flex justify-end align-center" cols="auto">
                <v-btn icon color="#7461E8">
                  <v-icon>mdi-shopping-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card class="pa-4 card-border-red">
            <v-row align="center" justify="space-between">
              <!-- Left Side Information -->
              <v-col>
                <h4 class="text-body-1 text-gray">Total Revenue</h4>
                <h3 class="text-h6 mb-1 font-weight-bold" style="color:#F85C92">$ 40,805</h3>
                <p class="text-subtitle-2 text-gray">
                  +2.5% from last week
                </p>
              </v-col>

              <!-- Right Side Icon/Button -->
              <v-col class="d-flex justify-end align-center" cols="auto">
                <v-btn icon color="#F85C92">
                  <v-icon>mdi-cash</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card class="pa-4 card-border-green">
            <v-row align="center" justify="space-between">
              <!-- Left Side Information -->
              <v-col>
                <h4 class="text-body-1 text-gray">Total Product</h4>
                <h3 class="text-h6 mb-1 font-weight-bold" style="color:#15CA20">3500</h3>
                <p class="text-subtitle-2 text-gray">
                  +2.5% from last week
                </p>
              </v-col>

              <!-- Right Side Icon/Button -->
              <v-col class="d-flex justify-end align-center" cols="auto">
                <v-btn icon color="#15CA20">
                  <v-icon color="white">mdi-poll</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-card class="pa-4 card-border-cyan">
            <v-row align="center" justify="space-between">
              <!-- Left Side Information -->
              <v-col>
                <h4 class="text-body-1 text-gray">Total Customers</h4>
                <h3 class="text-h6 mb-1 font-weight-bold" style="color:#50CFDD"> 12 K</h3>
                <p class="text-subtitle-2 text-gray">
                  +2.5% from last week
                </p>
              </v-col>

              <!-- Right Side Icon/Button -->
              <v-col class="d-flex justify-end align-center" cols="auto">
                <v-btn icon color="#50CFDD">
                  <v-icon color="white">mdi-account-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>


        <v-col cols="12" md="8" lg="8">
          <v-card class="pa-4">
            <v-row align="center">
              <!-- Left Side Information -->
              <v-col>
                <h4 class="text-body-1 text-gray">Sales Overview</h4>
                <div id="chart">
                  <apexchart type="bar" :height="chartOptions.chart.height" :options="chartOptions" :series="series">
                  </apexchart>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" lg="4">
          <v-card class="pa-4">
            <v-row align="center">
              <!-- Left Side Information -->
              <v-col>
                <h4 class="text-body-1 text-gray">Orders Summary</h4>
                <div id="chart" class="chart-container">
                  <apexchart type="pie" :height="chartOptions2.chart.width" :options="chartOptions2" :series="series2">
                  </apexchart>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>


        <v-col cols="12" md="12" lg="12">
          <v-card class="pa-4">
            <v-row align="center">
              <!-- Left Side Information -->
              <v-col>
                <h4 class="text-body-1 text-gray">Recent Orders</h4>
                <v-table dense>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Date</th>
                      <th>Shipping</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order in orders" :key="order.id">
                      <td>{{ order.id }}</td>
                      <td>{{ order.customer }}</td>
                      <td>
                        <v-chip :color="order.statusColor" text size="small">
                          {{ order.status }}
                        </v-chip>
                      </td>
                      <td>${{ order.total }}</td>
                      <td>{{ order.date }}</td>
                      <td>
                        <v-progress-linear :color="order.processColor" height="15" :model-value="order.processValue"
                          striped></v-progress-linear>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-card>
        </v-col>


        <v-col cols="12" md="4" lg="4">
          <v-card class="pa-4">
            <v-row align="center">
              <!-- Left Side Information -->
              <v-col>
                <div id="chart">
                  <apexchart type="radar" :height="chartOptions3.chart.height" :options="chartOptions3"
                    :series="series3"></apexchart>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" lg="4">
          <v-card class="pa-4">
            <v-row align="center">
              <!-- Left Side Information -->
              <v-col>
                <div id="chart" class="chart-container">
                  <apexchart type="donut" :height="chartOptionsd.chart.height" :width="chartOptionsd.chart.width"
                    :options="chartOptionsd" :series="seriesd">
                  </apexchart>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" md="4" lg="4">
          <v-card class="pa-4">
            <v-row align="center">
              <!-- Left Side Information -->
              <v-col>
                <div id="chart">
                  <apexchart type="area" :height="chartOptionsa.chart.height" :options="chartOptionsa" :series="seriesa"></apexchart>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>



      </v-row>
    </v-container>
  </main>
</template>

<style setup>
.chart-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
