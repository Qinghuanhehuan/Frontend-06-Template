function kmp(source, pattern) {
	// 计算table
	let table = new Array(pattern.length).fill(0); {
		let i = 1,
			j = 0; // i自重复，从1开始，j已重复
		while (i < pattern.length) {
			if (pattern[i] === pattern[j]) {
				++j, ++i;
				table[i] = j;
			} else { // aabaaac
				if (j > 0)
					j = table[j];
				else
					++i; // 没匹配上，往前走一格
			}
		}
	}
	// console.log(table);
	// abcdabce

	// 匹配
	{
		let i = 0,
			j = 0;
		while (i < source.length) {
			
			if (pattern[j] === source[i]) {
				++i, ++j;
			} else {
				if (j > 0)
					j = table[j];
				else
					++i;
			}
			if (j === pattern.length) return true;
		}
		return false;
	}
}

// console.log(kmp('Helxlo', 'll'));
// console.log(kmp('abcdabcdabcex', 'abcdabce'));
console.log(kmp('aabaabaaac', 'aabaaac'));
