

Algorithme
_______________________________________

Variable L=8: entier 
Variable C=4: entier 
Variable i,j : entier 

Debut 
   pour i=1 à 8

    si modulo(i,2) est égale à 0
    Ecrire (" ")

  pour j=1 à 4
    Ecrire ("# ")

  fin pour
    Ecrire ("\n")

    fin pour 

 fin









 









_________________________________________
en java 
_________________________________________
        int L = 8;
        int C = 4;
        System.out.println("\n1. Chessboard \n");
        
        
        for (int i = 1; i <= L; i++) {
            if(i%2!=0)
            System.out.print(" ");
            for (int j = 0; j < C; j++) {
                
                
                System.out.print("# ");
                
            }
            
          System.out.println("");
        }
        
    }