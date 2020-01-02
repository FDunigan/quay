const Game = function() {
    this.color = "rgb(0,0,0)";
    this.colors = [0,0,0];
    this.shifts = [1,1,1];

    this.update = function() {
        for (let index = 0; index < 3; index ++) {
            let color = this.colors[index];
            let shift = this.shifts[index];
        }
    }
}