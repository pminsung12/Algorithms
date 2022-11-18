import pandas as pd
from collections import defaultdict
time = pd.read_csv('C:/Users/pmins/Downloads/time.csv', encoding='cp949')

# 요일별로 데이터프레임 분할, 각각을 종료시간으로 정렬
mon = time[time['요일'] == '월'].sort_values(by='종료시간', ascending=True)
tue = time[time['요일'] == '화'].sort_values(by='종료시간', ascending=True)
wed = time[time['요일'] == '수'].sort_values(by='종료시간', ascending=True)
thu = time[time['요일'] == '목'].sort_values(by='종료시간', ascending=True)
fri = time[time['요일'] == '금'].sort_values(by='종료시간', ascending=True)


def timeTableMaker(limit):
    credit = 0 # 현재까지의 학점
    res = [] # 반환할 시간표
    prev = 0 # 바로 전 과목의 종료 시간
    for i, row in mon.iterrows(): # 월
        if mon.at[i, '시작시간'] > prev:
            # 인덱스가 14보다 작으면 3학점, 같거나 크면 2학점
            if (i < 14 and credit+3 <= limit) or (i >= 14 and credit+2 <= limit):
                if(i < 14):
                    credit += 3
                else:
                    credit += 2
                # 시간표에 추가
                res.append([mon.at[i, '강의명'], credit, mon.at[i, '요일'],
                           mon.at[i, '시작시간'], mon.at[i, '종료시간']])
                # 강의 종료시간 저장해놓기
                prev = mon.at[i, '종료시간']
            else:
                # 초과하면 종료
                return res
    prev = 0
    for i, row in tue.iterrows(): # 화
        if tue.at[i, '시작시간'] > prev:
            if (i < 14 and credit+3 <= limit) or (i >= 14 and credit+2 <= limit):
                if(i < 14):
                    credit += 3
                else:
                    credit += 2
                res.append([tue.at[i, '강의명'], credit, tue.at[i, '요일'],
                           tue.at[i, '시작시간'], tue.at[i, '종료시간']])
                prev = tue.at[i, '종료시간']
            else:
                return res
    prev = 0
    for i, row in wed.iterrows(): # 수
        if wed.at[i, '시작시간'] > prev:
            if (i < 14 and credit+3 <= limit) or (i >= 14 and credit+2 <= limit):
                if(i < 14):
                    credit += 3
                else:
                    credit += 2
                res.append([wed.at[i, '강의명'], credit, wed.at[i, '요일'],
                           wed.at[i, '시작시간'], wed.at[i, '종료시간']])
                prev = wed.at[i, '종료시간']
            else:
                return res
    prev = 0
    for i, row in thu.iterrows(): # 목
        if thu.at[i, '시작시간'] > prev:
            if (i < 14 and credit+3 <= limit) or (i >= 14 and credit+2 <= limit):
                if(i < 14):
                    credit += 3
                else:
                    credit += 2
                res.append([thu.at[i, '강의명'], credit, thu.at[i, '요일'],
                           thu.at[i, '시작시간'], thu.at[i, '종료시간']])
                prev = thu.at[i, '종료시간']
            else:
                return res
    prev = 0
    for i, row in fri.iterrows(): # 금
        if fri.at[i, '시작시간'] > prev:
            if (i < 14 and credit+3 <= limit) or (i >= 14 and credit+2 <= limit):
                if(i < 14):
                    credit += 3
                else:
                    credit += 2
                res.append([fri.at[i, '강의명'], credit, fri.at[i, '요일'],
                           fri.at[i, '시작시간'], fri.at[i, '종료시간']])
                prev = fri.at[i, '종료시간']
            else:
                return res

    return

# 학점을 꽉 채우지 않은 이유는 손동민 학우님께 질문드렸을 때, 그리디 알고리즘인 것을
# 감안해 실제 시간표 짤 때처럼 1,2학점 남겨두는 건 신경 쓸 필요 없다고 피드백 받았습니다!!

print("=============================================")
print("=======      시간표 배정 프로그램     =======")
print()
print("[과목, 쌓이는 총학점, 요일, 시작시간, 종료시간]")
print()
credit = int(input("희망 학점을 입력하세요 >> "))
for i in timeTableMaker(credit):
    print(i)
print("=============================================")

print("프로그램 종료...")
