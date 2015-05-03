// Run the application.
geotagx.task.run("shelter2013", function(question, answer){
    switch (question){
        case 1: // Can you see a building or other shelter in the photo?
            if (answer === "Yes")
                geotagx.task.showNextQuestion();
            else
                geotagx.task.finish();
            break;
        case  2: // Is the building or shelter affected by flood waters?
        case  3: // What is the function of the building?
        case  4: // Is it a temporary building or shelter?
        case  5: // What is the construction style?
        case  6: // What is the building or shelter made of?
            geotagx.task.showNextQuestion();
        default:
            break;
    }
});
