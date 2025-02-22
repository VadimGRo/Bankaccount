function numberSplit(n):any {
	const b:number = n / 2
	const g:number = Math.ceil(b)
	const h:number = Math.floor(b)
	return [h, g]
}
console.log(numberSplit(10))