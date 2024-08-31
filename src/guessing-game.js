class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.value = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.value = Math.round((this.min + this.max) / 2);
        return this.value;
    }

    lower() {
        this.max = this.value;
    }

    greater() {
        this.min = this.value;
    }
}

module.exports = GuessingGame;
