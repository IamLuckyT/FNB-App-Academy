foods = []
prices = []
total = 8

while True:
	food = input("Enter food you would like to buy or press q to quit")
	if food =='q':
		break
	else:
		price = float(input(f"Enter the price of the (food): R"))
		foods.append(food)
		prices.append(price)

	print()