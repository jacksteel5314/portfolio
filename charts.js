/* Front End Languages */
const frontLanguages = ["HTML", "CSS", "JavaScript", "Swift", "React", "Flutterflow"]
const frontColors = ["#e34c26", "#264de4", "#f0db4f",  "#ff8c00", "#90EE90", "#313178"]
const frontData = [13, 13, 13, 11, 9, 4]

// Retrieve the Canvas
const ctx1 = document.getElementById('frontLang').getContext('2d');

const frontLang = new Chart(ctx1, {
  type: "horizontalBar",
  data: {
    labels: frontLanguages,
    datasets: [{
      backgroundColor: frontColors,
      data: frontData
    }]
  },
  options: { 
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Languages Used in Mostly Front-End Experience (in Months)",
      fontFamily: "Trebuchet MS, Helvetica, sans-serif",
      fontColor: "white",
      fontSize: 25
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Languages",
          fontSize: 20,
          fontColor: "white",
          fontFamily: "Trebuchet MS, Helvetica, sans-serif"
        },
        gridLines:{
          display: false
        },
        ticks: {
          fontColor: "white",
          fontSize: 18,
          fontFamily: "Trebuchet MS, Helvetica, sans-serif",
          beginAtZero: true
        }
        
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Months of Experience",
          fontSize: 20,
          fontColor: "white",
          fontFamily: "Trebuchet MS, Helvetica, sans-serif"
        },
        gridLines:{
          display: false
        },
        ticks: {
          display: false,
          beginAtZero:true
        }
      }]
    }
  }
});





/* Back End Languages */
const backLanguages = ["Java", "R", "Python", "SQL", "C/C++", "MIPS"]
const backColors = ["#f89820", "#165CAA", "#ffde57",  "#00758F", "#3D40AF", "#FF474c"]
const backData = [34, 23, 20, 18, 11, 10]

// Retrieve the Canvas
const ctx2 = document.getElementById('backLang').getContext('2d');

const backLang = new Chart(ctx2, {
  type: "horizontalBar",
  data: {
    labels: backLanguages,
    datasets: [{
      backgroundColor: backColors,
      data: backData
    }]
  },
  options: { 
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Languages Used in Mostly Back-End and Assembly Experience (in Months)",
      fontFamily: "Trebuchet MS, Helvetica, sans-serif",
      fontColor: "white",
      fontSize: 20
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Languages",
          fontSize: 20,
          fontColor: "white",
          fontFamily: "Trebuchet MS, Helvetica, sans-serif"
        },
        gridLines:{
          display: false
        },
        ticks: {
          fontColor: "white",
          fontSize: 18,
          fontFamily: "Trebuchet MS, Helvetica, sans-serif",
          beginAtZero: true
        }
        
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Months of Experience",
          fontSize: 20,
          fontColor: "white",
          fontFamily: "Trebuchet MS, Helvetica, sans-serif"
        },
        gridLines:{
          display: false
        },
        ticks: {
          display: false,
          beginAtZero: true
        }
      }]
    }
  }
});




/* Operating Systems */
const opSys = ["MacOS", "Linux/Unix", "Ubuntu", "FXOS/ASA"]
const opColors = ["#A2AAAD", "#ffcc33", "#E95420",  "#009EDC"]
const opData = [23, 10, 10, 2]

// Retrieve the Canvas
const ctx3 = document.getElementById('opSystems').getContext('2d');

const opSystems = new Chart(ctx3, {
  type: "horizontalBar",
  data: {
    labels: opSys,
    datasets: [{
      backgroundColor: opColors,
      data: opData
    }]
  },
  options: { 
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Experience in Operating Systems (in Months)",
      fontFamily: "Trebuchet MS, Helvetica, sans-serif",
      fontColor: "white",
      fontSize: 20
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Operating Systems",
          fontSize: 20,
          fontColor: "white",
          fontFamily: "Trebuchet MS, Helvetica, sans-serif"
        },
        gridLines:{
          display: false
        },
        ticks: {
          fontColor: "white",
          fontSize: 18,
          fontFamily: "Trebuchet MS, Helvetica, sans-serif",
          beginAtZero: true
        }
        
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Months of Experience",
          fontSize: 20,
          fontColor: "white",
          fontFamily: "Trebuchet MS, Helvetica, sans-serif"
        },
        gridLines:{
          display: false
        },
        ticks: {
          display: false,
          beginAtZero: true
        }
      }]
    }
  }
});


/* Additional Skills */
const additionalSkills = ["Microsoft Office Suite", "GitHub/GitLab", "RStudio", "Jupyter Notebooks", "Google CoLab", "Perforce"]
const skillsColors = ["#F14F21", "#4078c0", "#4AA4DE",  "#ff4d04", "#FFB300", "#404040"]
const skillsData = [13, 13, 13, 11, 9, 4]

// Retrieve the Canvas
const ctx4 = document.getElementById('adSkills').getContext('2d');

const adSkills = new Chart(ctx4, {
  type: "horizontalBar",
  data: {
    labels: additionalSkills,
    datasets: [{
      backgroundColor: skillsColors,
      data: skillsData
    }]
  },
  options: { 
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Additional Skills (in Months)",
      fontFamily: "Trebuchet MS, Helvetica, sans-serif",
      fontColor: "white",
      fontSize: 20
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Additional Skills",
          fontSize: 20,
          fontColor: "white",
          fontFamily: "Trebuchet MS, Helvetica, sans-serif"
        },
        gridLines:{
          display: false
        },
        ticks: {
          fontColor: "white",
          fontSize: 18,
          fontFamily: "Trebuchet MS, Helvetica, sans-serif",
          beginAtZero: true
        }
        
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Months of Experience",
          fontSize: 20,
          fontColor: "white",
          fontFamily: "Trebuchet MS, Helvetica, sans-serif"
        },
        gridLines:{
          display: false
        },
        ticks: {
          display: false,
          beginAtZero: true
        }
      }]
    }
  }
});
