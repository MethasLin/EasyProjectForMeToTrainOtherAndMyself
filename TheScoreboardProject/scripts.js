for (let i = 1; i <= 17; i++) {
    const element = document.querySelector(`.top_${i}`);
    const rect = element.getBoundingClientRect();
    
    console.log(`Position and dimensions of top_${i}:`);
    console.log(`Top: ${rect.top}px`);
    console.log(`Left: ${rect.left}px`);
    console.log(`Width: ${rect.width}px`);
    console.log(`Height: ${rect.height}px`);
    console.log('---------------------------------------');
}