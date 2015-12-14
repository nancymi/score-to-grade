function getScoreLevel(score) {

  switch(parseInt(score/10)) {
    case 9: return "S"; break;
    case 8: return "A"; break;
    case 7: return "B"; break;
    case 6: return "C"; break;
    case 5: case 4: case 3: case 2: case 1: case 0: return "D"; break;
    default: throw new TypeError("input error!");
  }
}