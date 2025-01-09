class Solution {
    func myPow(_ x: Double, _ n: Int) -> Double {
        var num = pow(x, abs(n))

        if n < 0 {
            return 1/num
        }
        return num
    }

    func pow(_ x: Double, _ n: Int) -> Double {
        if n == 0 {
            return 1
        }

        let temp = pow(x, n/2)
        if n % 2 == 1 {
            return  temp * temp * x
        } else {
            return temp * temp
        }
    }
}