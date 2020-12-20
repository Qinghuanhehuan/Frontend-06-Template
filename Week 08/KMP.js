class StateKMP{
	constructor() {
	  this.state = null
		this.funTable = null
		this.endFun = () => {
			return this.endFun
		}
	}
	_buildTableKMP(pattern){
		let len = pattern.length
		let table = new Array(len).fill(0)
		let j = 0
		for(let i = 1; i < len; i++){
			if(pattern[i] === pattern[j]){
				j++
				table[i] = j
			}else{
				while(j > 0){
					j = j - 1
					if(pattern[i] === pattern[j]){
						j++
						table[i] = j
						break
					}
				}
			}
		}
		return table
	}
	_buildStateFun(pattern, tableKMP){
		let len = pattern.length
		let funTable = new Array(len)
		for(let i = 0; i < len; i++){
			funTable[i] = char => {
				if(char === pattern[i]){
					return i === len - 1 ? this.endFun : funTable[i+1]
				}else{
					return i - 1 > 0 ? funTable[tableKMP[i-1]](char):funTable[0]
				}
			}
		}
		this.funTable = funTable
	}
	
	match(source,pattern){
		let kmpPrefix = this._buildTableKMP(pattern)
		this._buildStateFun(pattern,kmpPrefix)
		this.state = this.funTable[0]
		for(let char of source){
			this.state = this.state(char)
		}
		return this.state === this.endFun
	}
}

let stateKMP = new StateKMP()
console.log(stateKMP.match('abababc','ad'))