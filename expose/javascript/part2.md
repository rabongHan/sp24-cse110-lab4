**Q1: Line 12 would print *3***
- list *prices* has length of 3 and *i* is incremented by 1 until 3 inside the for loop

**Q2: Line 13 would print *150*** 
- when *i* = 2, *discountedPrice* = 300 * 0.5 which is 150, and for loop ends

**Q3: Line 14 would print *150***
- *discountedPrice* was 150, so *finalPrice* = Math.round(150 * 100) / 100 which is 150

**Q4: The function would return list *[50, 100, 150]*** 
- every step from *i* = 0 to *i* = 2 inside the for loop, *finalPrice* becomes 50, 100, and 150. Then those values are pushed to list *discounted*

**Q5: ERROR** 
- *i* is declared as let inside the for loop. The scope of *i* is only within for loop, however line 12 is trying to access to *i* outside the for loop. So, it is causing 'ReferenceError'

**Q6: ERROR**
- *discountedPrice* is declared as let inside the for loop. The scope of *discountedPrice* is only within for loop, however line 13 is trying to access to *discountedPrice* outside the for loop. So, it is causing 'ReferenceError'

**Q7: Line 14 would print *150***
- *finalPrice* is declared as let, but outside the for loop. Inside the for loop, when *i* = 2, *finalPrice* = Math.round(150 * 100) / 100 which is 150. Then, the for loop ends. Still, line 14 can access to *finalPrice* since the scope of *finalPrice* is within function.

**Q8: The function would return list *[50, 100, 150]*** 
- every step from *i* = 0 to *i* = 2 inside the for loop, *finalPrice* becomes 50, 100, 150. Then those values are pushed to list *discounted*. The line 16 can access to *discounted* list since the scope of *discounted* is within function.

**Q9: ERROR**
- *i* is declared as let inside the for loop. The scope of *i* is only within for loop, however line 12 is trying to access to *i* outside the for loop. So, it is causing 'ReferenceError'

**Q10: Line 12 would print *3***
- *length* is declared as const in line 4, and *3* is assigned to it. 

**Q11: The function would return list *[50, 100, 150]*** 
- Even though the list *discounted* is declared as const, we can still reassign th element. For every step from *i* = 0 to *i* = 2 inside the for loop, *discountedPrice* becomes 50, 100, 150. Then those values are pushed to list *discounted*.

**Q12:**
- **A**: student.name
- **B**: stduent['Grad Year']
- **C**: student.greeting()
- **D**: student['Favorite Teacher'].name
- **E**: student.courseLoad[0]

**Q13:**
- **A**: '32'
  - *+* operator with string and number will result in string that includes number being converted to string. '32' from '3' and '2'.
- **B**: 1
  - *-* operator is not resulting in string. So, '3' would be converted to number first, then 3 - 2 would be performed. 
- **C**: 3
  - *null* is considered as 0 in numbers. So, 3 + 0 would be performed.
- **D**: '3null'
  - *null* is converted to string since it is concactenated with string using *+* operator. '3null' from '3' and 'null'.
- **E**: 4
  - *true* is considered as 1 in numbers. So, 1 + 3 would be performed.
- **F**: 0
  - *false* is considered as 0 in numbers, and *null* is 0. So, 0 + 0 would be performed.
- **G**: '3undefined'
  - *undefined* is converted to string since it is concactenated with string using *+* operator. '3undefined' from '3' and 'undefined'.
- **H**: NaN
  - *-* operator is not resulting in string. In addition, *undefined* is considered as NaN in numbers. So, 3 - NaN would be performed.

**Q14:**
- **A**: true
  - '2' string is converted to number 2. Then, 2 > 1 is true.
- **B**: false
  - Comparision of strings follws the lexicographical order. '2' > '1' in lexicographical order. So, '2' < '12' is false.
- **C**: true
  - *==* operator automatically changes string '2' to number 2. Then, 2 == 2 is true.
- **D**: false
  - *===* operator doesn't automatically changes the types. In addiiton, if the two operands are of different types, it return false. Therefore 2 === '2' is false. 
- **E**: false
  - *true* is converted to 1. Then, 1 == 2 is false.
- **F**: true
  - *Boolean(2)* is equal to true since in javascript, non-zero number is all considered as true. Then, true === true is true (they are both of same type).

**Q15**: *==* operator automatically changes the type before comparision. On the other hand, *===* operator doesn't change the type; rather, it does check if the operands have the same type or not.

**Q17: The function would return list *[2,4,6]***
- Function *modifyArray* iterates through the given array *[1,2,3]*. For each element in the array, *modifyArray* is pushing number that is returned by *doSomething(array[i])* to new array *newArr*. *doSomething* returns given number * 2. Thus, we can think *modifyArray* returns new array that includes double(x2) of the number that was in the given array. 

**Q19: The output would be 1 4 3 2 in this order**
- *console.log(1)* would be executed first as soon as *printNums* is called. Then, *console.log(4)* would be executed since it is the next non-delayed line after *console.log(1)*. Then, line 4 would be executed. The reason why line 5 would be executed first before line 4 is because the delay of 0 milliseconds still means that the line would be executed after the current script execution(line 2 and line 5 in this case) finishes. Then, line 3 would be executed lastly. 