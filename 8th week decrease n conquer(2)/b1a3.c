#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct _Node {
    int key;
    char name[100];
} Node;

int binsearch(Node data[], int n) {
    int low, high;
    int mid, input;
 
    low = 0;
    high = n - 1;
    while (low <= high) {
        printf("=========Menu========\n");
        printf("0: 더 좋은 스펙\n");
        printf("1: 더 낮은 스펙\n");
        printf("2: 이걸로 선택!\n");
        printf("=====================\n");
        mid = (low + high) / 2;
        printf("%s 모델 - %d원에 어떠신가요??\n", data[mid].name, data[mid].key);
        printf(">>");
        scanf("%d", &input);
        if (input==2) {            //탐색 성공
            return mid;        
        }
        else if (input==1) {        //탐색 범위를 아래쪽으로
            high = mid - 1;
        }
        else if (input==0) {        //탐색 범위를 위쪽으로
            low = mid + 1;
        }
    }
    printf("원하는 상품을 찾지 못했습니다.. 다시 시도해보세요");
    return -1;                            //탐색 실패
}


int main()
{
    Node t[77];
    t[0].key=379000;
    t[0].key=379000;
    strcpy(t[0].name, "아이패드 미니 16GB 와이파이");
    t[1].key=429000;
    strcpy(t[1].name, "아이패드 미니 32GB 와이파이");
    t[2].key=429900;
    strcpy(t[2].name, "아이패드 미니 16GB 셀룰러");
    t[3].key=479000;
    strcpy(t[3].name, "아이패드 미니 64GB 와이파이");
    t[4].key=479900;
    strcpy(t[4].name, "아이패드 미니 32GB 셀룰러");
    t[5].key=529000;
    strcpy(t[5].name, "아이패드 미니 64GB 셀룰러");
    t[6].key=549000;
    strcpy(t[6].name, "아이패드 미니 128GB 와이파이");
    t[7].key=579000;
    strcpy(t[7].name, "아이패드 16GB 와이파이");
    t[8].key=599000;
    strcpy(t[8].name, "아이패드 미니 128GB 셀룰러");
    t[9].key=629000;
    strcpy(t[9].name, "아이패드 32GB 와이파이");
    t[10].key=629900;
    strcpy(t[10].name, "아이패드 16GB 셀룰러");
    t[11].key=679000;
    strcpy(t[11].name, "아이패드 64GB 와이파이");
    t[12].key=679900;
    strcpy(t[12].name, "아이패드 32GB 셀룰러");
    t[13].key=729000;
    strcpy(t[13].name, "아이패드 64GB 셀룰러");
    t[14].key=749000;
    strcpy(t[14].name, "아이패드 128GB 와이파이");
    t[15].key=799000;
    strcpy(t[15].name, "아이패드 128GB 셀룰러");
    t[16].key=849000;
    strcpy(t[16].name, "아이패드 256GB 와이파이");
    t[17].key=879000;
    strcpy(t[17].name, "아이패드 미니 256GB 와이파이 + 셀룰러");
    t[18].key=879900;
    strcpy(t[18].name, "아이패드 에어 256GB 와이파이");
    t[19].key=899000;
    strcpy(t[19].name, "아이패드 256GB 셀룰러");
    t[20].key=919000;
    strcpy(t[20].name, "아이패드 64기가 와이파이 + 셀룰러");
    t[21].key=929000;
    strcpy(t[21].name, "아이패드 에어 3세대 64GB 와이파이");
    t[22].key=929900;
    strcpy(t[22].name, "아이패드 에어 4세대 64GB 와이파이");
    t[23].key=979000;
    strcpy(t[23].name, "아이패드 에어 2 128GB 와이파이");
    t[24].key=1079000;
    strcpy(t[24].name, "아이패드 에어 256GB 와이파이 + 셀룰러");
    t[25].key=1079900;
    strcpy(t[25].name, "아이패드 에어 2 256GB 와이파이");
    t[26].key=1159000;
    strcpy(t[26].name, "아이패드 256GB 와이파이 + 셀룰러");
    t[27].key=1169000;
    strcpy(t[27].name, "아이패드 에어 3세대 256GB 와이파이");
    t[28].key=1169900;
    strcpy(t[28].name, "아이패드 에어 3세대 64GB 와이파이 + 셀룰러");
    t[29].key=1179000;
    strcpy(t[29].name, "아이패드 에어 2 128GB 와이파이 + 셀룰러");
    t[30].key=1179900;
    strcpy(t[30].name, "아이패드 프로 9.7 256GB 와이파이");
    t[31].key=1249000;
    strcpy(t[31].name, "아이패드 프로 11인치 64GB 와이파이");
    t[32].key=1279000;
    strcpy(t[32].name, "아이패드 에어 2 256GB 와이파이 + 셀룰러");
    t[33].key=1279900;
    strcpy(t[33].name, "아이패드 프로 12.9 128GB 와이파이");
    t[34].key=1379000;
    strcpy(t[34].name, "아이패드 프로 12.9 256GB 와이파이");
    t[35].key=1379900;
    strcpy(t[35].name, "아이패드 프로 9.7 256GB 와이파이 + 셀룰러");
    t[36].key=1399000;
    strcpy(t[36].name, "아이패드 프로 11인치 256GB 와이파이");
    t[37].key=1409000;
    strcpy(t[37].name, "아이패드 에어 3세대 256GB 와이파이 + 셀룰러");
    t[38].key=1409900;
    strcpy(t[38].name, "아이패드 에어 4세대 256GB 와이파이 + 셀룰러");
    t[39].key=1479000;
    strcpy(t[39].name, "아이패드 프로 12.9 128GB 와이파이 + 셀룰러");
    t[40].key=1479900;
    strcpy(t[40].name, "아이패드 에어 3 256GB 와이파이 + 셀룰러");
    t[41].key=1489000;
    strcpy(t[41].name, "아이패드 프로 11인치 64GB 와이파이 + 셀룰러");
    t[42].key=1579000;
    strcpy(t[42].name, "아이패드 프로 12.9 512GB 와이파이");
    t[43].key=1579900;
    strcpy(t[43].name, "아이패드 프로 12.9 256GB 와이파이 + 셀룰러");
    t[44].key=1639000;
    strcpy(t[44].name, "아이패드 프로 11인치 256GB 와이파이 + 셀룰러");
    t[45].key=1679000;
    strcpy(t[45].name, "아이패드 프로 10.5 512GB 와이파이");
    t[46].key=1679900;
    strcpy(t[46].name, "아이패드 프로 10.5 256GB 와이파이 + 셀룰러");
    t[47].key=1699000;
    strcpy(t[47].name, "아이패드 프로 11인치 512GB 와이파이");
    t[48].key=1729000;
    strcpy(t[48].name, "아이패드 프로 12.9인치 128GB 와이파이");
    t[49].key=1729900;
    strcpy(t[49].name, "아이패드 프로 11인치 2세대 128GB 와이파이");
    t[50].key=1779000;
    strcpy(t[50].name, "아이패드 프로 12.9 512GB 와이파이 + 셀룰러");
    t[51].key=1879000;
    strcpy(t[51].name, "아이패드 프로 10.5 512GB 와이파이 + 셀룰러");
    t[52].key=1879900;
    strcpy(t[52].name, "아이패드 프로 11 512GB 와이파이");
    t[53].key=1939000;
    strcpy(t[53].name, "아이패드 프로 11인치 512GB 와이파이 + 셀룰러");
    t[54].key=1969000;
    strcpy(t[54].name, "아이패드 프로 12.9인치 128GB 와이파이 + 셀룰러");
    t[55].key=1969900;
    strcpy(t[55].name, "아이패드 프로 11인치 2세대 128GB 와이파이 + 셀룰러");
    t[56].key=2079000;
    strcpy(t[56].name, "아이패드 프로 11 512GB 와이파이 + 셀룰러");
    t[57].key=2119000;
    strcpy(t[57].name, "아이패드 프로 12.9인치 256GB 와이파이 + 셀룰러");
    t[58].key=2119900;
    strcpy(t[58].name, "아이패드 프로 11인치 2세대 256GB 와이파이 + 셀룰러");
    t[59].key=2179000;
    strcpy(t[59].name, "아이패드 프로 11 1TB 와이파이");
    t[60].key=2179900;
    strcpy(t[60].name, "아이패드 프로 12.9인치 512GB 와이파이");
    t[61].key=2299000;
    strcpy(t[61].name, "아이패드 프로 11인치 1TB 와이파이");
    t[62].key=2379000;
    strcpy(t[62].name, "아이패드 프로 11 1TB 와이파이 + 셀룰러");
    t[63].key=2419000;
    strcpy(t[63].name, "아이패드 프로 12.9인치 512GB 와이파이 + 셀룰러");
    t[64].key=2419900;
    strcpy(t[64].name, "아이패드 프로 11인치 2세대 512GB 와이파이 + 셀룰러");
    t[65].key=2539000;
    strcpy(t[65].name, "아이패드 프로 11인치 1TB 와이파이 + 셀룰러");
    t[66].key=2779000;
    strcpy(t[66].name, "아이패드 프로 12.9인치 1TB 와이파이");
    t[67].key=2779900;
    strcpy(t[67].name, "아이패드 프로 11인치 2세대 1TB 와이파이");
    t[68].key=2789000;
    strcpy(t[68].name, "아이패드 프로 12.9인치 2TB 와이파이");
    t[69].key=2789900;
    strcpy(t[69].name, "아이패드 프로 11인치 2세대 2TB 와이파이");
    t[70].key=2899000;
    strcpy(t[70].name, "아이패드 프로 11인치 2TB 와이파이");
    t[71].key=3004000;
    strcpy(t[71].name, "아이패드 프로 12.9인치 1TB 와이파이 + 셀룰러");
    t[72].key=3004900;
    strcpy(t[72].name, "아이패드 프로 11인치 2세대 1TB 와이파이 + 셀룰러");
    t[73].key=3139000;
    strcpy(t[73].name, "아이패드 프로 11인치 2TB 와이파이 + 셀룰러");
    t[74].key=3604000;
    strcpy(t[74].name, "아이패드 프로 12.9인치 2TB 와이파이 + 셀룰러");
    t[75].key=3604900;
    strcpy(t[75].name, "아이패드 프로 11인치 2세대 2TB 와이파이 + 셀룰러");
    
    
    int index = binsearch(t, 76);
    printf("최종결정은 %d원의 %s입니다.\n", t[index].key, t[index].name);
    return 0;
}