class Solution {
    func findPeakElement(_ nums: [Int]) -> Int {
        var low = 0, high = nums.count - 1
        
        while low < high {
            let mid = (low+high)/2

            if nums[mid + 1] > nums[mid]  {
                low = mid + 1
            } else if mid > 0 && nums[mid - 1] > nums[mid] {
                high = mid - 1
            } else {
                return mid
            }
        }
        return low
    }
}