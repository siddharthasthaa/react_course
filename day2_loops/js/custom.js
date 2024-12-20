// let num=5
// for (i=1;i<=10;i++)
// {
//   let result =`${num} x ${i} = ${num*i}`;
//   console.log(result)
// }

// for(i=0;i<=10;i++) //display only even number
// {
//   if(i%2==0){
//     console.log(i)
//   }
// }

// let students = ['ram', 'hari','sita', 'gita', 'shyam'];
// for(i=0;i<=4;i++)
// {
//     console.log(students[i])
// }

// let number = [
//   [23,55,23,52,44],
//   [25,54,800,50,90],
// ]
// // console.log(number[1][2][1]);
// // console.log(number[1][2][0][0][0]);

// for(i=0;i<5;i++)
// {
//   result = number[i]
//   console.log(result)
// }
//difference between foreach and map

for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication Table for ${i}:`);
  for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log(''); // multiplication for 1-10
}