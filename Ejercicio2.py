def doble_factorial(n):
    if n == 0 or n == 1:
        return 1
    
    else:
        return n * doble_factorial(n - 2)

n = int(input("introduce un numero: "))   
if n < 0:
        print("El número no debe ser negativo.")
elif n == 0 or n == 1:
        print(1)
else:
        print(doble_factorial(n))

    