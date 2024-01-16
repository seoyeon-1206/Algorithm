function solution(sizes) {
    var answer = 0;
    const resizes = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));
    
    let maxWidth =0;
    let maxHeight = 0;
    
    resizes.forEach(([w, h]) => {
    maxWidth = Math.max(maxWidth, w);
    maxHeight = Math.max(maxHeight, h);
  });
    
    return maxWidth * maxHeight;
}