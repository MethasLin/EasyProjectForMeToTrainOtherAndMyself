for (let i = 1; i <= 17; i++) {
    const element = document.querySelector(`.top_${i}`);
    const rect = element.getBoundingClientRect();
    
    // Log the position and dimensions of the element
    console.log(`Position and dimensions of top_${i}:`);
    console.log(`Top: ${rect.top}px`);
    console.log(`Left: ${rect.left}px`);
    console.log('---------------------------------------');
}
// Generate random scores for 17 teams
// Define a 2D array to store team names and scores
var teams = [
    {
        name: "ทีมเวิร์ค",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamwork_score')[0], // Input element
        buttonElement: document.querySelector('.top_1 button')
    },
    {
        name: "Team Clutch",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamclutch_score')[0], // Input element
        buttonElement: document.querySelector('.top_2 button')
    },
    {
        name: "Tiwaz",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamTiwaz_score')[0], // Input element
        buttonElement: document.querySelector('.top_3 button')
    },
    {
        name: "MiMT",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamMiMT_score')[0], // Input element
        buttonElement: document.querySelector('.top_4 button')
    },
    {
        name: "Clockwisefly",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamClockwisefly_score')[0], // Input element
        buttonElement: document.querySelector('.top_5 button')
    },
    {
        name: "Mamypoko",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teaMamypoko_score')[0], // Input element
        buttonElement: document.querySelector('.top_6 button')
    },
    {
        name: "แม่ประนอมสั่งลุย",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamแม่ประนอมสั่งลุย_score')[0], // Input element
        buttonElement: document.querySelector('.top_7 button')
    },
    {
        name: "ไก่คาราเกะชุบแป้งฯ",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamไก่คาราเกะชุบแป้งฯ_score')[0], // Input element
        buttonElement: document.querySelector('.top_8 button')
    },
    {
        name: "ตะวันพันแสง",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamตะวันพันแสง_score')[0], // Input element
        buttonElement: document.querySelector('.top_9 button')
    },
    {
        name: "ขอตึงๆ",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamขอตึงๆ_score')[0], // Input element
        buttonElement: document.querySelector('.top_10 button')
    },
    {
        name: "Emperor",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamEmperor1_score')[0], // Input element
        buttonElement: document.querySelector('.top_11 button')
    },
    {
        name: "ปลากระพงชุบแป้งฯ",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamปลากระพงชุบแป้งฯ_score')[0], // Input element
        buttonElement: document.querySelector('.top_12 button')
    },
    {
        name: "AMI&SCI",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamAMI&SCI_score')[0], // Input element
        buttonElement: document.querySelector('.top_13 button')
    },
    {
        name: "Sense Engineer",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamSense Engineer_score')[0], // Input element
        buttonElement: document.querySelector('.top_14 button')
    },
    {
        name: "Boss dada team ฯ",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamBoss dada team ฯ_score')[0], // Input element
        buttonElement: document.querySelector('.top_15 button')
    },
    {
        name: "อะไรนะ",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamอะไรนะ_score')[0], // Input element
        buttonElement: document.querySelector('.top_16 button')
    },
    {
        name: "เน้นเข้าร่วม ฯ",
        score: 0, // Initialize the score to 0
        inputElement: document.getElementsByName('teamเน้นเข้าร่วม ฯ_score')[0], // Input element
        buttonElement: document.querySelector('.top_17 button')
    }
];


// Sort the teams based on scores in descending order
teams.sort((a, b) => b.score - a.score);

// Update team names and scores in the HTML
for (let i = 0; i < 17; i++) {
    const teamNameElement = document.getElementById('teamname' + (i + 1));
    const scoreElement = document.getElementById('score' + (i + 1));
    const inputElement = teams[i].inputElement;

    if (teamNameElement && scoreElement && inputElement) {
        teamNameElement.textContent = teams[i].name;
        scoreElement.textContent = teams[i].score;
        inputElement.value = ''; // Clear the input field after updating
    }
}


function submitScore(inputName) {
    // Find the team with the matching input name
    const team = teams.find(team => team.inputElement.name === inputName);

    if (team) {
        const inputValue = team.inputElement.value;
        const parsedValue = parseInt(inputValue);

        // Check if the input is a valid number
        if (!isNaN(parsedValue)) {
            // Update the team's score and input value
            team.score = parsedValue;
            team.inputElement.value = ''; // Clear the input field

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
        } else {
            // Handle the case where the input is not a valid number
            alert('Please enter a valid number for the score.');
        }
    } else {
        // Handle the case where no team with the given input name is found
        alert('Team not found.');
    }
}
