import heapq

def mincost(arr):
    # Convert the input array into a min heap
    heapq.heapify(arr)
    
    # Initialize the total cost
    total_cost = 0
    
    # Continue until there is only one rope left
    while len(arr) > 1:
        # Extract the two smallest ropes
        min1 = heapq.heappop(arr)
        min2 = heapq.heappop(arr)
        
        # Connect the two ropes and calculate the cost
        current_cost = min1 + min2
        
        # Add the current cost to the total cost
        total_cost += current_cost
        
        # Insert the connected rope back into the heap
        heapq.heappush(arr, current_cost)
    
    # Return the total cost
    return total_cost

# Examples
print(mincost([4, 3, 2, 6]))  # Output: 29
print(mincost([1, 2, 3, 4, 5]))  # Output: 33
