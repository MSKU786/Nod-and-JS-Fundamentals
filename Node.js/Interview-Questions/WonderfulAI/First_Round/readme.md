
Given a stream of items too large to hold in memory, find the top-k most frequent. 


Function FindTopK(stream, k) {
	
	Const freq = new Map<>();

	For (const item of stream) {
		freq.set(item, (freq.get(item)|| 0) + 1)
}

Const heap = new MaxHeap((a,b) => b[1]-a[1]);
	
	For (let [key , value] of freq ){
	heap.push([key, value])
	If (heap.size() > k) {
		heap.pop();
}
}  

Return heap;
}
