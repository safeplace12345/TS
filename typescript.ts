//Generic Types
type MyGenTypeNoArgs = {
  data: any;
  name: string;
};

type MyGenType<TData> = {
  data: TData;
  name: string;
};

type MyGenTypeTwo = MyGenType<{
  nested: string;
}>;

type MyGenTypeThree = MyGenType<string>;

// Passing type args to functions
type Res = { name: string; age: number };

const mapData = <TypeData>(url: string): Promise<TypeData> => {
  return fetch(url, {})
    .then((res) => res)
    .catch((err) => err);
};

mapData<Res>("http://")
  .then((res) => {
    console.log(res.age);
    console.log(res.name);
  })
  .catch((err) => err);

const applyTexture = <TData>(numbers: any[]): TData => {
  return numbers.reduce((acc, nNum) => {
    if (typeof nNum === "object") {
      return applyTexture(nNum);
    }
    return (acc += nNum);
  }, 0);
};

applyTexture<number>([1, [2, 3], 4, [5, [6, 7]]]);

const newSet = new Set<number>();

newSet.add(1);
// set.add("abc"); //Throws Error

const returnKeyValue = <TData>(obj: TData, key: keyof TData) => {
  return obj[key];
};

returnKeyValue(
  {
    a: 1,
    b: "test",
    c: true,
  },
  "a"
);

// Using Return type and Awaited for resolving responses under the hood
type GenericResponseType<T> = Awaited<
  ReturnType<T extends (...args: any) => T ? T : any>
>;

type gentype2 = GenericResponseType<Promise<() => {}>>;
type gentype3 = GenericResponseType<() => {}>;
type gentype4 = GenericResponseType<string>;

const t: gentype3 = (st: number) => {
  return st;
};

// Using Enums
enum Fruits {
  peach,
  apple,
  banana = 6,
}
console.log(Fruits.apple); // 2 => Because of indexing
console.log(Fruits.peach); // 1 => Because of indexing
console.log(Fruits.banana); // 6 => Because of Assignment

// Fruits.apple = 4 // Throws Error

//Using Implements and Extends
class Vehicle {
  type: string;
  color: string;
  milage: number;

  drive() {}

  radio() {}
}

class MotorBike extends Vehicle {}

const motor1 = new MotorBike();
console.log(motor1.color); // is available as black
motor1.color = "red";

interface Design {
  paint: string;
  pattern: string;
}

// class Ship implements Vehicle, Design {
//     // Will work only if manually assign properties as parent
// }

class Ship implements Design, Vehicle {
  type: "automotive";
  paint: "brown";
  pattern: "none";
  color: "silver brown";
  milage: 500000;
  drive(): void {}
  radio(): void {}
  eco() {}
}

// More Generics
const removeFirstOrder = <T>(arr: Array<T>): Array<T> => {
  arr.shift();
  return arr;
};
console.log(removeFirstOrder([1, 2, 3, 4, 5, 6]));
console.log(removeFirstOrder(["1", "2", "3"]));
console.log(removeFirstOrder(["1", "2", 3, true]));

// Partial and Required
type Passenger = {
  name: string;
  id: number;
  token: number;
};

// const andy: Required<Passenger> = { name: "Andy", id: 12322 }; //This will fail
const andy2: Partial<Passenger> = { name: "Andy", id: 12322 };

// Using Literal types like 10 , get etc and "AS" keyword
// const req = { url: "http://", method: "POST" } as const OR

const req = { url: "http://", method: "POST" as "POST" }

function request(url: string, method: "GET" | "POST"): 10 {
  return 10;
}

console.log(request(req.url, req.method)) // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.