window.onload = function(){
    
    // Sets eliminate duplicates
    let names = new Set()
    names.add('john').add('charles').add('victory').add('paul').add('paul')
    console.log(names)
    console.log(names.size)
    console.log(names.has('john'))

    // convert this array to Set so as to eliminate its duplicates
    let Students = ['john', 'baggio', 'james', 'neymar', 'john', 'baggio', 'james', 'emma', 'peace']
    let reStudents = new Set(Students)
    
    // spread operator
    console.log(...reStudents)

}