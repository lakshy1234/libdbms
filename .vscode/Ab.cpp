#include <iostream>
#include <stack>

// Function to reverse the stack
void reverseStack(std::stack<int> &st, std::stack<int> &result) {
    if (st.empty()) return;  // Base case: if the stack is empty, return

    int curr = st.top();     // Get the top element
    st.pop();                // Remove the top element
    reverseStack(st, result);// Recursive call with the remaining stack
    result.push(curr);       // Push the current element to the result stack after recursion
}

int main() {
    std::stack<int> st;
    st.push(1);
    st.push(2);
    st.push(3);
    st.push(4);

    std::stack<int> res;
    reverseStack(st, res);  // Call the function to reverse the stack

    while (!res.empty()) {  // Print the elements of the reversed stack
        int curr = res.top();
        res.pop();
        std::cout << curr << "\n";
    }

    return 0;
}
