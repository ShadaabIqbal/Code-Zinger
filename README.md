# Code-Zinger
LIST OF QUESTIONS: 

Qno1: Add 2 numbers.
Given two integers N1 and N2, find their sum and store in R.
The code to read N1 and N2 as well as to print R has already been provided.

Qno2: Add two numbers using call by reference
Given two numbers as input, add the two numbers using call by reference.

Qno3: Given an integer radius R, find the area of a circle.
Area of circle = pi * radius * radius.
Where, pi is mathematical constant whose value is 3.14

Qno4: 
Number of unique pairs in an array
Given an array of N elements, find all the unique pairs that can be formed using the elements of a given array.

Qno5:
Replace every element with its previous element
Given an array A of integers, write a program to replace each element in the array by the previous element. Replace the first element by -1.

Qno6:
Given a string S, check whether a string S is Palindrome not.
Display 1 if string is palindrome else 0.

Qno7:
Given two integer numbers N1 and N2, find the average of those and store result in double type number R.
The code is already provided to read N1 and N2 integer numbers and to print result value R. 
Hint: use type-casting.

Qno8:
Given an integer N, determine whether the given N is a multiple of 5.
Write a function def solution(N): which accepts an integer N, the function should return 1 if N is multiple of 5 else return 0.

Qno9: //Important//
You are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b
Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

Qno10:
Given an integer N, find whether it is Armstrong number or not.
Reference: https://illuminations.nctm.org/Lesson.aspx?id=2166
Display 1 if it is an Armstrong number else 0.

Qno11:
Given two time data (in hour, minute and second format) an input, create a Time structure to store hour, minute and second values. Calculate the difference between two time.
Perform the following operations
Store value of hour, minute and second in the Time structure.
Calcuate the difference of Time.

Qno12:
Given cost price and sales price of an item, calculate and print profit or loss percentage.
Write a function:
void solution(float C, float S)
that accepts a cost price C and sales price S of type float. The function should print the calculated profit or loss percentage.

Qno13:
Given an 3 digit integer number, check if the 3 digit number is twisted prime or not.
Write a function:
int solution(int N)that accepts an 3 digit integer N. The function should return 1 if the given integer is a twisted prime number else 0.
Input
167
Output
1

Qno14:
Given three integers A, B and C. Write a program to find out if the number is a Pythagorean triple.
Write a function: int solution(int A, int B, int C) that accept three integer A, B and C. The function should return 1 if the given integers are Pythagorean triple else 0.

Qno15:
Given string S containing only lowercase alphabets and an integer K, find whether the string can be converted to a Pangram by performing at most K changes. In one change we can remove any existing character and add a new character.
Note: Given that length of the string is greater than 26 always and in one operation we have to remove an existing element to add a new element.
Input:
qwqqwqeqqwdsdadsdasadsfsdsdsdasasas
4 
where:
First line represents string S.
Second line represents K

Qn016:
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

Qno17:
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Qno18:
Given two strings S1 and S2, you are allowed only to change a character at any position to any vowel if it is a vowel or to a consonant, if it is a consonant. Write a program to check whether a string S1 can be changed to S2 or S2 can be changed to S1.
Input:
abcgle
ezggli
where:
First line represents string S1.
Second line represents string S2.