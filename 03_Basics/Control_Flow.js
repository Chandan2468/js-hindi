//      JS execution context
// JS executes our program in two phases
// JS is single threaded
// Global execution content is always formed - {} which is referred by this variable
// Funtion/Functional execution context is also their
// Eval execution context

// 1st phase : Memory creation phase here memory allocation is done for variables
// 2nd phase : execution phase here the variables are executed


let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(48,54)


/* Memory creation phase
initially all variables are assigned as undefined and funtion name is defined as definition
   Execution phase
   val1 <- 10
   val2 <- 5
   addNum -> creates a new execution context (box like structure) and a new variable environment and an execution thread is created
             box are created whenever a function is called
             so again memory creation phase and execution phase are done
             Memory phase :
             val1 -> undefined
             val2 -> undefined
             total -> undefined
             Execution phase :
             num1 <- 10
             num2 <- 5
             total <- 15
             the answer is returned to global execution context(outer one)
             now the box gets deleted after work done
    addNum -> create a box
              Memory phase :
              val1 -> undefined
              val2 -> undefined
              total -> undefined
              Execution phase :
              num1 <- 10
              num2 <- 2
              total <- 12

*/

// CALL STACK (LIFO)
/*
               |________|

               |________|
                one()
               |________|
               global exe
               |________|

*/