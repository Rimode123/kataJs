Début
variable n:entier


ecrire("entrer n")
lire(n)


pour(i=1 à n)

si ((modulo(n,3)et(n,5)=0))

alors 
    ecrire("FizzBuzz")

    finsi

si((modulo(n,3)=0))

alors 
    ecrire("Fizz")
    
    finsi

si((modulo(n,5)=0))

alors 
    ecrire("Buzz")

    finsi
    
sinon 
ecrire("affichier",n)



fin pour 
fin 




