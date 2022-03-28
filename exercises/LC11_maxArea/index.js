function maxArea(height) {
    let maxArea = 0;
    let start = 0;
    let end = height.length - 1;

    while(start < end) {
        const currentArea = Math.min(height[start], height[end]) * (end - start) // area = height * width here heigh is min
        maxArea = Math.max(currentArea, maxArea);

        if(height[start] < height[end]) {
            start++;
        }else {
            end--;
        }
    }
    return maxArea;
}
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

module.exports = maxArea;
