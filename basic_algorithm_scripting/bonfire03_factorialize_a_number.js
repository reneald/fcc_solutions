function factorialize(num) {
	var i = num;
	var fact = 1;
	while (i > 1) {
		fact *= i;
		i--;
	}
	return fact;
}

factorialize(5);