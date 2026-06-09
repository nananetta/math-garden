const QUESTION_BANK = {
  "pre-k": {
    label: "Pre-K",
    questions: [
      {
        topic: "counting",
        prompt: "How many stars?",
        visual: { type: "items", items: ["★", "★", "★"] },
        choices: ["1", "2", "3", "4"],
        answer: "3"
      },
      {
        topic: "more",
        prompt: "Which side has more?",
        visual: {
          type: "compare",
          left: ["●", "●", "●"],
          right: ["●", "●"]
        },
        choices: ["Left", "Right", "Same", "None"],
        answer: "Left"
      },
      {
        topic: "fewer",
        prompt: "Which side has fewer?",
        visual: {
          type: "compare",
          left: ["🍎", "🍎"],
          right: ["🍎", "🍎", "🍎"]
        },
        choices: ["Left", "Right", "Same", "None"],
        answer: "Left"
      },
      {
        topic: "pattern",
        prompt: "What comes next?",
        visual: { type: "sequence", items: ["🔴", "🔵", "🔴", "🔵", "?"] },
        choices: ["🔴", "🔵", "🟡", "🟢"],
        answer: "🔴"
      },
      {
        topic: "number order",
        prompt: "Which number is biggest?",
        visual: { type: "number-row", items: ["1", "2", "3", "4"] },
        choices: ["1", "2", "3", "4"],
        answer: "4"
      },
      {
        topic: "shape",
        prompt: "Which one is a circle?",
        visual: { type: "shape-row", items: ["circle", "square", "triangle", "star"] },
        choices: ["Circle", "Square", "Triangle", "Star"],
        answer: "Circle"
      },
      {
        topic: "counting",
        prompt: "How many dots?",
        visual: { type: "items", items: ["●", "●", "●", "●"] },
        choices: ["2", "3", "4", "5"],
        answer: "4"
      },
      {
        topic: "matching",
        prompt: "Which group is the same?",
        visual: { type: "target", items: ["●", "●"] },
        choices: ["●", "● ●", "● ● ●", "● ● ● ●"],
        answer: "● ●"
      },
      {
        topic: "height",
        prompt: "Which tower is tallest?",
        visual: { type: "towers", items: [2, 5, 8, 3] },
        choices: ["1st", "2nd", "3rd", "4th"],
        answer: "3rd"
      },
      {
        topic: "pattern",
        prompt: "What comes next?",
        visual: { type: "sequence", items: ["⬛", "⬜", "⬛", "⬜", "?"] },
        choices: ["⬛", "⬜", "🔴", "🔵"],
        answer: "⬛"
      }
    ]
  },
  kg: {
    label: "KG",
    questions: [
      {
        topic: "counting",
        prompt: "How many toys?",
        visual: { type: "items", items: ["🧸", "🧸", "🧸", "🧸", "🧸"] },
        choices: ["3", "4", "5", "6"],
        answer: "5"
      },
      {
        topic: "one more",
        prompt: "What is 1 more than 4?",
        visual: { type: "sum", groups: [["🍓", "🍓", "🍓", "🍓"], ["🍓"]], operator: "+" },
        choices: ["3", "4", "5", "6"],
        answer: "5"
      },
      {
        topic: "one less",
        prompt: "What is 1 less than 6?",
        visual: { type: "cross-out", items: ["🐠", "🐠", "🐠", "🐠", "🐠", "🐠"], crossed: 1 },
        choices: ["4", "5", "6", "7"],
        answer: "5"
      },
      {
        topic: "addition",
        prompt: "How many altogether?",
        visual: { type: "sum", groups: [["🍎", "🍎"], ["🍎"]], operator: "+" },
        choices: ["2", "3", "4", "5"],
        answer: "3"
      },
      {
        topic: "compare numbers",
        prompt: "Which number is smaller?",
        visual: { type: "number-row", items: ["6", "7", "8", "9"] },
        choices: ["6", "7", "8", "9"],
        answer: "6"
      },
      {
        topic: "sequence",
        prompt: "What number is missing?",
        visual: { type: "number-row", items: ["1", "2", "?", "4"] },
        choices: ["2", "3", "4", "5"],
        answer: "3"
      },
      {
        topic: "composition",
        prompt: "Which pair makes 5?",
        visual: { type: "sum", groups: [["🟡", "🟡"], ["🟡", "🟡", "🟡"]], operator: "+" },
        choices: ["1 + 2", "2 + 3", "4 + 2", "5 + 1"],
        answer: "2 + 3"
      },
      {
        topic: "shape",
        prompt: "Which shape has 3 sides?",
        visual: { type: "shape-row", items: ["circle", "square", "triangle", "rectangle"] },
        choices: ["Circle", "Square", "Triangle", "Rectangle"],
        answer: "Triangle"
      },
      {
        topic: "capacity",
        prompt: "Which cup is full?",
        visual: { type: "cups", items: ["empty", "half", "full", "low"] },
        choices: ["Empty", "Half", "Full", "Tiny"],
        answer: "Full"
      },
      {
        topic: "mass",
        prompt: "Which is likely heaviest?",
        visual: { type: "items", items: ["🪶", "🎈", "🚗", "🧸"] },
        choices: ["Feather", "Balloon", "Car", "Teddy"],
        answer: "Car"
      }
    ]
  },
  g1: {
    label: "G1",
    questions: [
      {
        topic: "addition within 10",
        prompt: "What is 7 + 2?",
        visual: { type: "sum", groups: [["🍌", "🍌", "🍌", "🍌", "🍌", "🍌", "🍌"], ["🍌", "🍌"]], operator: "+" },
        choices: ["8", "9", "10", "11"],
        answer: "9"
      },
      {
        topic: "subtraction within 10",
        prompt: "What is 10 - 3?",
        visual: { type: "cross-out", items: ["🔵", "🔵", "🔵", "🔵", "🔵", "🔵", "🔵", "🔵", "🔵", "🔵"], crossed: 3 },
        choices: ["6", "7", "8", "9"],
        answer: "7"
      },
      {
        topic: "one more",
        prompt: "What is 1 more than 19?",
        visual: { type: "equation", text: "19 + 1" },
        choices: ["18", "19", "20", "21"],
        answer: "20"
      },
      {
        topic: "one less",
        prompt: "What is 1 less than 30?",
        visual: { type: "equation", text: "30 - 1" },
        choices: ["28", "29", "30", "31"],
        answer: "29"
      },
      {
        topic: "place value",
        prompt: "Which number is 2 tens and 4 ones?",
        visual: { type: "place-value", tens: 2, ones: 4 },
        choices: ["14", "24", "42", "20"],
        answer: "24"
      },
      {
        topic: "compare numbers",
        prompt: "Which number is greatest?",
        visual: { type: "number-row", items: ["35", "53", "25", "45"] },
        choices: ["35", "53", "25", "45"],
        answer: "53"
      },
      {
        topic: "counting in twos",
        prompt: "Count in 2s. What comes next?",
        visual: { type: "number-row", items: ["2", "4", "6", "?"] },
        choices: ["7", "8", "9", "10"],
        answer: "8"
      },
      {
        topic: "3D shape",
        prompt: "Which shape is 3D?",
        visual: { type: "shape-row", items: ["square", "triangle", "circle", "cube"] },
        choices: ["Square", "Triangle", "Circle", "Cube"],
        answer: "Cube"
      },
      {
        topic: "half",
        prompt: "Half of 8 is...",
        visual: { type: "half", items: ["🍪", "🍪", "🍪", "🍪", "🍪", "🍪", "🍪", "🍪"] },
        choices: ["2", "3", "4", "6"],
        answer: "4"
      },
      {
        topic: "time",
        prompt: "What time is it?",
        visual: { type: "clock", hour: 3, minute: 0 },
        choices: ["1 o'clock", "2 o'clock", "3 o'clock", "4 o'clock"],
        answer: "3 o'clock"
      },
      {
        topic: "money",
        prompt: "Which coin is worth the most?",
        visual: { type: "coins", items: ["1p", "2p", "5p", "10p"] },
        choices: ["1p", "2p", "5p", "10p"],
        answer: "10p"
      },
      {
        topic: "length",
        prompt: "Which is longest?",
        visual: { type: "lengths", items: [{ label: "5 cm", size: 5 }, { label: "8 cm", size: 8 }, { label: "12 cm", size: 12 }, { label: "3 cm", size: 3 }] },
        choices: ["5 cm", "8 cm", "12 cm", "3 cm"],
        answer: "12 cm"
      }
    ]
  }
};
