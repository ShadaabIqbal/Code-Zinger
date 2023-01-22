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

Qno19:
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Qno20:
Find a string within a string
Given two strings S1 & S2, search for an occurrence of the second string within a first string.  
Note: Do not use system library for the implementation. 
Input:
Code Zinger University 
Zinger where, 
First line represents string S1. 
Second line represents string S2. 
Output:
5 
Here 'Zinger' word starts at 5th index within 'Code Zinger University’.

Qno21:
Given a string S, find the difficulty of the given string. Here a Word is considered hard if it has 4 consecutive consonants or number of consonants is more than the number of vowels. Else word is easy. Difficulty of the string is defined as 5*(number of hard words) + 3*(number of easy words).
Hard words = 2(Difficulty and sentence) Easy words = 1(of) So, answer is 5*2+3*1 = 13

Qno22:
Given a string S, find all characters that are missing from the string S, i.e., the characters that can make the string a Pangram. Display output in alphabetic order.
Input:
The quick brown fox jumps
where:
First line represents string S.
Output:
adglvyz

Qno23:
By frequency counting method:
Given two strings a and b, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Qno24:
By frequency counting method:
Given two arrays a and b, return true if a is a square of b, and false otherwise.

Qno25:
Given an array of N integers where each element in the array occurs the same number of times except one element, find that element.
Input:
5
1 1 2 2 3
where:
First line represents the number of elements in the array.
Second line represents the elements in the array.
Output:
3
Explanation: Elements 1, and 2 occur two times each but 3 occurs only once, hence the output 3.

Qno26:
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k. A subarray is a contiguous non-empty sequence of elements within an array.
Example 1:
Input: nums = [1,1,1], k = 2
Output: 2
Example 2:
Input: nums = [1,2,3], k = 3
Output: 2

Qno27:
Two pointer:
Find the pair which sums up to o ?

Qno28:
Two pointer:
Find the pair which sums up to o ?

Qno29:
Max Pair Sum
Given an array of distinct integers A, find the largest sum of any pair of elements. 
Input 
6 
1 2 3 89 4 10 
Where, 
First line contains the size of array N. 
Second line contains array elements.      
Output 
99 
Here for the given array, sum of various pairs are 
1 + 89 = 90 
2 + 89 = 91 
3 + 89 = 92 
4 + 89 = 93
10 + 89 = 99 
and so on. The largest sum out of these pairs is 99.

Qno30:
Two pointer:
Two Sum II - Input Array Is Sorted
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
Your solution must use only constant extra space.

Qno31:
DUTCH NATIONAL FLAG PROBLEM:
Multiple pointer:
Sort Colors
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Qno32:
Sliding window:
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Qno33:
Sliding window:
Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.
Example 1:
Input:
N = 4, K = 2
Arr = [100, 200, 300, 400]
Output:
700
Explanation:
Arr3  + Arr4 =700,
which is maximum.

Qno34:
Given a string s, find the length of the longest substring without repeating characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Qno35:
Given a string S, find length of the longest substring with all distinct characters. 
Example 1:
Input:
S = "geeksforgeeks"
Output: 7
Explanation: "eksforg" is the longest 
substring with all distinct characters.

Qno36:
Given a string S and a number K, find the number of substrings of length K whose sum of ASCII value of characters is divisible by K.
Input:
bcgabc
3
where:
First line represents the input string S
Second line represents K.

Qno37:
KADENE'S ALGORITHM:
Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.
Input 
5 
-20 -12 42 -10 25
Where, 
The first line represents the size of an array. 
The second line represents array elements.

Qno38:
Given an array Arr[] of size L and a number N, you need to write a program to find if there exists a pair of elements in the array whose difference is N.

Example 1:

Input:
L = 6, N = 78
arr[] = {5, 20, 3, 2, 5, 80}
Output: 1
Explanation: (2, 80) have difference of 78.

let arr = [5, 20, 3, 2, 5, 80];
let L = 6;
let N = 78;

Qno39:
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
Return the minimum number of boats to carry every given person.
Example 1:
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Qno40:
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
Example 1:
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


