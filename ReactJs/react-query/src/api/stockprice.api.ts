export const stockPriceApi = async () => {
    const randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    return 3 * randomNumber;
}