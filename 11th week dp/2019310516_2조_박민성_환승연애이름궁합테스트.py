# 환승연애 이름궁합 테스트 using DP
# 
# Made by 2조 박민성
# last edited >> 22.11.17

def combine(comb, name_dic):  # 이름 섞기
    for i in comb:
        AB = ''
        A=name_dic[i[0]]
        B=name_dic[i[1]]
        N = len(A)
        M = len(B)
        end = min(N, M)
        for k in range(end):
            AB += A[k] + B[k] 
        AB += A[end:] + B[end:] #남은 문자열 넣기
        i.append(AB)
    return comb


def calculate(AB, alp):  # 이름 계산
    num_lst = [alp[i] for i in AB]
    while len(num_lst) > 2:  # dp
        num_lst = [(num_lst[i]+num_lst[i+1]) %
                   10 for i in range(len(num_lst)-1)]
        # print(num_lst) // 연산 과정 보기 위한 코드
    return num_lst[0]*10+num_lst[1]


if __name__ == "__main__":
    name_dic = {"이나연": "LEENAYEON",
                "성해은": "SEONGHAEEUN",
                "김지수": "KIMJISOO",
                "이지연": "LEEJIYEON",
                "박나언": "PARKNAON",
                "남희두": "NAMHEEDOO",
                "정규민": "JEONGGYUMIN",
                "박원빈": "PARKWONBIN",
                "김태이": "KIMTAEI",
                "정현규": "JEONGHYEONGYU"}
    alp = {"A": 3, "B": 2, "C": 1, "D": 2, "E": 4, "F": 3, "G": 1, "H": 3, "I": 1, "J": 1, "K": 3, "L": 1, "M": 3,
           "N": 2, "O": 1, "P": 2, "Q": 2, "R": 2, "S": 1, "T": 2, "U": 1, "V": 1, "W": 1, "X": 2, "Y": 2, "Z": 1}

    comb = [[i, j] for i in name_dic
            for j in name_dic if i != j]
    comb = combine(comb, name_dic)
    for i in comb:
        i.append(calculate(i[2], alp))
        print(f"{i[0]} ♥ {i[1]} 궁합점수 {i[3]}점")

    comb.sort(key=lambda x: x[3], reverse=True)
    print("=======================================")
    print("===== → 환승연애 이름궁합테스트 ← =====")
    print("=                                     =")
    print("=            ♥최고의 궁합♥            =")
    print("=                                     =")
    print(f"=               {comb[0][0]}                =")
    print(f"=               {comb[0][1]}                =")
    print("=                                     =")
    print(f"=            궁합 점수 >> {comb[0][3]}점        =")
    print("=======================================")
