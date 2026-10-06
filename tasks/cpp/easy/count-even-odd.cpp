/*
TASK: Count Even and Odd Numbers

Input:
[1, 2, 3, 4, 5, 6]

Output:
Even: 3
Odd: 3
*/

#include <iostream>
using namespace std;

int main() {
     int n;
       int evenCount = 0;
       int oddCount = 0;

       cout << "How many numbers? ";
       cin >> n;

       for (int i = 0; i < n; i++) {
           int number;
           cout << "Enter number: ";
           cin >> number;

           if (number % 2 == 0) {
               evenCount++;
           } else {
               oddCount++;
           }
       }

       cout << "Even numbers: " << evenCount << endl;
       cout << "Odd numbers: " << oddCount << endl;
    return 0;
}
