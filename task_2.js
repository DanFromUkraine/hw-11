
class Figure {
  constructor(name, sides_and_these_length = {}) {
    Object.assign(this, {
      name: name,
      sides_and_these_length: sides_and_these_length,
    });
    this.side_length = Object.values(sides_and_these_length);
  }
  get_name() {
    return this.name;
  }
  figure_info() {
    return [this.name, this.sides_and_these_length];
  }
  count_perimeter () {
    return this.side_length.reduce((acc, number)=>acc+number);
  }
}

class Rectangle extends Figure {
  count_square() {
    return this.side_length.slice(0,2).reduce((acc,number)=>acc*number,1)
  }
}

class Triangle extends Figure {
  constructor(sides_and_these_length, side_length) {
    super(sides_and_these_length, side_length); // якщо прибрати sides_and_these_length буде помилка
  }

  count_square() {
    const p = this.side_length.reduce((acc, number) => acc + number, 0) / 2;
    return Math.sqrt(
      p *
        (p - this.side_length[0]) *
        (p - this.side_length[1]) *
        (p - this.side_length[2])
    );
  }
}

const triangle = new Triangle("трикутник", { ab: 1, bc: 2, ac: 2 });
console.log(triangle.count_square());
console.log(triangle.count_perimeter());
console.log(triangle.get_name());
console.log(triangle.figure_info());

const quad = new Rectangle('квадрат', {ab: 2, bc: 2, cd: 2, ad: 2});
console.log(quad.count_perimeter()); 
console.log(quad.count_square());




