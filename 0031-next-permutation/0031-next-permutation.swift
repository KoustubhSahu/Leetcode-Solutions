class Solution {
    func nextPermutation(_ nums: inout [Int]) {
        var i = -1, m = 0
        for k in (0..<nums.count-1).reversed() {
            if nums[k] < nums[k+1] {
                i = k
                break
            }
        }

        if i == -1 {
            nums = nums.reversed()
            return
        }

        m = i + 1
        for j in i+1..<nums.count {
            if nums[j] < nums[m] && nums[j] > nums[i] {
                m = j
            }
        }

        let temp = nums[m]
        nums[m] = nums[i]
        nums[i] = temp
        
        let sortedSlice = nums[i+1..<nums.count].sorted()

        for j in i+1..<nums.count {
            nums[j] = sortedSlice[j-i-1]
        } 
    }
}