const frontLanguages = ["HTML", "CSS", "JavaScript", "Swift", "React", "Flutterflow"]
const frontColors = ["red", "blue", "yellow",  "orange", "green", "purple"]
const frontData = [13, 13, 13, 11, 9, 4]

// Retrieve the Canvas
const ctx = document.getElementById('frontLang').getContext('2d');

const frontLang = new Chart(ctx, {
  type: "bar",
  data: {
    labels: frontLanguages,
    datasets: [{
      backgroundColor: frontColors,
      data: frontData
    }]
  },
  options: {
    scales : {
      y : {
        beginAtZero: true
      }
    }
  }
});
