module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximun()}
o) 元素数量 = ${sequence.get_length()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    if (input instanceof Array) {
      if (input.length == 0) {
        console.log("The input is empty.");
      } else {
        this.input = input;
      }
    } else {
      console.log("The input is not an array.");
    }
  }

  minimum() {
    var min = this.input[0];
    for (var i = 1; i < this.input.length; i++) {
      if (this.input[i] < min) {
        min = this.input[i];
      }
    }
    return min;
  }

  maximun() {
    var max = this.input[0];
    for (var i = 1; i < this.input.length; i++) {
      if (this.input[i] > max) {
        max = this.input[i];
      }
    }
    return max;
  }

  get_length() {
    return this.input.length;
  }

  average() {
    var sum = 0;
    for (var i = 0; i < this.input.length; i++) {
      sum += this.input[i];
    }
    return (sum / this.input.length).toFixed(2);
  }

}
