const parserModule = (() => {

    const findDigit = (digitRepresentation) => {
        // Outputs a number that the given representation represents. If you would want to add
        // more representable values to the program, you could just add its representation to
        // the 'representations' object.
        // The way values are represented is very simple. The first three values of the representation
        // string represent the first row of the digit, the second three values represent the second row,
        // and the last three values represent the third row.
        const representations = {
            " _ | ||_|": "0",
            "     |  |": "1",
            " _  _||_ ": "2",
            " _  _| _|": "3",
            "   |_|  |": "4",
            " _ |_  _|": "5",
            " _ |_ |_|": "6",
            " _   |  |": "7",
            " _ |_||_|": "8",
            " _ |_| _|": "9",
            " _ |_|| |": "A", // This shows that its very simple to add new representable values
        }
        return representations[digitRepresentation];
    }

    const convertToGrid = (inputNum, digitNumber) => {
        // Converts the input number into a 2D array in which every row represents
        // one row of the input number and every Nth element represents part of the 
        // Nth digit in its respective row.
        let grid = [];
        let newRow = [];
        const rowLength = digitNumber * 3;
        for (let i = 0; i < rowLength * 3; i += 3) {
            newRow.push(inputNum.slice(i, i + 3));
            if ((i + 3) % rowLength === 0) {
                grid.push(newRow);
                newRow = [];
            }
        }
        return grid;
    };

    const handleParse = (inputNum) => {
        // The function that converts the input into a number. Works for any number of digits
        // as long as the length of rows stays the same. Does not depend on existence of the 
        // 4th row, which is empty, but if there is a 4th row it has to be the same length as
        // the rest of the rows. 

        const digitNumber = (inputNum.length - inputNum.length / 4) / 9; // digitNumber calculates how many digits are in inputNum
        const inputGrid = convertToGrid(inputNum, digitNumber); // convertToGrid converts the input number into a grid representation

        // Traverses through the input number grid, digit by digit and for every digit it creates
        // a string representation of the digit which it then compares to every representation
        // of every digit. When it matches a representation it appends the matched digit to 
        // the final number.
        let finalNumber = "";
        for (let i = 0; i < digitNumber; i++) {
            // Digits representation starts off as the top part of the digit, it can only be "   " or " _ ".
            // Then its 2nd row gets appended to the representation and then its 3rd row.
            const digitRepresentation = inputGrid[0][i] + inputGrid[1][i] + inputGrid[2][i];
            finalNumber += findDigit(digitRepresentation); // Finds which digit the created representation represents and appends it to the final number
        }

        return finalNumber;
    };

    return handleParse;
})();

module.exports = parserModule;