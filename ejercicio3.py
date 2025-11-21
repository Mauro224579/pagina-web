numero=int(input("Ingrese el número de términos para la serie de Leibniz: "))
import math

def serieleibniz(numero):
   
    suma = 0
    for i in range(numero):
       
        termino = ((-1)**i) / (2*i + 1)
        suma += termino
    
    pi = suma * 4
    return pi

pi1 = serieleibniz(numero)

print(f"Aproximación de Pi con {numero} términos: {pi1}")
print(f"Valor real de Pi: {math.pi}")
