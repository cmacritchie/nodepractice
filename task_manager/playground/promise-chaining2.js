require('../src/db/mongoose')
const Task = require('../src/models/task');

//promise chaining
// Task.findByIdAndDelete('').then(()=>{
//     return Task.countDocuments({completed: false})
// }).then((result)=> {
//     console.log(result)
// }).catch((e)=> {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5cf13ad996d75c2a502f107b').then((count)=> {
    console.log(count)
}).catch((e)=> {
    console.log(e)
})