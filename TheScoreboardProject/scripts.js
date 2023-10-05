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
    ["ทีมเวิร์ค", Math.floor(Math.random() * 101)], // Replace 1000 with the actual score for team 1
    ["Team Clutch", Math.floor(Math.random() * 101)],   // Replace 500 with the actual score for team 2
    ["Tiwaz", Math.floor(Math.random() * 101)],         // Replace 800 with the actual score for team 3
    ["MiMT", Math.floor(Math.random() * 101)],          // Replace 700 with the actual score for team 4
    ["Clockwisefly", Math.floor(Math.random() * 101)],  // Replace 600 with the actual score for team 5
    ["Mamypoko", Math.floor(Math.random() * 101)],      // Replace 900 with the actual score for team 6
    ["แม่ประนอมสั่งลุย", Math.floor(Math.random() * 101)], // Replace 300 with the actual score for team 7
    ["ไก่คาราเกะชุบแป้งฯ", Math.floor(Math.random() * 101)], // Replace 400 with the actual score for team 8
    ["ตะวันพันแสง", Math.floor(Math.random() * 101)], // Replace 200 with the actual score for team 9
    ["ขอตึงๆ", Math.floor(Math.random() * 101)],      // Replace 150 with the actual score for team 10
    ["Emperor", Math.floor(Math.random() * 101)],       // Replace 350 with the actual score for team 11
    ["ปลากระพงชุบแป้งฯ", Math.floor(Math.random() * 101)], // Replace 250 with the actual score for team 12
    ["AMI&SCI", Math.floor(Math.random() * 101)],       // Replace 450 with the actual score for team 13
    ["Sense Engineer", Math.floor(Math.random() * 101)], // Replace 650 with the actual score for team 14
    ["Boss dada team ฯ", Math.floor(Math.random() * 101)], // Replace 550 with the actual score for team 15
    ["อะไรนะ", Math.floor(Math.random() * 101)],       // Replace 350 with the actual score for team 16
    ["เน้นเข้าร่วมฯ", Math.floor(Math.random() * 101)], // Replace 700 with the actual score for team 17
];

// Sort the teams based on scores in descending order
teams.sort((a, b) => b[1] - a[1]);

// Update team names and scores in the HTML
for (let i = 0; i < 17; i++) {
    const teamNameElement = document.getElementById('teamname' + (i + 1));
    const scoreElement = document.getElementById('score' + (i + 1));

    if (teamNameElement && scoreElement) {
        teamNameElement.textContent = teams[i][0];
        scoreElement.textContent = teams[i][1];
    }
}






// Sort the teams based on scores in descending order
teams.sort((a, b) => b[1] - a[1]);

// Update team names and scores in the HTML
for (let i = 0; i < 17; i++) {
    const teamNameElement = document.getElementById('teamname' + (i + 1));
    const scoreElement = document.getElementById('score' + (i + 1));

    if (teamNameElement && scoreElement) {
        teamNameElement.textContent = teams[i][0];
        scoreElement.textContent = teams[i][1];
    }
}

