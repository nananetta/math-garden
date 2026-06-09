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
      },
      {
        topic: "counting",
        prompt: "How many apples?",
        visual: { type: "items", items: ["🍎", "🍎", "🍎", "🍎", "🍎"] },
        choices: ["3", "4", "5", "6"],
        answer: "5"
      },
      {
        topic: "counting",
        prompt: "How many hearts?",
        visual: { type: "items", items: ["♥", "♥"] },
        choices: ["1", "2", "3", "4"],
        answer: "2"
      },
      {
        topic: "counting",
        prompt: "How many moons?",
        visual: { type: "items", items: ["🌙", "🌙", "🌙", "🌙", "🌙", "🌙"] },
        choices: ["4", "5", "6", "7"],
        answer: "6"
      },
      {
        topic: "more",
        prompt: "Which side has more?",
        visual: { type: "compare", left: ["🍓", "🍓", "🍓", "🍓"], right: ["🍓", "🍓", "🍓"] },
        choices: ["Left", "Right", "Same", "None"],
        answer: "Left"
      },
      {
        topic: "more",
        prompt: "Which side has more?",
        visual: { type: "compare", left: ["🌼"], right: ["🌼", "🌼", "🌼"] },
        choices: ["Left", "Right", "Same", "None"],
        answer: "Right"
      },
      {
        topic: "fewer",
        prompt: "Which side has fewer?",
        visual: { type: "compare", left: ["⭐", "⭐", "⭐"], right: ["⭐"] },
        choices: ["Left", "Right", "Same", "None"],
        answer: "Right"
      },
      {
        topic: "same",
        prompt: "Which side has the same number?",
        visual: { type: "compare", left: ["🟡", "🟡"], right: ["🟡", "🟡"] },
        choices: ["Left", "Right", "Same", "None"],
        answer: "Same"
      },
      {
        topic: "pattern",
        prompt: "What comes next?",
        visual: { type: "sequence", items: ["🟢", "🟡", "🟢", "🟡", "?"] },
        choices: ["🟢", "🟡", "🔴", "🔵"],
        answer: "🟢"
      },
      {
        topic: "pattern",
        prompt: "What comes next?",
        visual: { type: "sequence", items: ["🔴", "🔴", "🔵", "🔴", "🔴", "?"] },
        choices: ["🔴", "🔵", "🟡", "🟢"],
        answer: "🔵"
      },
      {
        topic: "number order",
        prompt: "Which number is smallest?",
        visual: { type: "number-row", items: ["2", "3", "4", "5"] },
        choices: ["2", "3", "4", "5"],
        answer: "2"
      },
      {
        topic: "number order",
        prompt: "Which number is biggest?",
        visual: { type: "number-row", items: ["3", "1", "5", "2"] },
        choices: ["1", "2", "3", "5"],
        answer: "5"
      },
      {
        topic: "sequence",
        prompt: "What number comes next?",
        visual: { type: "number-row", items: ["1", "2", "3", "?"] },
        choices: ["2", "3", "4", "5"],
        answer: "4"
      },
      {
        topic: "sequence",
        prompt: "What number is missing?",
        visual: { type: "number-row", items: ["1", "?", "3", "4"] },
        choices: ["1", "2", "3", "4"],
        answer: "2"
      },
      {
        topic: "shape",
        prompt: "Which one is a square?",
        visual: { type: "shape-row", items: ["circle", "square", "triangle", "star"] },
        choices: ["Circle", "Square", "Triangle", "Star"],
        answer: "Square"
      },
      {
        topic: "shape",
        prompt: "Which one is a triangle?",
        visual: { type: "shape-row", items: ["star", "circle", "triangle", "square"] },
        choices: ["Star", "Circle", "Triangle", "Square"],
        answer: "Triangle"
      },
      {
        topic: "matching",
        prompt: "Which group is the same?",
        visual: { type: "target", items: ["●", "●", "●"] },
        choices: ["●", "● ●", "● ● ●", "● ● ● ●"],
        answer: "● ● ●"
      },
      {
        topic: "matching",
        prompt: "Which group is the same?",
        visual: { type: "target", items: ["★", "★", "★", "★"] },
        choices: ["1", "2", "3", "4"],
        answer: "4"
      },
      {
        topic: "height",
        prompt: "Which tower is shortest?",
        visual: { type: "towers", items: [7, 3, 5, 6] },
        choices: ["1st", "2nd", "3rd", "4th"],
        answer: "2nd"
      },
      {
        topic: "height",
        prompt: "Which tower is tallest?",
        visual: { type: "towers", items: [4, 6, 3, 8] },
        choices: ["1st", "2nd", "3rd", "4th"],
        answer: "4th"
      },
      {
        topic: "counting",
        prompt: "How many balloons?",
        visual: { type: "items", items: ["🎈", "🎈", "🎈", "🎈"] },
        choices: ["2", "3", "4", "5"],
        answer: "4"
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
      },
      {
        topic: "counting",
        prompt: "How many shells?",
        visual: { type: "items", items: ["🐚", "🐚", "🐚", "🐚", "🐚", "🐚", "🐚"] },
        choices: ["5", "6", "7", "8"],
        answer: "7"
      },
      {
        topic: "counting",
        prompt: "How many ladybugs?",
        visual: { type: "items", items: ["🐞", "🐞", "🐞", "🐞", "🐞", "🐞", "🐞", "🐞"] },
        choices: ["6", "7", "8", "9"],
        answer: "8"
      },
      {
        topic: "one more",
        prompt: "What is 1 more than 8?",
        visual: { type: "sum", groups: [["🟢", "🟢", "🟢", "🟢", "🟢", "🟢", "🟢", "🟢"], ["🟢"]], operator: "+" },
        choices: ["7", "8", "9", "10"],
        answer: "9"
      },
      {
        topic: "one more",
        prompt: "What is 1 more than 9?",
        visual: { type: "equation", text: "9 + 1" },
        choices: ["8", "9", "10", "11"],
        answer: "10"
      },
      {
        topic: "one less",
        prompt: "What is 1 less than 10?",
        visual: { type: "cross-out", items: ["⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐"], crossed: 1 },
        choices: ["8", "9", "10", "11"],
        answer: "9"
      },
      {
        topic: "one less",
        prompt: "What is 1 less than 3?",
        visual: { type: "cross-out", items: ["🍪", "🍪", "🍪"], crossed: 1 },
        choices: ["1", "2", "3", "4"],
        answer: "2"
      },
      {
        topic: "addition",
        prompt: "How many altogether?",
        visual: { type: "sum", groups: [["🍇", "🍇", "🍇"], ["🍇", "🍇"]], operator: "+" },
        choices: ["4", "5", "6", "7"],
        answer: "5"
      },
      {
        topic: "addition",
        prompt: "How many altogether?",
        visual: { type: "sum", groups: [["🚗", "🚗", "🚗", "🚗"], ["🚗", "🚗"]], operator: "+" },
        choices: ["5", "6", "7", "8"],
        answer: "6"
      },
      {
        topic: "subtraction",
        prompt: "How many are left?",
        visual: { type: "cross-out", items: ["🐠", "🐠", "🐠", "🐠", "🐠"], crossed: 2 },
        choices: ["2", "3", "4", "5"],
        answer: "3"
      },
      {
        topic: "subtraction",
        prompt: "How many are left?",
        visual: { type: "cross-out", items: ["🍎", "🍎", "🍎", "🍎", "🍎", "🍎"], crossed: 3 },
        choices: ["2", "3", "4", "5"],
        answer: "3"
      },
      {
        topic: "compare numbers",
        prompt: "Which number is bigger?",
        visual: { type: "number-row", items: ["4", "7", "2", "6"] },
        choices: ["2", "4", "6", "7"],
        answer: "7"
      },
      {
        topic: "compare numbers",
        prompt: "Which number is smaller?",
        visual: { type: "number-row", items: ["10", "8", "5", "9"] },
        choices: ["5", "8", "9", "10"],
        answer: "5"
      },
      {
        topic: "sequence",
        prompt: "What number is missing?",
        visual: { type: "number-row", items: ["5", "6", "?", "8"] },
        choices: ["6", "7", "8", "9"],
        answer: "7"
      },
      {
        topic: "sequence",
        prompt: "What number comes next?",
        visual: { type: "number-row", items: ["6", "7", "8", "?"] },
        choices: ["7", "8", "9", "10"],
        answer: "9"
      },
      {
        topic: "composition",
        prompt: "Which pair makes 6?",
        visual: { type: "sum", groups: [["🟡", "🟡", "🟡"], ["🟡", "🟡", "🟡"]], operator: "+" },
        choices: ["2 + 2", "3 + 3", "4 + 1", "5 + 2"],
        answer: "3 + 3"
      },
      {
        topic: "composition",
        prompt: "Which pair makes 7?",
        visual: { type: "sum", groups: [["🔵", "🔵"], ["🔵", "🔵", "🔵", "🔵", "🔵"]], operator: "+" },
        choices: ["1 + 5", "2 + 5", "3 + 3", "4 + 4"],
        answer: "2 + 5"
      },
      {
        topic: "shape",
        prompt: "Which shape has 4 equal sides?",
        visual: { type: "shape-row", items: ["circle", "square", "triangle", "rectangle"] },
        choices: ["Circle", "Square", "Triangle", "Rectangle"],
        answer: "Square"
      },
      {
        topic: "capacity",
        prompt: "Which cup is empty?",
        visual: { type: "cups", items: ["half", "full", "empty", "low"] },
        choices: ["Half", "Full", "Empty", "Low"],
        answer: "Empty"
      },
      {
        topic: "capacity",
        prompt: "Which cup has a little water?",
        visual: { type: "cups", items: ["full", "low", "half", "empty"] },
        choices: ["Full", "Low", "Half", "Empty"],
        answer: "Low"
      },
      {
        topic: "mass",
        prompt: "Which is likely lightest?",
        visual: { type: "items", items: ["🏀", "🪨", "🪶", "📚"] },
        choices: ["Ball", "Rock", "Feather", "Books"],
        answer: "Feather"
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
      },
      {
        topic: "addition within 20",
        prompt: "What is 8 + 5?",
        visual: { type: "equation", text: "8 + 5" },
        choices: ["11", "12", "13", "14"],
        answer: "13"
      },
      {
        topic: "addition within 20",
        prompt: "What is 9 + 6?",
        visual: { type: "equation", text: "9 + 6" },
        choices: ["13", "14", "15", "16"],
        answer: "15"
      },
      {
        topic: "addition within 20",
        prompt: "What is 12 + 4?",
        visual: { type: "equation", text: "12 + 4" },
        choices: ["14", "15", "16", "17"],
        answer: "16"
      },
      {
        topic: "subtraction within 20",
        prompt: "What is 15 - 6?",
        visual: { type: "equation", text: "15 - 6" },
        choices: ["7", "8", "9", "10"],
        answer: "9"
      },
      {
        topic: "subtraction within 20",
        prompt: "What is 18 - 9?",
        visual: { type: "equation", text: "18 - 9" },
        choices: ["8", "9", "10", "11"],
        answer: "9"
      },
      {
        topic: "subtraction within 20",
        prompt: "What is 14 - 5?",
        visual: { type: "equation", text: "14 - 5" },
        choices: ["7", "8", "9", "10"],
        answer: "9"
      },
      {
        topic: "one more",
        prompt: "What is 1 more than 48?",
        visual: { type: "equation", text: "48 + 1" },
        choices: ["47", "48", "49", "50"],
        answer: "49"
      },
      {
        topic: "one less",
        prompt: "What is 1 less than 61?",
        visual: { type: "equation", text: "61 - 1" },
        choices: ["59", "60", "61", "62"],
        answer: "60"
      },
      {
        topic: "place value",
        prompt: "Which number is 3 tens and 6 ones?",
        visual: { type: "place-value", tens: 3, ones: 6 },
        choices: ["36", "63", "30", "46"],
        answer: "36"
      },
      {
        topic: "place value",
        prompt: "Which number is 4 tens and 2 ones?",
        visual: { type: "place-value", tens: 4, ones: 2 },
        choices: ["24", "42", "40", "52"],
        answer: "42"
      },
      {
        topic: "compare numbers",
        prompt: "Which number is greatest?",
        visual: { type: "number-row", items: ["61", "16", "56", "65"] },
        choices: ["61", "16", "56", "65"],
        answer: "65"
      },
      {
        topic: "compare numbers",
        prompt: "Which number is smallest?",
        visual: { type: "number-row", items: ["41", "14", "24", "34"] },
        choices: ["41", "14", "24", "34"],
        answer: "14"
      },
      {
        topic: "counting in twos",
        prompt: "Count in 2s. What comes next?",
        visual: { type: "number-row", items: ["10", "12", "14", "?"] },
        choices: ["15", "16", "17", "18"],
        answer: "16"
      },
      {
        topic: "counting in fives",
        prompt: "Count in 5s. What comes next?",
        visual: { type: "number-row", items: ["5", "10", "15", "?"] },
        choices: ["18", "19", "20", "25"],
        answer: "20"
      },
      {
        topic: "half",
        prompt: "Half of 10 is...",
        visual: { type: "half", items: ["🍓", "🍓", "🍓", "🍓", "🍓", "🍓", "🍓", "🍓", "🍓", "🍓"] },
        choices: ["4", "5", "6", "8"],
        answer: "5"
      },
      {
        topic: "time",
        prompt: "What time is it?",
        visual: { type: "clock", hour: 6, minute: 0 },
        choices: ["5 o'clock", "6 o'clock", "7 o'clock", "8 o'clock"],
        answer: "6 o'clock"
      },
      {
        topic: "time",
        prompt: "What time is it?",
        visual: { type: "clock", hour: 9, minute: 30 },
        choices: ["9 o'clock", "9:30", "10:30", "8:30"],
        answer: "9:30"
      },
      {
        topic: "money",
        prompt: "How much money altogether?",
        visual: { type: "coins", items: ["5p", "5p", "2p"] },
        choices: ["10p", "11p", "12p", "13p"],
        answer: "12p"
      },
      {
        topic: "length",
        prompt: "Which is shortest?",
        visual: { type: "lengths", items: [{ label: "9 cm", size: 9 }, { label: "4 cm", size: 4 }, { label: "7 cm", size: 7 }, { label: "11 cm", size: 11 }] },
        choices: ["9 cm", "4 cm", "7 cm", "11 cm"],
        answer: "4 cm"
      },
      {
        topic: "3D shape",
        prompt: "Which shape is round?",
        visual: { type: "shape-row", items: ["cube", "circle", "cube", "square"] },
        choices: ["Cube", "Circle", "Both cubes", "None"],
        answer: "Circle"
      }
    ]
  }
};
