class Commons {
}
class Maths {
    static generateRandomBoolean(probability: number) {
        var randomNumber = Math.floor(Math.random() * 100);
        return randomNumber < probability;
    }
}
export { Commons, Maths }