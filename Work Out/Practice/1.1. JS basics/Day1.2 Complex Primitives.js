let arr=[50]
let j=0;
for(let i=1;i<=100;i++){
    if(i%2==0){
        arr[j]=i;
        j++;
    }
}
for(let i=0;i<50;i++){
    console.log(arr[i])
}

console.log("---------------------------")

let maxi=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>maxi) maxi=arr[i];
}
console.log("Largest: "+maxi)

console.log("---------------------------")

let start=0
let end=arr.length-1
while(start<end){
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp
    start++,end--;
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

console.log("---------------------------")

const users=[
    {
        firstname: "Harish",
        gender: "Male"
    },
    {
        firstname: "Nalan",
        gender: "Male"
    },
    {
        firstname: "Varun",
        gender: "Male"
    },
    {
        firstname: "Hasini",
        gender: "Female"
    }
]

for(let i=0;i<users.length;i++){
    if(users[i].gender=="Male")//(users[i].gender and (users[i]["gender"] both are same but write (users[i].[gender] instead of (users[i].["gender"] never forget that double quote)
    {
        console.log(users[i]["firstname"])  
    }
}

console.log("---------------------------")
