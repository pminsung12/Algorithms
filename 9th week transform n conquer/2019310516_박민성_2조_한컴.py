import pandas as pd
import copy
from collections import defaultdict
fooddf = pd.read_csv('C:/Users/pmins/Downloads/foods.csv')
foodlst=fooddf.values.tolist()
fooddic=defaultdict(int)
for i in foodlst:
    for j in i:
        
        fooddic[j]+=1
fooddic
foodlst = [x for x,y in sorted(fooddic.items(), key = lambda x: x[1])] #추천용
realfoodlst=copy.deepcopy(foodlst) #진짜 음식 목록

def addFood():
    foodName = input("음식 이름 >> ")
    fooddic[foodName]+=1
    foodlst = [x for x,y in sorted(fooddic.items(), key = lambda x: x[1])] # value: [1]
    realfoodlst=copy.deepcopy(foodlst)
    return

def showFood():
    return foodlst[0]

def hateFood():
    hatelst=input("먹기 싫은 음식을 입력하세요 >> ").split(' ')
    for i in hatelst:
        if i in foodlst:
            foodlst.remove(i) # 추천용에서 삭제
            print(f"{i}가 목록에서 삭제되었습니다.")
    print(f"가장 적게 먹었던 메뉴 >> {foodlst[0]}")
    # 이미 프리소팅 되어 있는 상황에서 삭제만 했으므로 다시 프리소팅할 필요 x
    return


def showAllFood():
    print(realfoodlst) #삭제안한 마지막 프리소팅된 모든 음식 출력
    return


def showMenu():
    print()
    print("=============================================")
    print("===============      Menu     ===============")
    print("1. 메뉴 추가")
    print("2. 메뉴 출력")
    print("3. 먹었던 메뉴들 중 오늘 먹기 싫은 음식 입력")
    print("4. 먹었던 메뉴들 리스트 확인")
    print("5. 프로그램 종료")
    print("=============================================")
    print()


def start():

    while True:

        showMenu()
        choice = int(input(">>"))
        if choice == 1:
            addFood()
        elif choice == 2:
            print(showFood())
        elif choice == 3:
            hateFood()
        elif choice == 4:
            showAllFood()
        elif choice == 5:
            print("프로그램을 종료합니다.")
            return


start()