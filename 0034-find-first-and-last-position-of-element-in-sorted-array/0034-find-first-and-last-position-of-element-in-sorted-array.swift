class Solution {
    func searchRange(_ nums: [Int], _ target: Int) -> [Int] {
        let leftIndex = searchLeftIndex(nums, 0, nums.count - 1, target)
        if leftIndex == -1 {
            return [-1, -1]
        }
        let rightIndex = searchRightIndex(nums, 0, nums.count - 1, target)
        return [leftIndex, rightIndex]
    }

    func searchLeftIndex(_ nums: [Int], _ start: Int, _ end: Int, _ target: Int) -> Int {
        var s = start, e = end

        var index = -1
        while s <= e {
            let mid = (s+e) / 2

            if nums[mid] == target {
                index = mid
                e = mid - 1
            } else if nums[mid] < target {
                s = mid + 1
            } else {
                e = mid - 1
            }
        }

        return index
    }

    
    func searchRightIndex(_ nums: [Int], _ start: Int, _ end: Int, _ target: Int) -> Int {
        var s = start, e = end

        var index = -1
        while s <= e {
            let mid = (s+e) / 2

            if nums[mid] == target {
                index = mid
                s = mid + 1
            } else if nums[mid] < target {
                s = mid + 1
            } else {
                e = mid - 1
            }
        }

        return index
    }
}