from random import randint
def guess(x):
  it = randint(0, 101)
  if x == it:
      print("You got it!")
  elif x > it:
      print("too high")
  else:
      print("too low")
print guess(50)
