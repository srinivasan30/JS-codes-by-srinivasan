arr = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
def number_2_word(n):
    if(n==0):
        return ""    
    else:
        small_ans = arr[n%10]
        ans = number_2_word(int(n/10)) + small_ans + " "
    return ans
def vowels_count(str):
    vowels=0
    for i in str:
        if(i=='a' or i=='e' or i=='i' or i=='o' or i=='u' or i=='A' or i=='E' or i=='I' or i=='O' or i=='U'):
            vowels=vowels+1
    return int(vowels)
no_of_elements = int(input())
elements = input()
emotions = input()
qty = []
for word in elements:
   if word.isdigit():
      qty.append(int(word))
elements=elements.split(" ")
emotions=emotions.split(" ")
total_score = 0
for i in range(0,len(emotions)):
    if emotions[i] == "Happy":
        total_score = total_score + (10 * qty[i])
    elif emotions[i] == "Sad":
        total_score = total_score + (5 * qty[i])
    elif emotions[i] == "Neutral":
        total_score = total_score + (2 * qty[i])
    elif emotions[i] == "None":
        total_score = total_score + (1 * qty[i])
vowels=0
for i in range(0,len(elements)):
    v=vowels_count(elements[i])
    vowels = vowels + (v*qty[i])
final_score=0
if total_score>vowels:
    final_score = total_score//vowels
else:
    final_score=vowels//total_score
flag = False
if final_score > 1:
    for i in range(2, final_score):
        if (final_score % i) == 0: 
            flag = True
            break
if flag:
    print("No",number_2_word(final_score))
else:
    print("Yes",number_2_word(final_score))