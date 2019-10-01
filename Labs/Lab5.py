str1 = input("Please enter the first word that comes to mind after reading this: ")
vowels = 0
consonants = 0

for i in str1:
  if(i == 'a' or i == 'e' or i == 'o' or i == 'u' or i == 'A' or i == 'E' or i == 'I' or i == 'O' or i == 'U'):
    vowels = vowels + 1
  else:
    consonants = consonants + 1
    
print("Total # of Vowels: ", vowels)
print("Total # of Consonants: ", consonants)
