# BIG O EXAMPLES


# 0(1)
# Means the side of the date set is irrelevent. The number of steps/space required to execute code will remain constant.

def first_element(the_list):
	return the_list[0];

a_list = [1,2,3,4,4,3,53,7,435,47,365,]
b_list = [1];
b_list = range(1,100000000);
# Only one step is requred, no matter how big the data set is. Will always return 1


def first_element(the_list):
	element = the_list[0] - 1;
	return element # Still considered one step

a_list = [1,2,3,4,4,3,53,7,435,47,365,]
b_list = [1];
c_list = range(1,100000000);


# O(N)
# Grows linearly. i.e. The number of steps increase proportionately to however many elements there are.
# This creates a straight diagonal line

def loop_through_me(list):
	for element in the_list:
		# do something
		pass


# O(N^2)
# Represents an algorithm whose performance is directly proportional to the number of elements squred.
# VERY COMMON - a loop inside a loop

def oh_squared(the_list):
	for elem in the_list:
		for elem2 in the_list:
			# do something
			pass

# For every new inside loop, you add a number to the big oh_squared
# 3 nested loops = O(N^3)
# 4 nested loops = O(N^4)


# O(2^N)
# This represents an algorithm that doubles with each new element.
# i.e. You add one new element, it takes twice as long

def fib(num):
	if(num <= 1):
		return num
	return fib(num - 2) + fib(num - 1)
	# This is like adding a higher set of grandparents on a family tree and adding their whole new family tree
print fib(5)