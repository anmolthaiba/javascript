// const object = new object()

const object={
    fullname:{
        userfullname:{
            firstname:"anmol"
            ,lastname:"thaiba"
        }
    }
}
// console.log(object.fullname.userfullname?.firstname)

const obj = {
    1:"a",
    2:"b",
    name:"anmol"
}
const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = {...obj,...obj2}
const obj3 = Object.assign({},obj,obj2)
console.log(obj3)


const {name} = obj
console.log(name)