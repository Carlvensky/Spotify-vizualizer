import { songList } from "./spotify_top_hits_clean";

document.addEventListener("DOMContentLoaded", () => { 
    const buttons = document.querySelectorAll(".result-button");
    const resultCard = document.getElementById(".result-card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            
            if (button === "Most Common Genre") {
                createGenreChart();
            } else if (button === "Year Song Released") {
                createYearChart();
            } else if (button === "Loudest Song") {
                createLoudestSongChart();
            }
        });
    }
});