a = ["hasib" , 22 , true]
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])

a[0] = "ahmad"
console.log(a)

b = ["hasib" , 22 , true , [0,1,2,3, ["ahmad", 33]]]
console.log(b)
console.log(b[3][4][0])

c = [1,2,3,4]
d = ["ahmad", "hasib"]
e = [...c,...d,...c]
console.log(e)


a = [{
    1 : "ahmad",
    2 : "hasib",
    3 : 43,
    4 : true
},
{
    1 : "ahmad",
    2 : "hasib",
    3 : 43,
    4 : true
}
]

console.log(a)

a = [1,2,3,4]
a.reverse()
console.log(a)

a = ["raza", "ahmad", "zeeshan"]
a.sort()
console.log(a)

a = ["raza", "ahmad", "zeeshan"]
a.pop()
console.log(a)

a = ["raza", "ahmad", "zeeshan"]
a.push("hasib")
console.log(a)

a = ["raza", "ahmad", "zeeshan"]
a.shift()
console.log(a)

a = ["raza", "ahmad", "zeeshan"]
a.unshift(65)
console.log(a)

const g = () => {
    console.log("hi")
}
g()


a = [1,2,3,4]
a.map((h) => {
    console.log(h*2)
})