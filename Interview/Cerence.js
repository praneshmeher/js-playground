/* 
Write a function that given an integer "N" and a list of words "A" return all words of length "N" from "A" that are made of the concatenation of two words from "A"
# e.g. N=6, A=[hotter, hot, bird, dog, tailor, hotdog, or, if, tail, catdog] --> (tailor = tail+or, hotdog = hot+dog)
*/


function demo(){
    let A=['hotter', 'hot', 'bird', 'dog', 'tailor', 'hotdog', 'or', 'if', 'tail', 'catdog']
    let N=6
    let ans = []
    A.forEach((item)=>{
        let first = false
        let second = false
        A.forEach((word)=>{
            if(item!==word && item.indexOf(word) === 0)
                first = true
            if(item!==word && item.indexOf(word) >= 1)
                second = true
        })
        if(first && second && item.length == N)
            ans.push(item)
    })  
    console.log(ans)
}

demo();



// (Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
    
//     E.g. Given this following array [2, 3, 17, 11, 53, 9] and this target 20, you algorithm should return [2, 4]
//          Given this following array [2, 17, 11, 53, 9] and this target 14, you algorithm should return [] => No Match
    
    
let map = {}

arr.forEach((item)=>{
    if(!map[item]){
        map[item]=1
    }
    let rem = target-item
    if(map[rem]){
        return [item, rem]
    }
})