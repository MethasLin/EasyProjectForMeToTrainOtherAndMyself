const positions = [];

for (let i = 1; i <= 17; i++) {
    const element = document.querySelector(`.top_${i}`);
    const rect = element.getBoundingClientRect();
    
    // Add the position and dimensions of the element to the array
    positions.push({
        top: rect.top,
        left: rect.left
    });
}

console.log(positions);
// Generate random scores for 17 teams
// Define a 2D array to store team names and scores
var teams = [
    {
        name: "ทีมเวิร์ค",
        score: 0, // Initialize the score to 0
      
    },
    {
        name: "Team Clutch",
        score: 0, // Initialize the score to 0
      
    },
    {
        name: "Tiwaz",
        score: 0, // Initialize the score to 0
        
    },
    {
        name: "MiMT",
        score: 0, // Initialize the score to 0
       
    },
    {
        name: "Clockwisefly",
        score: 0, // Initialize the score to 0
           },
    {
        name: "Mamypoko",
        score: 0, // Initialize the score to 0

    },
    {
        name: "แม่ประนอมสั่งลุย",
        score: 0, // Initialize the score to 0
    },
    {
        name: "ไก่คาราเกะชุบแป้งฯ",
        score: 0, // Initialize the score to 0

    },
    {
        name: "ตะวันพันแสง",
        score: 0, // Initialize the score to 0
    },
    {
        name: "ขอตึงๆ",
        score: 0, // Initialize the score to 0
    },
    {
        name: "Emperor",
        score: 0, // Initialize the score to 0
    },
    {
        name: "ปลากระพงชุบแป้งฯ",
        score: 0, // Initialize the score to 0
    },
    {
        name: "AMI&SCI",
        score: 0, // Initialize the score to 0
    },
    {
        name: "Sense Engineer",
        score: 0, // Initialize the score to 0
    },
    {
        name: "Boss dada team ฯ",
        score: 0, // Initialize the score to 0
    },
    {
        name: "อะไรนะ",
        score: 0, // Initialize the score to 0
    },
    {
        name: "เน้นเข้าร่วม ฯ",
        score: 0, // Initialize the score to 0

    }
];


// Sort the teams based on scores in descending order
teams.sort((a, b) => b.score - a.score);

// Update team names and scores in the HTML
for (let i = 0; i < 17; i++) {
    const teamNameElement = document.getElementById('teamname' + (i + 1));
    const scoreElement = document.getElementById('score' + (i + 1));

    if (teamNameElement && scoreElement) {
        teamNameElement.textContent = teams[i].name;
        scoreElement.textContent = teams[i].score;
    }
}


function submitScore(teamIndex) {
    const inputElement = document.querySelector(`input[name="score_top${teamIndex}"]`);
    const team = teams[teamIndex - 1]; // Adjusted index to match the team data

    if (team && inputElement) {
        const inputValue = inputElement.value;
        const parsedValue = parseInt(inputValue);

        // Check if the input is a valid number
        if (!isNaN(parsedValue)) {
            // Get the old score for this team
            const oldScore = team.score;

            // Update the team's score and input value
            team.score = parsedValue;

            // Sort the teams based on scores in descending order
            teams.sort((a, b) => b.score - a.score);

            // Update team names and scores in the HTML based on the new order
            for (let i = 0; i < 17; i++) {
                const teamNameElement = document.getElementById('teamname' + (i + 1));
                const scoreElement = document.getElementById('score' + (i + 1));

                if (teamNameElement && scoreElement) {
                    // Check if this team's score has changed
                    if (teams[i].score !== oldScore) {
                        // Set the new team name and score with fade-in animation
                        teamNameElement.textContent = teams[i].name;
                        scoreElement.textContent = teams[i].score;

                        // Apply the fade-in animation (same code as mentioned in the previous response)
                        teamNameElement.style.opacity = 0;
                        scoreElement.style.opacity = 0;

                        requestAnimationFrame(function () {
                            teamNameElement.style.transition = 'opacity 1s';
                            scoreElement.style.transition = 'opacity 1s';
                            teamNameElement.style.opacity = 1;
                            scoreElement.style.opacity = 1;
                            setTimeout(function () {
                                teamNameElement.style.transition = '';
                                scoreElement.style.transition = '';
                            }, 1000);
                        });
                    }
                }
            }

            inputElement.value = ''; // Clear the input field
        } else {
            // Handle the case where the input is not a valid number
            alert('Please enter a valid number for the score.');
        }
    } else {
        // Handle the case where no team with the given index is found
        alert('Team not found.');
    }
}
